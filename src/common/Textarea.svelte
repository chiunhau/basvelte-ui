<script>
import { getContext } from 'svelte';
import { getProps, themeContextKey } from '../styles';
export let value;
</script>

<textarea
  {...getProps($$restProps, getContext(themeContextKey))}
  bind:value
  on:change
  on:blur
  on:focus></textarea>
