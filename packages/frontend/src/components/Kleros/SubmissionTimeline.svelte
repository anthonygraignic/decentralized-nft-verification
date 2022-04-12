<script>
	import { isCollectionStatusRegistered } from '$lib/mapper/litem';
	import { shortenAddress } from '$lib/utils/blockchain-utils';
	import { CHALLENGE_PERIOD_IN_SECONDS, timestampinSecondsToDate } from '$lib/utils/date-utils';

	import AddressLinkWrapper from '../Blockchain/AddressLinkWrapper.svelte';
	import EvidenceItem from './EvidenceItem.svelte';
	import SubmissionTimelineItem from './SubmissionTimelineItem.svelte';

	export let collection;
	const collectionVerified = isCollectionStatusRegistered(collection.status);

	//TODO put events(request & rounds...) in a list and order them DESC/ASC
</script>

<ol>
	<!-- {@debug collection} -->
	{#each collection.requests as request}
		{@const submissionDateTime = timestampinSecondsToDate(request.submissionTime)}
		<!-- {@const challengePeriodInDays = CHALLENGE_PERIOD_IN_SECONDS / 3600 / 24} -->
		{#if request.disputed}
			<li class="mb-10 ml-6">
				<a
					class=""
					href="https://court.kleros.io/cases/{request.disputeID}"
					target="_blank"
					rel="external noopener">See case in Kleros court</a
				>
			</li>
			<!-- {#each request.rounds as round}
				<SubmissionTimelineItem
					datetime={timestampinSecondsToDate(round.creationTime)}
					{collectionVerified}
				>
					<details>
						<summary class="text-base font-bold">Dispute Round</summary>
						<p class="break-all">{round.id}</p>
					</details>
				</SubmissionTimelineItem>
			{/each} -->
			<!-- {#each request.evidences as evidence}
				<EvidenceItem {evidence} />
			{/each} -->
		{/if}
		{#if request.resolved && !request.disputed && request.requestType === 'RegistrationRequested' && (request.disputeOutcome === 'None' || request.disputeOutcome === 'Accept')}
			<SubmissionTimelineItem
				datetime={timestampinSecondsToDate(request.resolutionTime)}
				{collectionVerified}
			>
				<p>Collection verified after being unchallenged</p>
			</SubmissionTimelineItem>
		{/if}
		{#if request.requestType === 'ClearingRequested' && (request.disputeOutcome === 'None' || request.disputeOutcome === 'Accept')}
			<SubmissionTimelineItem
				datetime={timestampinSecondsToDate(request.resolutionTime)}
				{collectionVerified}
			>
				<p>Collection removed</p>
			</SubmissionTimelineItem>
		{/if}
		<SubmissionTimelineItem datetime={submissionDateTime} {collectionVerified}>
			<p>
				{#if request.requestType === 'RegistrationRequested'}
					NFT Collection Submitted by <AddressLinkWrapper address={request.requester}
						>{shortenAddress(request.requester)}</AddressLinkWrapper
					>
				{:else if request.requestType === 'ClearingRequested'}
					Removal requested by <AddressLinkWrapper address={request.requester}
						>{shortenAddress(request.requester)}</AddressLinkWrapper
					>
				{:else}
					{request.requestType || 'Unknown request'}
				{/if}
			</p>
		</SubmissionTimelineItem>
	{/each}
</ol>

<style lang="postcss">
	ol {
		@apply relative border-l border-vgray-light dark:border-gray-700;
	}
	p {
		@apply text-base font-bold break-all;
	}
</style>
