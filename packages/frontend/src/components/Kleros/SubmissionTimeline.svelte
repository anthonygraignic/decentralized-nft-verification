<script>
	import { CHALLENGE_PERIOD_IN_SECONDS, timestampinSecondsToDate } from '$lib/utils/date-utils';

	import AddressLinkWrapper from '../Blockchain/AddressLinkWrapper.svelte';

	export let collection;
</script>

<ol class="relative border-l border-vgray-light dark:border-gray-700">
	{#each collection.requests as request}
		{@const submissionDateTime = timestampinSecondsToDate(request.submissionTime)}
		<li class="mb-10 ml-6">
			<span
				class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full"
			>
				<svg
					width="10"
					height="10"
					viewBox="0 0 10 10"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle cx="5" cy="5" r="5" fill="#0848F7" />
				</svg>
			</span>
			<time
				class="block mb-1 text-sm font-normal leading-non"
				datetime={submissionDateTime.toISOString()}>{submissionDateTime.toLocaleDateString()}</time
			>
			<p class="text-base font-bold break-all">
				{#if request.requestType === 'RegistrationRequested'}
					NFT Collection Submitted by <AddressLinkWrapper address={request.challenger}
						>{request.challenger}</AddressLinkWrapper
					>
				{:else}
					Unknown request
				{/if}
			</p>
		</li>
	{/each}

	{#if collection.requests.length === 1 && collection.requests[0].requestType === 'RegistrationRequested'}
		<li class="mb-10 ml-6">
			<span
				class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full"
			>
				<svg
					width="10"
					height="10"
					viewBox="0 0 10 10"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle cx="5" cy="5" r="5" fill="#0848F7" />
				</svg>
			</span>
			<time
				class="block mb-1 text-sm font-normal leading-non"
				datetime={timestampinSecondsToDate(collection.requests[0].submissionTime).toISOString()}
				>{timestampinSecondsToDate(
					collection.requests[0].submissionTime
				).toLocaleDateString()}</time
			>
			<p class="text-base font-bold break-all">7 days registration period begins</p>
		</li>

		<li class="mb-10 ml-6">
			<span
				class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full"
			>
				<svg
					width="10"
					height="10"
					viewBox="0 0 10 10"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle cx="5" cy="5" r="5" fill="#0848F7" />
				</svg>
			</span>
			<time
				class="block mb-1 text-sm font-normal leading-non"
				datetime={timestampinSecondsToDate(
					parseInt(collection.requests[0].submissionTime) + CHALLENGE_PERIOD_IN_SECONDS
				).toISOString()}
				>{timestampinSecondsToDate(
					parseInt(collection.requests[0].submissionTime) + CHALLENGE_PERIOD_IN_SECONDS
				).toLocaleDateString()}</time
			>
			<p class="text-base font-bold break-all">Collection unchallenged after 7 days</p>
		</li>
		<li class="mb-10 ml-6">
			<span
				class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full"
			>
				<svg
					width="10"
					height="10"
					viewBox="0 0 10 10"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<circle cx="5" cy="5" r="5" fill="#0848F7" />
				</svg>
			</span>
			<time
				class="block mb-1 text-sm font-normal leading-non"
				datetime={timestampinSecondsToDate(
					parseInt(collection.requests[0].submissionTime) + CHALLENGE_PERIOD_IN_SECONDS
				).toISOString()}
				>{timestampinSecondsToDate(
					parseInt(collection.requests[0].submissionTime) + CHALLENGE_PERIOD_IN_SECONDS
				).toLocaleDateString()}</time
			>
			<p class="text-base font-bold break-all">Collection verified</p>
		</li>
	{/if}
</ol>
