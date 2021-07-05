<script>
import { getContext } from 'svelte';
import { themeContextKey } from '../styles';
import { getProps } from './utils';
</script>

<h2 {...getProps($$restProps, getContext(themeContextKey))}><slot /></h2>
