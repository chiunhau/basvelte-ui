<script>
import { getContext } from 'svelte';
import { getProps, themeContextKey } from '../styles';
</script>

<h1 {...getProps($$restProps, getContext(themeContextKey))}><slot /></h1>
