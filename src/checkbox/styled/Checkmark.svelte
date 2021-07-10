<script>
import Span from '../../common/Span.svelte';
import { getBackgroundColor, getBorderColor } from '../utils';
export let ref;
</script>

<Span
  bind:ref
  styled="{(props) => {
    const {
      $checked,
      $disabled,
      $isError,
      $error,
      $isIndeterminate,
      $theme,
      $isFocusVisible,
    } = props;
    const { sizing, animation } = $theme;

    const tickColor = $disabled
      ? $theme.colors.tickMarkFillDisabled
      : $isError || $error
      ? $theme.colors.tickMarkFillError
      : $theme.colors.tickMarkFill;

    const indeterminate = encodeURIComponent(`
    <svg width="14" height="4" viewBox="0 0 14 4" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 0.5H0V3.5H14V0.5Z" fill="${tickColor}"/>
    </svg>
  `);

    const check = encodeURIComponent(`
    <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.50002 12.6L0.400024 6.60002L2.60002 4.40002L6.50002 8.40002L13.9 0.900024L16.1 3.10002L6.50002 12.6Z" fill="${tickColor}"/>
    </svg>
  `);

    const borderRadius = $theme.borders.inputBorderRadius;
    const borderColor = getBorderColor(props);

    return {
      flex: '0 0 auto',
      transitionDuration: animation.timing200,
      transitionTimingFunction: animation.easeOutCurve,
      transitionProperty: 'background-image, border-color, background-color',
      width: sizing.scale700,
      height: sizing.scale700,
      left: '4px',
      top: '4px',
      boxSizing: 'border-box',
      borderLeftStyle: 'solid',
      borderRightStyle: 'solid',
      borderTopStyle: 'solid',
      borderBottomStyle: 'solid',
      borderLeftWidth: '3px',
      borderRightWidth: '3px',
      borderTopWidth: '3px',
      borderBottomWidth: '3px',
      borderLeftColor: borderColor,
      borderRightColor: borderColor,
      borderTopColor: borderColor,
      borderBottomColor: borderColor,
      borderTopLeftRadius: borderRadius,
      borderTopRightRadius: borderRadius,
      borderBottomRightRadius: borderRadius,
      borderBottomLeftRadius: borderRadius,
      outline:
        $isFocusVisible && $checked
          ? `3px solid ${$theme.colors.accent}`
          : 'none',
      display: 'inline-block',
      verticalAlign: 'middle',
      backgroundImage: $isIndeterminate
        ? `url('data:image/svg+xml,${indeterminate}');`
        : $checked
        ? `url('data:image/svg+xml,${check}');`
        : null,
      backgroundColor: getBackgroundColor(props),
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'contain',
      marginTop: $theme.sizing.scale0,
      marginBottom: $theme.sizing.scale0,
      marginLeft: $theme.sizing.scale0,
      marginRight: $theme.sizing.scale0,
    };
  }}"
  {...$$restProps}><slot /></Span>
