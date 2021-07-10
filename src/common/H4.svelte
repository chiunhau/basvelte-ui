<script>
import { getContext } from 'svelte';
import { getProps, themeContextKey } from '../styles';
</script>

<h4 {...getProps($$restProps, getContext(themeContextKey))}><slot /></h4>
