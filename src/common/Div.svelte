<script>
import { getContext } from 'svelte';
import { themeContextKey } from '../styles';
import { getProps } from './utils';
export let ref;
</script>

<div bind:this="{ref}" {...getProps($$restProps, getContext(themeContextKey))}>
  <slot />
</div>
