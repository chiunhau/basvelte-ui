<script>
import { getContext } from 'svelte';
import { getProps, themeContextKey } from '../styles';
</script>

<h2 {...getProps($$restProps, getContext(themeContextKey))}><slot /></h2>
