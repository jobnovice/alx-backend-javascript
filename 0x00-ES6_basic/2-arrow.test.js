// eslint-disable-next-line import/extensions
import getNeighborhoodsList from './2-arrow.js';

// eslint-disable-next-line jest/require-top-level-describe, jest/prefer-expect-assertions
test('returns the list of neighborhoods', () => {
  // eslint-disable-next-line new-cap
  const neighborhoodsList = new getNeighborhoodsList();
  expect(neighborhoodsList.addNeighborhood('Tenderloin')).toStrictEqual(['SOMA', 'Union Square', 'Tenderloin']);
});
