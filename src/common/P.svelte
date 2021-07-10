<script>
import { getContext } from 'svelte';
import { getProps, themeContextKey } from '../styles';
</script>

<p {...getProps($$restProps, getContext(themeContextKey))}><slot /></p>
