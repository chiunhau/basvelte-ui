import { ADJOINED, SIZE } from './constants.js';

export const getInputPadding = (size, sizing) => {
  return {
    [SIZE.mini]: {
      paddingTop: sizing.scale100,
      paddingBottom: sizing.scale100,
      paddingLeft: sizing.scale550,
      paddingRight: sizing.scale550,
    },
    [SIZE.compact]: {
      paddingTop: sizing.scale200,
      paddingBottom: sizing.scale200,
      paddingLeft: sizing.scale550,
      paddingRight: sizing.scale550,
    },
    [SIZE.default]: {
      paddingTop: sizing.scale400,
      paddingBottom: sizing.scale400,
      paddingLeft: sizing.scale550,
      paddingRight: sizing.scale550,
    },
    [SIZE.large]: {
      paddingTop: sizing.scale550,
      paddingBottom: sizing.scale550,
      paddingLeft: sizing.scale550,
      paddingRight: sizing.scale550,
    },
  }[size];
};

export const getRootPadding = (
  adjoined,
  size,
  sizing,
  direction,
  hasIconTrailing
) => {
  let ifLeftPad =
    adjoined === ADJOINED.both ||
    (adjoined === ADJOINED.left && direction !== 'rtl') ||
    (adjoined === ADJOINED.right && direction === 'rtl') ||
    (hasIconTrailing && direction === 'rtl');
  let ifRightPad =
    adjoined === ADJOINED.both ||
    (adjoined === ADJOINED.right && direction !== 'rtl') ||
    (adjoined === ADJOINED.left && direction === 'rtl') ||
    (hasIconTrailing && direction !== 'rtl');
  return {
    paddingLeft: ifLeftPad ? sizing.scale550 : '0px',
    paddingRight: ifRightPad ? sizing.scale550 : '0px',
  };
};

export const getFont = (size, typography) => {
  return {
    [SIZE.mini]: typography.font100,
    [SIZE.compact]: typography.font200,
    [SIZE.default]: typography.font300,
    [SIZE.large]: typography.font400,
  }[size];
};

export const getRootColors = (
  $disabled,
  $isFocused,
  $error,
  $positive,
  colors
) => {
  if ($disabled) {
    return {
      borderLeftColor: colors.inputFillDisabled,
      borderRightColor: colors.inputFillDisabled,
      borderTopColor: colors.inputFillDisabled,
      borderBottomColor: colors.inputFillDisabled,
      backgroundColor: colors.inputFillDisabled,
    };
  }

  if ($isFocused) {
    return {
      borderLeftColor: colors.borderFocus,
      borderRightColor: colors.borderFocus,
      borderTopColor: colors.borderFocus,
      borderBottomColor: colors.borderFocus,
      backgroundColor: colors.inputFillActive,
    };
  }

  if ($error) {
    return {
      borderLeftColor: colors.inputBorderError,
      borderRightColor: colors.inputBorderError,
      borderTopColor: colors.inputBorderError,
      borderBottomColor: colors.inputBorderError,
      backgroundColor: colors.inputFillError,
    };
  }

  if ($positive) {
    return {
      borderLeftColor: colors.inputBorderPositive,
      borderRightColor: colors.inputBorderPositive,
      borderTopColor: colors.inputBorderPositive,
      borderBottomColor: colors.inputBorderPositive,
      backgroundColor: colors.inputFillPositive,
    };
  }

  return {
    borderLeftColor: colors.inputBorder,
    borderRightColor: colors.inputBorder,
    borderTopColor: colors.inputBorder,
    borderBottomColor: colors.inputBorder,
    backgroundColor: colors.inputFill,
  };
};

export const getRootBorderRadius = (radius) => {
  return {
    borderTopLeftRadius: radius,
    borderBottomLeftRadius: radius,
    borderTopRightRadius: radius,
    borderBottomRightRadius: radius,
  };
};

export const getRootStyles = (props) => {
  const {
    $isFocused,
    $adjoined,
    $error,
    $disabled,
    $positive,
    $size,
    $theme,
    $theme: { borders, colors, sizing, typography, animation },
    $hasIconTrailing,
  } = props;
  return {
    boxSizing: 'border-box',
    display: 'flex',
    overflow: 'hidden',
    width: '100%',
    borderLeftWidth: '2px',
    borderRightWidth: '2px',
    borderTopWidth: '2px',
    borderBottomWidth: '2px',
    borderLeftStyle: 'solid',
    borderRightStyle: 'solid',
    borderTopStyle: 'solid',
    borderBottomStyle: 'solid',
    transitionProperty: 'border',
    transitionDuration: animation.timing200,
    transitionTimingFunction: animation.easeOutCurve,
    ...getRootBorderRadius(borders.inputBorderRadius),
    ...getFont($size, typography),
    ...getRootColors($disabled, $isFocused, $error, $positive, colors),
    ...getRootPadding(
      $adjoined,
      $size,
      sizing,
      $theme.direction,
      $hasIconTrailing
    ),
  };
};

