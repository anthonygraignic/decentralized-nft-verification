<script>
	import {
		chains,
		getChainFromRegistryId,
		getChainSymbolFromIdStr,
		registries
	} from '$lib/utils/blockchain-utils';
	import { convertToIpfsGatewayLink } from '$lib/utils/ipfs-utils';
	import { connectIpfs, uploadFile } from '$lib/ipfs';
	import { vars } from '$lib/env-variables';
	import { transformToGTCRItem } from '$lib/kleros-curated/gtcr-submission';
	import ipfsPublish from '$lib/ipfs-publish';
	import { addItem } from '$lib/contract';

	import LoadingButton from '../../components/LoadingButton.svelte';
	import ErrorComponent from '../../components/ErrorComponent.svelte';
	import FileInput from '../../components/Form/FileInput.svelte';
	import Switch from '../../components/Form/Switch.svelte';
	import OnlyConnected from '../../components/Blockchain/OnlyConnected.svelte';
	import OnlySupportedChain from '../../components/Blockchain/OnlySupportedChain.svelte';

	let fields = {
		chainId: '',
		registryId: registries[0].id
	};

	let loading = false;
	let loadingText = 'Loading';
	let error;
	let txTransaction = undefined;

	let acceptPolicy = false;
	let acceptDeposit = false;

	$: canSubmit = !loading && !txTransaction && acceptPolicy && acceptDeposit;

	$: chosenRegistry = registries.find((registry) => registry.id === fields.registryId);

	let enableSocials = true;
	let enableProof = false;
	let enableInvestment = false;

	let thumbnailFiles;
	let proofFiles;

	if (vars.DEV) {
		fields = {
			...fields,
			chainId: '1',
			address: '0x123',
			name: 'Collection Test',
			author: 'Anthony'
		};
	}
	// 	loading = true;
	// 	setTimeout(() => {
	// 		txTransaction = 'MOCK_TX';
	// 		loading = false;
	// 	}, 5000);
	// }
	async function onSubmit() {
		loading = true;
		try {
			loadingText = 'Connecting to IPFS...';
			await connectIpfs();

			if (thumbnailFiles && thumbnailFiles[0]) {
				loadingText = 'Uploading thumbnail to IPFS...';
				fields.thumbnail = await uploadFile(thumbnailFiles[0]);
			}
			if (enableProof && proofFiles && proofFiles[0]) {
				loadingText = 'Uploading proof to IPFS...';
				fields.proof = await uploadFile(proofFiles[0]);
			}

			// Upload metadata file
			const item = transformToGTCRItem(chosenRegistry.columns, fields);
			const enc = new TextEncoder();
			const fileData = enc.encode(JSON.stringify(item));
			loadingText = 'Uploading item to IPFS...';
			const ipfsEvidenceObject = await ipfsPublish('v-item.json', fileData);
			const ipfsEvidencePath = `/ipfs/${ipfsEvidenceObject[1].hash + ipfsEvidenceObject[0].path}`;

			console.log(ipfsEvidencePath);
			loadingText = 'Waiting for transaction...';
			// Request signature and submit.
			const tx = await addItem(ipfsEvidencePath, {
				value: chosenRegistry.submissionDeposit
			});
			console.log('Transaction hash is ', tx.hash);
			txTransaction = tx.hash;
		} catch (err) {
			console.error(err);
			error = err;
		} finally {
			loading = false;
		}
	}
</script>

<svelte:head>
	<script
		src="https://cdn.jsdelivr.net/npm/ipfs-http-client@56.0.1/index.min.js"
		integrity="sha256-wSeBy8TCPMSoDkG1GDex5t3rckH1lwVyGdbRPGjRDTY="
		crossorigin="anonymous"></script>
	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/ethers/5.6.2/ethers.umd.min.js"
		integrity="sha512-VLIBlhfqpqbMD6ZAPx7uzfF9/WEfVBgbcIfw5i/9k3smQlVupb1yq2WFChUcefVCBdkGrDHywOfnlMAKmK5QZQ=="
		crossorigin="anonymous"
		referrerpolicy="no-referrer"></script>
</svelte:head>

