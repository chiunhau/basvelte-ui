<script>
import { getContext } from 'svelte';
import { getProps, themeContextKey } from '../styles';
</script>

<span {...getProps($$restProps, getContext(themeContextKey))}><slot /></span>
