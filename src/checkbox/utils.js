import { STYLE_TYPE } from './constants.js';

export const getBorderColor = (props) => {
  const {
    $disabled,
    $checked,
    $isError,
    $error,
    $isIndeterminate,
    $theme,
    $isFocusVisible,
  } = props;
  const { colors } = $theme;
  if ($disabled) {
    return colors.tickFillDisabled;
  } else if ($checked || $isIndeterminate) {
    return 'transparent';
  } else if ($error || $isError) {
    return colors.borderError;
  } else if ($isFocusVisible) {
    return colors.borderSelected;
  } else {
    return colors.tickBorder;
  }
};

export const getLabelPadding = (props) => {
  const { $labelPlacement = '', $theme } = props;
  const { sizing } = $theme;
  const { scale300 } = sizing;
  let paddingDirection;

  switch ($labelPlacement) {
    case 'top':
      paddingDirection = 'Bottom';
      break;
    case 'bottom':
      paddingDirection = 'Top';
      break;
    case 'left':
      paddingDirection = 'Right';
      break;
    default:
    case 'right':
      paddingDirection = 'Left';
      break;
  }

  if ($theme.direction === 'rtl' && paddingDirection === 'Left') {
    paddingDirection = 'Right';
  } else if ($theme.direction === 'rtl' && paddingDirection === 'Right') {
    paddingDirection = 'Left';
  }

  return {
    [`padding${paddingDirection}`]: scale300,
  };
};

export const getBackgroundColor = (props) => {
  const {
    $disabled,
    $checked,
    $isIndeterminate,
    $isError,
    $error,
    $isHovered,
    $isActive,
    $theme,
    $checkmarkType,
  } = props;
  const isToggle = $checkmarkType === STYLE_TYPE.toggle;
  const { colors } = $theme;
  if ($disabled) {
    if (isToggle) {
      return colors.sliderTrackFillDisabled;
    }
    if ($checked || $isIndeterminate) {
      return colors.tickFillDisabled;
    } else {
      return colors.tickFill;
    }
  } else if (($error || $isError) && ($isIndeterminate || $checked)) {
    if ($isActive) {
      return colors.tickFillErrorSelectedHoverActive;
    } else if ($isHovered) {
      return colors.tickFillErrorSelectedHover;
    } else {
      return colors.tickFillErrorSelected;
    }
  } else if ($error || $isError) {
    if ($isActive) {
      return colors.tickFillErrorHoverActive;
    } else if ($isHovered) {
      return colors.tickFillErrorHover;
    } else {
      return colors.tickFillError;
    }
  } else if ($isIndeterminate || $checked) {
    if ($isActive) {
      return colors.tickFillSelectedHoverActive;
    } else if ($isHovered) {
      return colors.tickFillSelectedHover;
    } else {
      return colors.tickFillSelected;
    }
  } else {
    if ($isActive) {
      return isToggle ? colors.sliderTrackFillActive : colors.tickFillActive;
    } else if ($isHovered) {
      return isToggle ? colors.sliderTrackFillHover : colors.tickFillHover;
    } else {
      return isToggle ? colors.sliderTrackFill : colors.tickFill;
    }
  }
};

export const getLabelColor = (props) => {
  const { $disabled, $theme } = props;
  const { colors } = $theme;
  return $disabled ? colors.contentSecondary : colors.contentPrimary;
};
