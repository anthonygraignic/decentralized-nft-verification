import { timestampinSecondsToDate } from '$lib/utils/date-utils';

describe('date-utils', function () {
	describe('timestampinSecondsToDate', function () {
		it('timestampinSecondsToDate 1', async () => {
			// Arrange
			const timestamp = 1644548085;
			// Act
			const result = timestampinSecondsToDate(timestamp);
			// Assert
			expect(result.toISOString()).toBe('2022-02-11T02:54:45.000Z');
		});
	});
});

export {};
