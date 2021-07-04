<script>
import Span from '../../common/Span.svelte';
import { getLoadingSpinnerColors } from './utils';
import { SIZE } from '../constants';
</script>

<Span
  styled="{({ $theme, $kind, $disabled, $size }) => {
    const { foreground, background } = getLoadingSpinnerColors({
      $theme,
      $kind,
      $disabled,
    });

    let dimension = $theme.sizing.scale550;
    if ($size === SIZE.mini || $size === SIZE.compact) {
      dimension = $theme.sizing.scale500;
    }
    if ($size === SIZE.large) {
      dimension = $theme.sizing.scale600;
    }

    return {
      height: dimension,
      width: dimension,
      borderTopLeftRadius: '50%',
      borderTopRightRadius: '50%',
      borderBottomRightRadius: '50%',
      borderBottomLeftRadius: '50%',
      borderLeftStyle: 'solid',
      borderTopStyle: 'solid',
      borderRightStyle: 'solid',
      borderBottomStyle: 'solid',
      borderLeftWidth: $theme.sizing.scale0,
      borderTopWidth: $theme.sizing.scale0,
      borderRightWidth: $theme.sizing.scale0,
      borderBottomWidth: $theme.sizing.scale0,
      borderTopColor: foreground,
      borderLeftColor: background,
      borderBottomColor: background,
      borderRightColor: background,
      boxSizing: 'border-box',
      display: 'inline-block',
      animationDuration: $theme.animation.timing700,
      animationTimingFunction: 'linear',
      animationIterationCount: 'infinite',
      animationName: {
        to: {
          transform: 'rotate(360deg)',
        },
        from: {
          transform: 'rotate(0deg)',
        },
      },
    };
  }}"
  {...$$restProps}>
  <slot />
</Span>
