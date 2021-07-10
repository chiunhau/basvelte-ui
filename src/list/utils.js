/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import { ARTWORK_SIZES } from './constants.js';

export const artworkSizeToValue = (artworkSize, isSublist) => {
  if (isSublist) {
    switch (artworkSize) {
      case ARTWORK_SIZES.LARGE:
        return 24;
      case ARTWORK_SIZES.SMALL:
      default:
        return 16;
    }
  }

  switch (artworkSize) {
    case ARTWORK_SIZES.SMALL:
      return 16;
    case ARTWORK_SIZES.LARGE:
      return 36;
    case ARTWORK_SIZES.MEDIUM:
    default:
      return 24;
  }
};
