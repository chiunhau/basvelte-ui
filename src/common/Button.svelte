<script>
import { getContext } from 'svelte';
import { themeContextKey, getProps } from '../styles';
</script>

<button
  {...getProps($$restProps, getContext(themeContextKey))}
  on:click
  on:blur
  on:focus>
  <slot />
</button>
