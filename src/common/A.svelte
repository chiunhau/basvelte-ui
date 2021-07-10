<script>
import { getContext } from 'svelte';
import { themeContextKey, getProps } from '../styles';
export let href;
</script>

<a href="{href}" {...getProps($$restProps, getContext(themeContextKey))}>
  <slot />
</a>
