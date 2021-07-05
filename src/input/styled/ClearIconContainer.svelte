<script>
import Div from '../../common/Div.svelte';
import { SIZE } from '../constants';
</script>

<Div
  styled="{({ $alignTop = false, $size, $theme }) => {
    const pad = {
      [SIZE.mini]: $theme.sizing.scale200,
      [SIZE.compact]: $theme.sizing.scale200,
      [SIZE.default]: $theme.sizing.scale100,
      [SIZE.large]: $theme.sizing.scale0,
    }[$size];

    return {
      display: 'flex',
      alignItems: $alignTop ? 'flex-start' : 'center',
      paddingLeft: pad,
      paddingRight: pad,
      paddingTop: $alignTop ? $theme.sizing.scale500 : '0px',
      color: $theme.colors.contentPrimary,
    };
  }}"
  {...$$restProps}>
  <slot />
</Div>
