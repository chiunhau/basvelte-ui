<script>
import { getContext } from 'svelte';
import { themeContextKey } from '../styles';
import { getProps } from './utils';
</script>

<h1 {...getProps($$restProps, getContext(themeContextKey))}><slot /></h1>
