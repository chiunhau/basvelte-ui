import tint from 'polished/lib/color/tint.js';
import shade from 'polished/lib/color/shade.js';

import { KIND, VARIANT, SIZE } from './constants.js';
import colorTokens from '../styles/colors.js';

export function customOnRamp(color, unit) {
  switch (unit) {
    case '0':
      return 'white';
    case '50':
      return tint(0.8, color);
    case '100':
      return tint(0.6, color);
    case '200':
      return tint(0.4, color);
    case '300':
      return tint(0.2, color);
    case '400':
      return color;
    case '500':
      return shade(0.2, color);
    case '600':
      return shade(0.4, color);
    case '700':
      return shade(0.6, color);
    case '800':
      return shade(0.8, color);
    case '1000':
      return 'black';
    default:
      return color;
  }
}

const COLOR_STATE = {
  disabled: 'disabled',
  solid: 'solid',
  outline: 'outline',
};

// Probably best to bake this into the theme once we hit our next major.
export const pick = (theme, light, dark) =>
  theme.name && theme.name.includes('dark') ? dark : light;

const neutralColorStates = {
  [COLOR_STATE.disabled]: (theme, color) => ({
    color: theme.colors.tagNeutralFontDisabled,
    backgroundColor: null,
    borderColor: theme.colors.tagNeutralOutlinedDisabled,
  }),
  [COLOR_STATE.solid]: (theme, color) => ({
    color: theme.colors.tagNeutralSolidFont,
    backgroundColor: theme.colors.tagNeutralSolidBackground,
    borderColor: null,
  }),
  [COLOR_STATE.outline]: (theme, color) => ({
    color: theme.colors.tagNeutralOutlinedFont,
    backgroundColor: null,
    borderColor: theme.colors.tagNeutralOutlinedBackground,
  }),
};

const primaryColorStates = {
  [COLOR_STATE.disabled]: (theme, color) => ({
    color: theme.colors.tagPrimaryFontDisabled,
    backgroundColor: null,
    borderColor: theme.colors.tagPrimaryOutlinedDisabled,
  }),
  [COLOR_STATE.solid]: (theme, color) => ({
    color: theme.colors.tagPrimarySolidFont,
    backgroundColor: theme.colors.tagPrimarySolidBackground,
    borderColor: null,
  }),
  [COLOR_STATE.outline]: (theme, color) => ({
    color: theme.colors.tagPrimaryOutlinedFont,
    backgroundColor: null,
    borderColor: theme.colors.tagPrimaryOutlinedBackground,
  }),
};

const accentColorStates = {
  [COLOR_STATE.disabled]: (theme, color) => ({
    color: theme.colors.tagAccentFontDisabled,
    backgroundColor: null,
    borderColor: theme.colors.tagAccentOutlinedDisabled,
  }),
  [COLOR_STATE.solid]: (theme, color) => ({
    color: theme.colors.tagAccentSolidFont,
    backgroundColor: theme.colors.tagAccentSolidBackground,
    borderColor: null,
  }),
  [COLOR_STATE.outline]: (theme, color) => ({
    color: theme.colors.tagAccentOutlinedFont,
    backgroundColor: null,
    borderColor: theme.colors.tagAccentOutlinedBackground,
  }),
};

const positiveColorStates = {
  [COLOR_STATE.disabled]: (theme, color) => ({
    color: theme.colors.tagPositiveFontDisabled,
    backgroundColor: null,
    borderColor: theme.colors.tagPositiveOutlinedDisabled,
  }),
  [COLOR_STATE.solid]: (theme, color) => ({
    color: theme.colors.tagPositiveSolidFont,
    backgroundColor: theme.colors.tagPositiveSolidBackground,
    borderColor: null,
  }),
  [COLOR_STATE.outline]: (theme, color) => ({
    color: theme.colors.tagPositiveOutlinedFont,
    backgroundColor: null,
    borderColor: theme.colors.tagPositiveOutlinedBackground,
  }),
};

const warningColorStates = {
  [COLOR_STATE.disabled]: (theme, color) => ({
    color: theme.colors.tagWarningFontDisabled,
    backgroundColor: null,
    borderColor: theme.colors.tagWarningOutlinedDisabled,
  }),
  [COLOR_STATE.solid]: (theme, color) => ({
    color: theme.colors.tagWarningSolidFont,
    backgroundColor: theme.colors.tagWarningSolidBackground,
    borderColor: null,
  }),
  [COLOR_STATE.outline]: (theme, color) => ({
    color: theme.colors.tagWarningOutlinedFont,
    backgroundColor: null,
    borderColor: theme.colors.tagWarningOutlinedBackground,
  }),
};

