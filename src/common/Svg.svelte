<script>
import { getContext } from 'svelte';
import { themeContextKey } from '../styles';
import { getProps } from './utils';
</script>

<svg {...getProps($$restProps, getContext(themeContextKey))}><slot /></svg>
