import { timestampinSecondsToDate } from '$lib/utils/date-utils';

describe('date-utils', function () {
	describe('timestampinSecondsToDate', function () {
		it('timestampinSecondsToDate 11/02', async () => {
			// Arrange
			const timestamp = 1644548085;
			// Act
			const result = timestampinSecondsToDate(timestamp);
			// Assert
			expect(result.toISOString()).toBe('2022-02-11T02:54:45.000Z');
		});
		it('timestampinSecondsToDate undefined', async () => {
			// Arrange
			const timestamp = undefined;
			// Act
			const result = timestampinSecondsToDate(timestamp);
			// Assert
			expect(result.toISOString()).toBe('1970-01-01T00:00:00.000Z');
		});
	});
});

export {};
