<script>
import Span from '../../common/Span.svelte';
import { KIND, SIZE, VARIANT } from '../constants';
import { colorMap, getColorStateFromProps, pick } from '../utils';
</script>

<Span
  styled="{(props) => {
    const {
      $theme,
      $kind = KIND.primary,
      $clickable,
      $variant,
      $disabled,
      $closeable,
      $isFocusVisible,
      $color,
      $size = SIZE.small,
    } = props;
    const borderRadius = $theme.borders.tagBorderRadius;
    const paddingMagnitude = {
      [SIZE.small]: $theme.sizing.scale300,
      [SIZE.medium]: $theme.sizing.scale500,
      [SIZE.large]: $theme.sizing.scale600,
    }[$size];
    const borderWidth = !$disabled && $variant === VARIANT.solid ? 0 : '2px';
    const { color, backgroundColor, borderColor } = colorMap[$kind][
      getColorStateFromProps(props)
    ]($theme, $color);
    return {
      ...{
        [SIZE.small]: $theme.typography.LabelSmall,
        [SIZE.medium]: $theme.typography.LabelMedium,
        [SIZE.large]: $theme.typography.LabelLarge,
      }[$size],
      alignItems: 'center',
      color,
      backgroundColor,
      borderLeftColor: borderColor,
      borderRightColor: borderColor,
      borderTopColor: borderColor,
      borderBottomColor: borderColor,
      borderLeftStyle: 'solid',
      borderRightStyle: 'solid',
      borderTopStyle: 'solid',
      borderBottomStyle: 'solid',
      borderLeftWidth: borderWidth,
      borderRightWidth: borderWidth,
      borderTopWidth: borderWidth,
      borderBottomWidth: borderWidth,
      borderTopLeftRadius: borderRadius,
      borderTopRightRadius: borderRadius,
      borderBottomRightRadius: borderRadius,
      borderBottomLeftRadius: borderRadius,
      boxSizing: 'border-box',
      cursor: $disabled ? 'not-allowed' : $clickable ? 'pointer' : 'default',
      display: 'inline-flex',
      height: {
        [SIZE.small]: '24px',
        [SIZE.medium]: '32px',
        [SIZE.large]: '40px',
      }[$size],
      justifyContent: 'space-between',
      marginTop: '5px',
      marginBottom: '5px',
      marginLeft: '5px',
      marginRight: '5px',
      paddingTop: $theme.sizing.scale0,
      paddingBottom: $theme.sizing.scale0,
      paddingLeft: paddingMagnitude,
      paddingRight: paddingMagnitude,
      outline: 'none',
      ':hover':
        $disabled || !$clickable
          ? {}
          : {
              boxShadow: `inset 0px 0px 100px ${pick(
                $theme,
                `rgba(0, 0, 0, 0.08)`,
                `rgba(255, 255, 255, 0.2)`
              )}`,
            },
      ':focus':
        $disabled || (!$clickable && !$closeable)
          ? {}
          : {
              boxShadow: $isFocusVisible
                ? `0 0 0 3px ${
                    $kind === KIND.accent
                      ? $theme.colors.primaryA
                      : $theme.colors.accent
                  }`
                : 'none',
            },
    };
  }}"
  {...$$restProps}>
  <slot />
</Span>
