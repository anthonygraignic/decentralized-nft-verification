<script>
	import { chains } from '$lib/utils/blockchain-utils';
	import LoadingButton from '../../components/LoadingButton.svelte';
	import ErrorComponent from '../../components/ErrorComponent.svelte';
	import FileInput from '../../components/Form/FileInput.svelte';
	import Switch from '../../components/Form/Switch.svelte';
	import { add, connectIpfs, uploadFile } from '$lib/ipfs';
	import { vars } from '$lib/env-variables';
	import { load } from './[id].svelte';

	let fields = {
		chainId: ''
	};

	let loading = false;
	let loadingText = 'Loading';
	let error;

	let enableSocials = false;
	let enableProof = false;
	let enableInvestment = false;

	let thumbnailFiles;
	let proofFiles;

	if (vars.DEV) {
		fields = { chainId: '1', address: '0x123', name: 'Collection Test', author: 'Anthony' };
	}
	async function onSubmit() {
		loading = true;
		setTimeout(async () => {
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

				// Notify user
				alert(JSON.stringify(fields));
			} catch (err) {
				error = err;
			} finally {
				loading = false;
			}
		}, 5000);
	}
</script>

<svelte:head>
	<script
		src="https://cdn.jsdelivr.net/npm/ipfs-http-client@56.0.1/index.min.js"
		integrity="sha256-wSeBy8TCPMSoDkG1GDex5t3rckH1lwVyGdbRPGjRDTY="
		crossorigin="anonymous"></script>
</svelte:head>

<main>
	<form class="form__wrapper" on:submit|preventDefault={onSubmit}>
		<h1 class="form__title">Submit your collection</h1>
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
					placeholder="Leonard Da Vinci"
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
						required
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
					<FileInput id="proof" label="Upload Proof" accept=".txt,.pdf" bind:files={proofFiles} />
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

		<ErrorComponent {error} />
		<LoadingButton {loading} {loadingText} defaultText="Submit" disabled={error} />
	</form>
</main>
