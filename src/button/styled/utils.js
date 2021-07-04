import { KIND, SIZE, SHAPE } from '../constants.js';

export const getLoadingSpinnerColors = ({ $theme, $kind, $disabled }) => {
  if ($disabled) {
    return {
      foreground: $theme.colors.buttonDisabledSpinnerForeground,
      background: $theme.colors.buttonDisabledSpinnerBackground,
    };
  }
  switch ($kind) {
    case KIND.secondary: {
      return {
        foreground: $theme.colors.buttonSecondarySpinnerForeground,
        background: $theme.colors.buttonSecondarySpinnerBackground,
      };
    }
    case KIND.tertiary: {
      return {
        foreground: $theme.colors.buttonTertiarySpinnerForeground,
        background: $theme.colors.buttonTertiarySpinnerBackground,
      };
    }
    case KIND.minimal: {
      return {
        foreground: $theme.colors.buttonMinimalSpinnerForeground,
        background: $theme.colors.buttonMinimalSpinnerBackground,
      };
    }
    case KIND.primary:
    default: {
      return {
        foreground: $theme.colors.buttonPrimarySpinnerForeground,
        background: $theme.colors.buttonPrimarySpinnerBackground,
      };
    }
  }
};

export const getBorderRadiiStyles = ({ $theme, $size, $shape }) => {
  let value = $theme.borders.buttonBorderRadius;

  if ($shape === SHAPE.pill) {
    if ($size === SIZE.compact) {
      value = '30px';
    } else if ($size === SIZE.large) {
      value = '42px';
    } else {
      value = '38px';
    }
  } else if ($shape === SHAPE.circle || $shape === SHAPE.round) {
    value = '50%';
  }

  return {
    borderTopRightRadius: value,
    borderBottomRightRadius: value,
    borderTopLeftRadius: value,
    borderBottomLeftRadius: value,
  };
};

export const getFontStyles = ({ $theme, $size }) => {
  switch ($size) {
    case SIZE.mini:
      return $theme.typography.font150;
    case SIZE.compact:
      return $theme.typography.font250;
    case SIZE.large:
      return $theme.typography.font450;
    default:
      return $theme.typography.font350;
  }
};

export const getPaddingStyles = ({ $theme, $size, $shape }) => {
  const iconShape =
    $shape === SHAPE.square ||
    $shape === SHAPE.circle ||
    $shape === SHAPE.round;
  switch ($size) {
    case SIZE.mini:
      return {
        paddingTop: $theme.sizing.scale200,
        paddingBottom: $theme.sizing.scale200,
        paddingLeft: iconShape
          ? $theme.sizing.scale200
          : $theme.sizing.scale300,
        paddingRight: iconShape
          ? $theme.sizing.scale200
          : $theme.sizing.scale300,
      };
    case SIZE.compact:
      return {
        paddingTop: $theme.sizing.scale400,
        paddingBottom: $theme.sizing.scale400,
        paddingLeft: iconShape
          ? $theme.sizing.scale400
          : $theme.sizing.scale500,
        paddingRight: iconShape
          ? $theme.sizing.scale400
          : $theme.sizing.scale500,
      };
    case SIZE.large:
      return {
        paddingTop: $theme.sizing.scale600,
        paddingBottom: $theme.sizing.scale600,
        paddingLeft: iconShape
          ? $theme.sizing.scale600
          : $theme.sizing.scale700,
        paddingRight: iconShape
          ? $theme.sizing.scale600
          : $theme.sizing.scale700,
      };
    default:
      return {
        paddingTop: $theme.sizing.scale550,
        paddingBottom: $theme.sizing.scale550,
        paddingLeft: iconShape
          ? $theme.sizing.scale550
          : $theme.sizing.scale600,
        paddingRight: iconShape
          ? $theme.sizing.scale550
          : $theme.sizing.scale600,
      };
  }
};

export const getKindStyles = ({
  $theme,
  $isLoading,
  $isSelected,
  $kind,
  $disabled,
}) => {
  if ($disabled) {
    return Object.freeze({});
  }
  switch ($kind) {
    case KIND.primary:
      if ($isSelected) {
        return {
          color: $theme.colors.buttonPrimarySelectedText,
          backgroundColor: $theme.colors.buttonPrimarySelectedFill,
        };
      }
      return {
        color: $theme.colors.buttonPrimaryText,
        backgroundColor: $theme.colors.buttonPrimaryFill,
        ':hover': {
          backgroundColor: $isLoading
            ? $theme.colors.buttonPrimaryActive
            : $theme.colors.buttonPrimaryHover,
        },
        ':active': {
          backgroundColor: $theme.colors.buttonPrimaryActive,
        },
      };
    case KIND.secondary:
      if ($isSelected) {
        return {
          color: $theme.colors.buttonPrimaryText,
          backgroundColor: $theme.colors.buttonPrimaryFill,
        };
      }
      return {
        color: $theme.colors.buttonSecondaryText,
        backgroundColor: $theme.colors.buttonSecondaryFill,
        ':hover': {
          backgroundColor: $isLoading
            ? $theme.colors.buttonSecondaryActive
            : $theme.colors.buttonSecondaryHover,
        },
        ':active': {
          backgroundColor: $theme.colors.buttonSecondaryActive,
        },
      };
    case KIND.tertiary:
      if ($isSelected) {
        return {
          color: $theme.colors.buttonTertiarySelectedText,
          backgroundColor: $theme.colors.buttonTertiarySelectedFill,
        };
      }
      return {
        color: $theme.colors.buttonTertiaryText,
        backgroundColor: $theme.colors.buttonTertiaryFill,
        ':hover': {
          backgroundColor: $isLoading
            ? $theme.colors.buttonTertiaryActive
            : $theme.colors.buttonTertiaryHover,
        },
        ':active': {
          backgroundColor: $theme.colors.buttonTertiaryActive,
        },
      };
    case KIND.minimal:
      if ($isSelected) {
        return {
          color: $theme.colors.buttonMinimalSelectedText,
          backgroundColor: $theme.colors.buttonMinimalSelectedFill,
        };
      }
      return {
        color: $theme.colors.buttonMinimalText,
        backgroundColor: $theme.colors.buttonMinimalFill,
        ':hover': {
          backgroundColor: $isLoading
            ? $theme.colors.buttonMinimalActive
            : $theme.colors.buttonMinimalHover,
        },
        ':active': {
          backgroundColor: $theme.colors.buttonMinimalActive,
        },
      };
    default:
      return Object.freeze({});
  }
};

export const getShapeStyles = ({ $theme, $shape, $size }) => {
  if ($shape === SHAPE.circle || $shape === SHAPE.square) {
    let height, width;
    switch ($size) {
      case SIZE.mini:
        height = '28px';
        width = '28px';
        break;
      case SIZE.compact:
        height = '36px';
        width = '36px';
        break;
      case SIZE.large:
        height = '56px';
        width = '56px';
        break;
      case SIZE.default:
      default:
        height = '48px';
        width = '48px';
        break;
    }
    return {
      height,
      width,
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0,
    };
  } else {
    return {};
  }
};
