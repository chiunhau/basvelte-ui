<script>
import { getContext } from 'svelte';
import { themeContextKey, getProps } from '../styles';
export let ref;
</script>

<button
  {...getProps($$restProps, getContext(themeContextKey))}
  bind:this="{ref}"
  on:click
  on:blur
  on:focus>
  <slot />
</button>