<main>
	<OnlyConnected bind:error>
		<form class="form__wrapper" on:submit|preventDefault={onSubmit}>
			<h1 class="form__title">Submit your collection</h1>
			<p class="bg-blue-100 rounded-lg p-4">
				Verification DAO submits this form to the Kleros NFT Curated List verification process for
				now.
				<br />
				Once submitted, it will go in a challenge phase of {chosenRegistry.challengePeriodDuration /
					24} days to verify.
				<br />
				Delays may occur where there are disputes for submissions. You can check on the status of the
				submission in the Kleros court.
				<br />
				<a href="/about" sveltekit:prefetch>Read more about the process.</a>
			</p>
			<!-- <p class="bg-yellow-200 rounded-lg p-4">
				⚠️<em>Only the Kleros Curated List's registry is supported for now.</em>
			</p> -->
			<h2>Verifying for</h2>
			<fieldset class="form__fieldset">
				<div class="form__input-group">
					<label for="registry" class="form__label">Verification registry</label>
					<!-- Disabled for now -->
					<select
						class="form__input"
						name="registry"
						id="registry"
						bind:value={fields.registryId}
						disabled
					>
						{#each registries as registry}
							<option value={registry.id}>{registry.name}</option>
						{/each}
					</select>
					<p>{chosenRegistry?.description || ''}</p>
				</div>
			</fieldset>
			<OnlySupportedChain
				supportedChainId={parseInt(getChainFromRegistryId(chosenRegistry.id), 10)}
			>
				<h2>Contract details</h2>
				<fieldset class="form__fieldset">
					<div class="form__input-group">
						<label for="chainid" class="form__label">Chain ID</label>
						<select class="form__input" name="chainid" id="chainid" bind:value={fields.chainId}>
							{#each chains as chain}
								<option value={chain.id}>{chain.name}</option>
							{/each}
						</select>
					</div>
					<div class="form__input-group">
						<label for="address" class="form__label">Contract address</label>
						<input
							class="form__input"
							type="text"
							id="address"
							name="address"
							placeholder="0x123456789"
							minlength="2"
							maxlength="42"
							required
							bind:value={fields.address}
						/>
					</div>
				</fieldset>

				<h2>General info</h2>
				<fieldset class="form__fieldset">
					<div class="form__input-group">
						<label for="name" class="form__label">Name</label>
						<input
							class="form__input"
							type="text"
							id="name"
							name="name"
							placeholder="La Madone Lansdowne"
							required
							bind:value={fields.name}
						/>
					</div>
					<div class="form__input-group">
						<label for="author" class="form__label">Author</label>
						<input
							class="form__input"
							type="text"
							id="author"
							name="author"
							placeholder="Leonard Da Vinci, Other"
							required
							bind:value={fields.author}
						/>
					</div>
					<div class="form__input-group">
						<label for="attribution" class="form__label">Attribution</label>
						<input
							class="form__input"
							type="text"
							id="attribution"
							name="attribution"
							placeholder="Leonardeschi"
							bind:value={fields.attribution}
						/>
					</div>
					<div class="form__input-group">
						<FileInput
							id="thumbnail"
							label="Upload thumbnail"
							helpText="A thumbnail representative of the collection"
							accept="image/*"
							bind:files={thumbnailFiles}
						/>
					</div>
				</fieldset>

				<h2>Socials</h2>
				<Switch
					id="socials-fieldset"
					text="Add social networks (website, discord...)"
					bind:checked={enableSocials}
				/>
				{#if enableSocials}
					<fieldset class="form__fieldset">
						<div class="form__input-group">
							<label for="website" class="form__label">Website</label>
							<input
								class="form__input"
								type="url"
								id="website"
								name="website"
								placeholder="https://leonard.eth"
								bind:value={fields.website}
							/>
						</div>
					</fieldset>
				{/if}

				<h2>Proof</h2>
				<Switch
					id="proofs-fieldset"
					text="Add proof of authorship, identity (...) in .txt or .pdf"
					bind:checked={enableProof}
				/>
				{#if enableProof}
					<fieldset class="form__fieldset">
						<div class="form__input-group">
							<FileInput
								id="proof"
								label="Upload Proof"
								accept=".txt,.pdf"
								bind:files={proofFiles}
							/>
						</div>
					</fieldset>
				{/if}

				<h2>Investment info</h2>
				<Switch
					id="investment-fieldset"
					text="Add sales distribution, royalties, vesting info"
					bind:checked={enableInvestment}
				/>
				{#if enableInvestment}
					<fieldset class="form__fieldset">
						<div class="form__input-group">
							<p>Coming soon...</p>
						</div>
					</fieldset>
				{/if}

				<h2>Policy</h2>
				<fieldset class="form__fieldset">
					<div class="flex items-center mb-4 ml">
						<input
							id="checkbox-policy"
							aria-describedby="checkbox-policy"
							type="checkbox"
							class="w-4 h-4 text-vblue bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
							bind:checked={acceptPolicy}
						/>
						<label
							for="checkbox-policy"
							class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
						>
							My submission complies with the <a
								href={convertToIpfsGatewayLink(chosenRegistry.policyLink)}
								rel="external noopener"
								target="_blank"
								class="text-blue-600 hover:underline dark:text-blue-500"
								>registry policy.
							</a> I understand that I can lose my deposit if not.
						</label>
					</div>
					<div class="flex items-center mb-4">
						<input
							id="checkbox-deposit"
							aria-describedby="checkbox-deposit"
							type="checkbox"
							class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
							bind:checked={acceptDeposit}
						/>
						<label
							for="checkbox-deposit"
							class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
							>I understand that a <span class="font-bold"
								>{chosenRegistry.submissionDeposit || '???'}
								{getChainSymbolFromIdStr(getChainFromRegistryId(chosenRegistry.id)) || '???'}</span
							> deposit is required</label
						>
					</div>
				</fieldset>

				<LoadingButton {loading} {loadingText} defaultText="Submit" disabled={!canSubmit} />
			</OnlySupportedChain>
		</form>
	</OnlyConnected>
	<ErrorComponent {error} />
	{#if txTransaction}
		<p class="form__result">
			<b>Congrats</b> 🎉️🎉️🎉️, you have submitted "{fields.name}", see your transaction
			<a href="{vars.EXPLORER_URL}/tx/{txTransaction}">{txTransaction}</a>
		</p>
	{/if}
</main>
