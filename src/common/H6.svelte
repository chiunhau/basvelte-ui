<script>
import { getContext } from 'svelte';
import { themeContextKey } from '../styles';
import { getProps } from './utils';
</script>

<h6 {...getProps($$restProps, getContext(themeContextKey))}><slot /></h6>
