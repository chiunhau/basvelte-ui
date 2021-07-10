<script>
import { getContext } from 'svelte';
import { getProps, themeContextKey } from '../styles';
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label {...getProps($$restProps, getContext(themeContextKey))}><slot /></label>
