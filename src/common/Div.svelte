<script>
import { getContext } from 'svelte';
import { themeContextKey, getProps } from '../styles';
export let ref = undefined;
</script>

<div
  on:click
  bind:this="{ref}"
  {...getProps($$restProps, getContext(themeContextKey))}>
  <slot />
</div>
