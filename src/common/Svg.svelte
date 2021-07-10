<script>
import { getContext } from 'svelte';
import { getProps, themeContextKey } from '../styles';
</script>

<svg {...getProps($$restProps, getContext(themeContextKey))}><slot /></svg>