export const getInputEnhancerPadding = ($size, sizing) => {
  return {
    [SIZE.mini]: {
      paddingRight: sizing.scale400,
      paddingLeft: sizing.scale400,
    },
    [SIZE.compact]: {
      paddingRight: sizing.scale400,
      paddingLeft: sizing.scale400,
    },
    [SIZE.default]: {
      paddingRight: sizing.scale300,
      paddingLeft: sizing.scale300,
    },
    [SIZE.large]: {
      paddingRight: sizing.scale200,
      paddingLeft: sizing.scale200,
    },
  }[$size];
};

export const getInputEnhancerColors = (
  $disabled,
  $isFocused,
  $error,
  $positive,
  colors
) => {
  if ($disabled) {
    return {
      color: colors.inputEnhancerTextDisabled,
      backgroundColor: colors.inputFillDisabled,
    };
  }

  if ($isFocused) {
    return {
      color: colors.contentPrimary,
      backgroundColor: colors.inputFillActive,
    };
  }

  if ($error) {
    return {
      color: colors.contentPrimary,
      backgroundColor: colors.inputFillError,
    };
  }

  if ($positive) {
    return {
      color: colors.contentPrimary,
      backgroundColor: colors.inputFillPositive,
    };
  }

  return {
    color: colors.contentPrimary,
    backgroundColor: colors.inputFill,
  };
};

export const getInputContainerColors = (
  $disabled,
  $isFocused,
  $error,
  $positive,
  colors
) => {
  if ($disabled) {
    return {
      color: colors.inputTextDisabled,
      backgroundColor: colors.inputFillDisabled,
    };
  }

  if ($isFocused) {
    return {
      color: colors.contentPrimary,
      backgroundColor: colors.inputFillActive,
    };
  }

  if ($error) {
    return {
      color: colors.contentPrimary,
      backgroundColor: colors.inputFillError,
    };
  }

  if ($positive) {
    return {
      color: colors.contentPrimary,
      backgroundColor: colors.inputFillPositive,
    };
  }

  return {
    color: colors.contentPrimary,
    backgroundColor: colors.inputFill,
  };
};

export const getInputContainerStyles = (props) => {
  const {
    $isFocused,
    $error,
    $disabled,
    $positive,
    $size,
    $theme: { colors, typography, animation },
  } = props;
  return {
    display: 'flex',
    width: '100%',
    transitionProperty: 'background-color',
    transitionDuration: animation.timing200,
    transitionTimingFunction: animation.easeOutCurve,
    ...getFont($size, typography),
    ...getInputContainerColors(
      $disabled,
      $isFocused,
      $error,
      $positive,
      colors
    ),
  };
};

export const getInputColors = ($disabled, $isFocused, $error, colors) => {
  if ($disabled) {
    return {
      color: colors.inputTextDisabled,
      caretColor: colors.contentPrimary,
      '::placeholder': {
        color: colors.inputPlaceholderDisabled,
      },
    };
  }

  return {
    color: colors.contentPrimary,
    caretColor: colors.contentPrimary,
    '::placeholder': {
      color: colors.inputPlaceholder,
    },
  };
};

export const getInputStyles = (props) => {
  const {
    $disabled,
    $isFocused,
    $error,
    $size,
    $theme: { colors, sizing, typography },
  } = props;
  return {
    boxSizing: 'border-box',
    backgroundColor: 'transparent',
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    borderLeftStyle: 'none',
    borderRightStyle: 'none',
    borderTopStyle: 'none',
    borderBottomStyle: 'none',
    outline: 'none',
    width: '100%',
    // See https://stackoverflow.com/a/33811151
    minWidth: 0,
    maxWidth: '100%',
    cursor: $disabled ? 'not-allowed' : 'text',
    margin: '0',
    paddingTop: '0',
    paddingBottom: '0',
    paddingLeft: '0',
    paddingRight: '0',
    ...getFont($size, typography),
    ...getInputPadding($size, sizing),
    ...getInputColors($disabled, $isFocused, $error, colors),
  };
};

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
