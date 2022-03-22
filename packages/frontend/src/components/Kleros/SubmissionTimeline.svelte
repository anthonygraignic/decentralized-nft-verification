<script>
	import { CHALLENGE_PERIOD_IN_SECONDS, timestampinSecondsToDate } from '$lib/utils/date-utils';
	import { isCollectionStatusRegistered } from '$lib/utils/litem';

	import AddressLinkWrapper from '../Blockchain/AddressLinkWrapper.svelte';
	import SubmissionTimelineItem from './SubmissionTimelineItem.svelte';

	export let collection;

	//TODO put events(request & rounds...) in a list and order them DESC/ASC
</script>

<ol class="relative border-l border-vgray-light dark:border-gray-700">
	{#each collection.requests as request}
		{@const submissionDateTime = timestampinSecondsToDate(request.submissionTime)}
		{@const challengePeriodInDays = CHALLENGE_PERIOD_IN_SECONDS / 3600 / 24}
		{#if request.disputed}
			{#each request.rounds as round}
				<SubmissionTimelineItem datetime={timestampinSecondsToDate(round.creationTime)}>
					<details>
						<summary class="text-base font-bold">Dispute Round</summary>
						<p class="break-all">{round.id}</p>
					</details>
				</SubmissionTimelineItem>
			{/each}
		{:else}
			<SubmissionTimelineItem
				datetime={timestampinSecondsToDate(
					parseInt(collection.requests[0].submissionTime) + CHALLENGE_PERIOD_IN_SECONDS
				)}
			>
				<p class="text-base font-bold break-all">
					Collection unchallenged after {challengePeriodInDays} days
				</p>
			</SubmissionTimelineItem>

			<SubmissionTimelineItem
				datetime={timestampinSecondsToDate(
					parseInt(collection.requests[0].submissionTime) + CHALLENGE_PERIOD_IN_SECONDS
				)}
			>
				<p class="text-base font-bold break-all">Collection verified</p>
			</SubmissionTimelineItem>
			<SubmissionTimelineItem
				datetime={timestampinSecondsToDate(collection.requests[0].submissionTime)}
			>
				<p class="text-base font-bold break-all">
					{challengePeriodInDays} days registration period begins
				</p>
			</SubmissionTimelineItem>
		{/if}
		<SubmissionTimelineItem datetime={submissionDateTime}>
			<p class="text-base font-bold break-all">
				{#if request.requestType === 'RegistrationRequested'}
					NFT Collection Submitted by <AddressLinkWrapper address={request.requester}
						>{request.requester}</AddressLinkWrapper
					>
				{:else if request.requestType === 'ClearingRequested'}
					Removal requested by <AddressLinkWrapper address={request.requester}
						>{request.requester}</AddressLinkWrapper
					>
				{:else}
					{request.requestType || 'Unknown request'}
				{/if}
			</p>
		</SubmissionTimelineItem>
	{/each}
</ol>
