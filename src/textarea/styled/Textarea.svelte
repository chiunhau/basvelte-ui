<script>
import Textarea from '../../common/Textarea.svelte';
import { getInputStyles } from '../../input/utils.js';
</script>

<Textarea
  styled="{(props) => ({
    ...getInputStyles(props),
    resize: 'none',
  })}"
  {...$$restProps} />
