<script>
import { getContext } from 'svelte';
import { getProps, themeContextKey } from '../styles';
</script>

<ul {...getProps($$restProps, getContext(themeContextKey))}><slot /></ul>
