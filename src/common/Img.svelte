<script>
import { getContext } from 'svelte';
import { themeContextKey } from '../styles';
import { getProps } from './utils';
export let alt;
</script>

<img
  {...getProps($$restProps, getContext(themeContextKey))}
  alt="{alt}"
  on:error />
