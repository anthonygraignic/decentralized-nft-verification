/**
 * Convert a blockchain timestamp in seconds to Javascript Date for display purposes
 * @param timestamp in seconds
 * @returns Date
 */
export function timestampinSecondsToDate(timestamp: number) {
	return new Date(timestamp * 1000);
}
