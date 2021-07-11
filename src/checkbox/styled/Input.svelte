<script>
import Input from '../../common/Input.svelte';
export let ref = null;
</script>

<Input
  bind:ref
  styled="{{
    opacity: 0,
    width: 0,
    height: 0,
    overflow: 'hidden',
    margin: 0,
    padding: 0,
    position: 'absolute',
  }}"
  {...$$restProps} />
