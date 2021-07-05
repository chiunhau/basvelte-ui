<script>
import { getContext, setContext } from 'svelte';

const currentLevel = getContext('basvelte-ui:headingLevel');
setContext('basvelte-ui:headingLevel', currentLevel ? currentLevel + 1 : 1);
</script>

<slot />
