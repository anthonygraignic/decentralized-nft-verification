/**
 * Convert a blockchain timestamp in seconds to Javascript Date for display purposes
 * @param timestamp in seconds
 * @returns Date
 */
export function timestampinSecondsToDate(timestamp: number) {
	return new Date((timestamp || 0) * 1000);
}

export const CHALLENGE_PERIOD_IN_SECONDS = 86400 * 7;
