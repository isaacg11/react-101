import { createSelector } from 'reselect';

const resultsSelector = state => state.results;

const headsSelector = createSelector(
  resultsSelector,
  (results) => results.filter(result => result == "H").length
);

export default headsSelector;
