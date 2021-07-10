<script>
import { getContext } from 'svelte';
import { getProps, themeContextKey } from '../styles';
export let value;
</script>

<input
  {...getProps($$restProps, getContext(themeContextKey))}
  bind:value
  on:change
  on:blur
  on:focus />
