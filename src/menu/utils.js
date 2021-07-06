export const getFontColor = ({
  $theme,
  $disabled,
  $isFocused,
  $isHighlighted,
}) => {
  if ($disabled) {
    return $theme.colors.menuFontDisabled;
  }

  if ($isHighlighted && $isFocused) {
    return $theme.colors.menuFontHighlighted;
  }

  if ($isHighlighted && !$isFocused) {
    return $theme.colors.menuFontSelected;
  }

  return $theme.colors.menuFontDefault;
};

export const getBackgroundColor = ({ $theme, $disabled, $isHighlighted }) => {
  if ($disabled) {
    return 'transparent';
  }

  if ($isHighlighted) {
    return $theme.colors.menuFillHover;
  }

  return 'transparent';
};
