<script>
import { getContext } from 'svelte';
import { themeContextKey } from '../styles';
import { getProps } from './utils';
export let value;
</script>

<input
  {...getProps($$restProps, getContext(themeContextKey))}
  bind:value
  on:change
  on:blur
  on:focus />
