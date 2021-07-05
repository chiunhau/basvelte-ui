<script>
import Button from '../../common/Button.svelte';
import { SIZE } from '../constants';
</script>

<Button
  styled="{({ $theme, $size, $isFocusVisible }) => {
    const pad = {
      [SIZE.mini]: $theme.sizing.scale400,
      [SIZE.compact]: $theme.sizing.scale400,
      [SIZE.default]: $theme.sizing.scale300,
      [SIZE.large]: $theme.sizing.scale200,
    }[$size];

    return {
      display: 'flex',
      alignItems: 'center',
      borderTopStyle: 'none',
      borderBottomStyle: 'none',
      borderLeftStyle: 'none',
      borderRightStyle: 'none',
      background: 'none',
      paddingLeft: pad,
      paddingRight: pad,
      outline: $isFocusVisible ? `solid 3px ${$theme.colors.accent}` : 'none',
      color: $theme.colors.contentPrimary,
    };
  }}"
  {...$$restProps}
  on:click
  on:blur
  on:focus>
  <slot />
</Button>
