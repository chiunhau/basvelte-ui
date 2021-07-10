<script>
import { getContext } from 'svelte';
import { getProps, themeContextKey } from '../styles';
</script>

<h3 {...getProps($$restProps, getContext(themeContextKey))}><slot /></h3>
