<script>
import Div from '../../common/Div.svelte';
import { SIZE } from '../constants';
</script>

<Div
  styled="{({ $theme, $size }) => {
    // we don't have a theming value for this
    let margins = '3px';
    if ($size === SIZE.mini || $size === SIZE.compact) {
      margins = $theme.sizing.scale0;
    }
    if ($size === SIZE.large) {
      margins = $theme.sizing.scale100;
    }

    return {
      lineHeight: 0,
      position: 'static',
      marginBottom: margins,
      marginTop: margins,
    };
  }}"
  {...$$restProps}>
  <slot />
</Div>
