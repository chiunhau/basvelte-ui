<script>
import Span from '../../common/Span.svelte';
import { SIZE } from '../constants';
</script>

<Span
  styled="{({ $theme, $disabled, $size = SIZE.small }) => {
    const bottomRadiusDir =
      $theme.direction === 'rtl'
        ? 'borderBottomLeftRadius'
        : 'borderBottomRightRadius';
    const topRadiusDir =
      $theme.direction === 'rtl'
        ? 'borderTopLeftRadius'
        : 'borderTopRightRadius';
    const marginDir = $theme.direction === 'rtl' ? 'marginRight' : 'marginLeft';
    return {
      alignItems: 'center',
      [bottomRadiusDir]: $theme.borders.useRoundedCorners
        ? $theme.borders.radius400
        : 0,
      [topRadiusDir]: $theme.borders.useRoundedCorners
        ? $theme.borders.radius400
        : 0,
      cursor: $disabled ? 'not-allowed' : 'pointer',
      display: 'flex',
      [marginDir]: {
        [SIZE.small]: '8px',
        [SIZE.medium]: '12px',
        [SIZE.large]: '16px',
      }[$size],
      outline: 'none',
      transitionProperty: 'all',
      transitionDuration: 'background-color',
      transitionTimingFunction: $theme.animation.easeOutCurve,
    };
  }}"
  {...$$restProps}>
  <slot />
</Span>
