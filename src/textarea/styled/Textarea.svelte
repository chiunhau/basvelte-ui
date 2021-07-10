<script>
import Textarea from '../../common/Textarea.svelte';
export let ref;
import { getInputStyles } from '../../input/utils.js';
</script>

<Textarea
  bind:ref
  styled="{(props) => ({
    ...getInputStyles(props),
    resize: 'none',
  })}"
  {...$$restProps}><slot /></Textarea>
