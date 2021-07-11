<script>
import { getContext } from 'svelte';
import { getProps, themeContextKey } from '../styles';
export let value = null;
export let ref = null;
</script>

<input
  bind:this="{ref}"
  {...getProps($$restProps, getContext(themeContextKey))}
  bind:value
  on:change
  on:blur
  on:focus />
