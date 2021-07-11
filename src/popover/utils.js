import { ARROW_SIZE, ARROW_WIDTH, PLACEMENT } from './constants.js';

const OPPOSITE_POSITIONS = {
  top: 'bottom',
  bottom: 'top',
  right: 'left',
  left: 'right',
};

/**
 * Returns the opposite of the specified position. Useful for tooltip
 * positioning logic.
 * Examples:
 * top -> bottom
 * left -> right
 */
export const getOppositePosition = (position) => {
  return OPPOSITE_POSITIONS[position];
};

/**
 * Determines whether or not the specified position is a vertical one (top or bottom)
 */
export const isVerticalPosition = (position) => {
  return position === 'top' || position === 'bottom';
};

/**
 * Simple utility function for capitalizing the first letter of a string
 */
export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Opposite of function above, converts from Popper.js placement
 * to our placement prop
 */
export const fromPopperPlacement = (placement) => {
  const popoverPlacement = placement
    .replace(/(top|bottom)-start$/, '$1Left')
    .replace(/(top|bottom)-end$/, '$1Right')
    .replace(/(left|right)-start$/, '$1Top')
    .replace(/(left|right)-end$/, '$1Bottom');
  return PLACEMENT[popoverPlacement] || null;
};

/**
 * Splits something like 'topLeft' to ['top', 'left'] for easier usage
 */
export const splitPlacement = (placement) => {
  const matches = placement.match(/^([a-z]+)([A-Z][a-z]+)?/) || [];
  return matches
    .slice(1, 3)
    .filter(Boolean)
    .map((s) => s.toLowerCase());
};

/**
 * Returns margin styles to add spacing between the popover
 * and its anchor.
 */
export const getPopoverMarginStyles = (arrowSize, placement, popoverMargin) => {
  const [position] = splitPlacement(placement);
  const opposite = getOppositePosition(position);
  if (!opposite) {
    return null;
  }
  const property = `margin${capitalize(opposite)}`;
  return {
    [property]: `${arrowSize + popoverMargin}px`,
  };
};

/**
 * Returns CSS rules for the popover animation start keyframe
 */
export const getStartPosition = (
  offset,
  placement,
  arrowSize,
  popoverMargin
) => {
  offset = { ...offset };
  const [position] = splitPlacement(placement);
  const margin = (arrowSize > 0 ? arrowSize : popoverMargin) * 2;
  if (isVerticalPosition(position)) {
    offset.top += position === 'top' ? margin : -margin;
  } else {
    offset.left += position === 'left' ? margin : -margin;
  }
  return `translate3d(${offset.left}px, ${offset.top}px, 0)`;
};

/**
 * Returns CSS rules for the popover animation end keyframe
 */
export const getEndPosition = (offset) => {
  return `translate3d(${offset.left}px, ${offset.top}px, 0)`;
};

/**
 * Returns top/left styles to position the popover arrow
 */
export const getArrowPositionStyles = (offsets, placement) => {
  const [position] = splitPlacement(placement);
  const oppositePosition = getOppositePosition(position);
  if (!oppositePosition) {
    return null;
  }

  const alignmentProperty = isVerticalPosition(position) ? 'left' : 'top';
  return {
    [alignmentProperty]: `${offsets[alignmentProperty]}px`,
    [oppositePosition]: `-${ARROW_SIZE - 2}px`,
  };
};

export const getBodyStyles = (props) => {
  const {
    $isOpen,
    $isAnimating,
    $placement,
    $popoverOffset,
    $showArrow,
    $theme,
    $popoverMargin,
  } = props;

  return {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: $theme.colors.backgroundTertiary,
    borderTopLeftRadius: $theme.borders.popoverBorderRadius,
    borderTopRightRadius: $theme.borders.popoverBorderRadius,
    borderBottomRightRadius: $theme.borders.popoverBorderRadius,
    borderBottomLeftRadius: $theme.borders.popoverBorderRadius,
    boxShadow: $theme.lighting.shadow600,
    transitionProperty: 'opacity,transform',
    transitionDuration: $isAnimating ? '0.1s' : '0s',
    transitionTimingFunction: $isOpen
      ? $theme.animation.easeOutCurve
      : $theme.animation.easeInCurve,
    opacity: $isAnimating && $isOpen ? 1 : 0,
    transform:
      $isAnimating && $isOpen
        ? getEndPosition($popoverOffset)
        : getStartPosition(
            $popoverOffset,
            $placement,
            $showArrow ? ARROW_SIZE : 0,
            $popoverMargin
          ),
    ...getPopoverMarginStyles(
      $showArrow ? ARROW_SIZE : 0,
      $placement,
      $popoverMargin
    ),
  };
};

/**
 * Arrow shown between the popover and the anchor element
 */
export const getArrowStyles = (props) => {
  const { $arrowOffset, $placement, $theme } = props;
  return {
    backgroundColor: $theme.colors.backgroundTertiary,
    boxShadow: $theme.lighting.shadow600,
    width: `${ARROW_WIDTH}px`,
    height: `${ARROW_WIDTH}px`,
    transform: 'rotate(45deg)',
    position: 'absolute',
    ...getArrowPositionStyles($arrowOffset, $placement),
  };
};

export const getInnerStyles = ({ $theme }) => {
  return {
    backgroundColor: $theme.colors.backgroundTertiary,
    borderTopLeftRadius: $theme.borders.popoverBorderRadius,
    borderTopRightRadius: $theme.borders.popoverBorderRadius,
    borderBottomRightRadius: $theme.borders.popoverBorderRadius,
    borderBottomLeftRadius: $theme.borders.popoverBorderRadius,
    color: $theme.colors.contentPrimary,
    position: 'relative',
  };
};
