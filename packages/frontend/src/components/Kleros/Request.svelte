<script>
	import { timestampinSecondsToDate } from '$lib/utils/date-utils';
	import AddressLinkWrapper from '../Blockchain/AddressLinkWrapper.svelte';

	export let request;
</script>

<details>
	<summary>{request.id.split("-")[1]}</summary>
	<dl>
		<dt>Type:</dt>
		<dd>{request.requestType}</dd>
		<dt>Challenger:</dt>
		<dd>
			<AddressLinkWrapper address={request.challenger}>{request.challenger}</AddressLinkWrapper>
		</dd>
		<dt>Resolved:</dt>
		<dd>{request.resolved}</dd>
		<dt>Submission time:</dt>
		<dd>{timestampinSecondsToDate(request.submissionTime)}</dd>
	</dl>
</details>

<style lang="postcss">
	dt {
		@apply text-sm;
	}
	dd {
		@apply font-bold break-all;
	}
</style>
