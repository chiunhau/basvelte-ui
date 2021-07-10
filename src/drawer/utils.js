import { SIZE, SIZE_DIMENSION, ANCHOR } from './constants.js';

export const getSizeStyles = ($size, $anchor) => {
  const styles = {
    maxWidth: '100%',
    maxHeight: '100%',
    width: SIZE_DIMENSION.default,
    height: SIZE_DIMENSION.full,
  };

  if ($anchor === ANCHOR.left || $anchor === ANCHOR.right) {
    // If the anchor is horizontal, set the width
    styles.height = SIZE_DIMENSION.full;
    if (SIZE[$size]) {
      styles.width = SIZE_DIMENSION[$size];
    } else if (typeof $size === 'string') {
      styles.width = $size;
    }
  } else {
    // If the anchor is vertical, set the height
    styles.width = SIZE_DIMENSION.full;
    if (SIZE[$size]) {
      styles.height = SIZE_DIMENSION[$size];
    } else if (typeof $size === 'string') {
      styles.height = $size;
    }
  }
  return styles;
};

export const getAnchorStyles = (props) => {
  const { $anchor, $isVisible, $size } = props;
  const sizeStyles = getSizeStyles($size, $anchor);
  const { left, right, top, bottom } = ANCHOR;
  switch ($anchor) {
    case right: {
      return {
        transform: $isVisible
          ? 'translateX(0)'
          : `translateX(${sizeStyles.width})`,
        right: $isVisible ? 0 : `-${sizeStyles.width}`,
        top: 0,
        ...sizeStyles,
      };
    }
    case left: {
      return {
        transform: $isVisible
          ? 'translateX(0)'
          : `translateX(-${sizeStyles.width})`,
        left: $isVisible ? 0 : `-${sizeStyles.width}`,
        top: 0,
        ...sizeStyles,
      };
    }
    case bottom: {
      return {
        transform: $isVisible
          ? 'translateY(0)'
          : `translateY(${sizeStyles.height})`,
        left: 0,
        bottom: $isVisible ? '0' : `-${sizeStyles.height}`,
        ...sizeStyles,
      };
    }
    case top: {
      return {
        transform: $isVisible
          ? 'translateY(0)'
          : `translateY(-${sizeStyles.height})`,
        left: 0,
        top: $isVisible ? '0' : `-${sizeStyles.height}`,
        ...sizeStyles,
      };
    }
    default: {
      return {};
    }
  }
};