const negativeColorStates = {
  [COLOR_STATE.disabled]: (theme, color) => ({
    color: theme.colors.tagNegativeFontDisabled,
    backgroundColor: null,
    borderColor: theme.colors.tagNegativeOutlinedDisabled,
  }),
  [COLOR_STATE.solid]: (theme, color) => ({
    color: theme.colors.tagNegativeSolidFont,
    backgroundColor: theme.colors.tagNegativeSolidBackground,
    borderColor: null,
  }),
  [COLOR_STATE.outline]: (theme, color) => ({
    color: theme.colors.tagNegativeOutlinedFont,
    backgroundColor: null,
    borderColor: theme.colors.tagNegativeOutlinedBackground,
  }),
};

const orangeColorStates = {
  [COLOR_STATE.disabled]: (theme, color) => ({
    color: pick(theme, colorTokens.orange200, colorTokens.orange600),
    backgroundColor: null,
    borderColor: pick(theme, colorTokens.orange200, colorTokens.orange700),
  }),
  [COLOR_STATE.solid]: (theme, color) => ({
    color: colorTokens.white,
    backgroundColor: pick(theme, colorTokens.orange400, colorTokens.orange500),
    borderColor: null,
  }),
  [COLOR_STATE.outline]: (theme, color) => ({
    color: pick(theme, colorTokens.orange400, colorTokens.orange300),
    backgroundColor: null,
    borderColor: pick(theme, colorTokens.orange200, colorTokens.orange500),
  }),
};

const purpleColorStates = {
  [COLOR_STATE.disabled]: (theme, color) => ({
    color: pick(theme, colorTokens.purple200, colorTokens.purple600),
    backgroundColor: null,
    borderColor: pick(theme, colorTokens.purple200, colorTokens.purple700),
  }),
  [COLOR_STATE.solid]: (theme, color) => ({
    color: colorTokens.white,
    backgroundColor: pick(theme, colorTokens.purple400, colorTokens.purple500),
    borderColor: null,
  }),
  [COLOR_STATE.outline]: (theme, color) => ({
    color: pick(theme, colorTokens.purple400, colorTokens.purple300),
    backgroundColor: null,
    borderColor: pick(theme, colorTokens.purple200, colorTokens.purple500),
  }),
};

const brownColorStates = {
  [COLOR_STATE.disabled]: (theme, color) => ({
    color: pick(theme, colorTokens.brown200, colorTokens.brown600),
    backgroundColor: null,
    borderColor: pick(theme, colorTokens.brown200, colorTokens.brown700),
  }),
  [COLOR_STATE.solid]: (theme, color) => ({
    color: colorTokens.white,
    backgroundColor: pick(theme, colorTokens.brown400, colorTokens.brown500),
    borderColor: null,
  }),
  [COLOR_STATE.outline]: (theme, color) => ({
    color: pick(theme, colorTokens.brown400, colorTokens.brown300),
    backgroundColor: null,
    borderColor: pick(theme, colorTokens.brown200, colorTokens.brown500),
  }),
};

const customColorStates = {
  [COLOR_STATE.disabled]: (theme, color) => ({
    color: customOnRamp(color, theme.colors.tagFontDisabledRampUnit),
    backgroundColor: null,
    borderColor: customOnRamp(color, theme.colors.tagOutlinedDisabledRampUnit),
  }),
  [COLOR_STATE.solid]: (theme, color) => ({
    color: customOnRamp(color, theme.colors.tagSolidFontRampUnit),
    backgroundColor: customOnRamp(color, theme.colors.tagSolidRampUnit),
    borderColor: null,
  }),
  [COLOR_STATE.outline]: (theme, color) => ({
    color: customOnRamp(color, theme.colors.tagOutlinedFontRampUnit),
    backgroundColor: null,
    borderColor: customOnRamp(color, theme.colors.tagOutlinedRampUnit),
  }),
};

export const colorMap = {
  [KIND.neutral]: neutralColorStates,
  [KIND.primary]: primaryColorStates,
  [KIND.accent]: accentColorStates,
  [KIND.positive]: positiveColorStates,
  [KIND.warning]: warningColorStates,
  [KIND.negative]: negativeColorStates,
  [KIND.black]: primaryColorStates,
  [KIND.blue]: accentColorStates,
  [KIND.green]: positiveColorStates,
  [KIND.red]: negativeColorStates,
  [KIND.yellow]: warningColorStates,
  [KIND.orange]: orangeColorStates,
  [KIND.purple]: purpleColorStates,
  [KIND.brown]: brownColorStates,
  [KIND.custom]: customColorStates,
};

export const getColorStateFromProps = (props) => {
  if (props.$disabled) return COLOR_STATE.disabled;
  if (props.$variant === VARIANT.solid) return COLOR_STATE.solid;
  return COLOR_STATE.outline;
};
