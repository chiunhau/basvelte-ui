<script>
import { getContext } from 'svelte';
import { themeContextKey } from '../styles';
import { getProps } from './utils';
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label {...getProps($$restProps, getContext(themeContextKey))}><slot /></label>
