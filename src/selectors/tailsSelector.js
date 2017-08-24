import { createSelector } from 'reselect';

const resultsSelector = state => state.results;

const tailsSelector = createSelector(
  resultsSelector,
  (results) => results.filter(result => result == "T").length
);

export default tailsSelector;
