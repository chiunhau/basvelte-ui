<script>
import { getContext } from 'svelte';
import { themeContextKey } from '../styles';
import { getProps } from './utils';
</script>

<div {...getProps($$restProps, getContext(themeContextKey))}><slot /></div>
