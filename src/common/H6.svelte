<script>
import { getContext } from 'svelte';
import { getProps, themeContextKey } from '../styles';
</script>

<h6 {...getProps($$restProps, getContext(themeContextKey))}><slot /></h6>
