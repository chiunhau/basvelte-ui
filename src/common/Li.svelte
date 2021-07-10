<script>
import { getContext } from 'svelte';
import { getProps, themeContextKey } from '../styles';
</script>

<li {...getProps($$restProps, getContext(themeContextKey))}><slot /></li>
