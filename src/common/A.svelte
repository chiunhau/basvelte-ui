<script>
import { getContext } from 'svelte';
import { themeContextKey } from '../styles';
import { getProps } from './utils';
export let href;
</script>

<a href="{href}" {...getProps($$restProps, getContext(themeContextKey))}>
  <slot />
</a>
