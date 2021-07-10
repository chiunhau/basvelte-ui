<script>
import { getContext } from 'svelte';
import { getProps, themeContextKey } from '../styles';
export let alt;
</script>

<img
  {...getProps($$restProps, getContext(themeContextKey))}
  alt="{alt}"
  on:error />
