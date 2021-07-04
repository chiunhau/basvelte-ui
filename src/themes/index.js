/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
import { LightTheme } from './light-theme/light-theme.js';
import createLightTheme from './light-theme/create-light-theme.js';
import lightThemePrimitives from './light-theme/primitives.js';

export {
  createLightTheme,
  createLightTheme as createTheme,
  LightTheme,
  lightThemePrimitives,
};
