<script>
import { getContext } from 'svelte';
import { getProps, themeContextKey } from '../styles';
</script>

<h5 {...getProps($$restProps, getContext(themeContextKey))}><slot /></h5>
