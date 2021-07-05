import { ADJOINED } from './constants';

export const getAdjoinedProp = (startEnhancer, endEnhancer) => {
  if (startEnhancer && endEnhancer) {
    return ADJOINED.both;
  } else if (startEnhancer) {
    return ADJOINED.left;
  } else if (endEnhancer) {
    return ADJOINED.right;
  }
  return ADJOINED.none;
};
