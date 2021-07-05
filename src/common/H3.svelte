<script>
import { getContext } from 'svelte';
import { themeContextKey } from '../styles';
import { getProps } from './utils';
</script>

<h3 {...getProps($$restProps, getContext(themeContextKey))}><slot /></h3>
