<script>
import Icon from '../Icon.svelte';

export let ref = null;
export let title = 'Triangle Up';
export let size = 24;
export let color = undefined;
export let overrides = {};

const SvgOverride = overrides && overrides.Svg ? overrides.Svg : {};
</script>

<Icon
  viewBox="0 0 24 24"
  bind:ref
  title="{title}"
  size="{size}"
  color="{color}"
  overrides="{{ Svg: SvgOverride }}"
  {...$$restProps}>
    <path d="M12.7071 8.70711L17.1464 13.1464C17.4614 13.4614 17.2383 14 16.7929 14L7.20711 14C6.76165 14 6.53857 13.4614 6.85355 13.1464L11.2929 8.70711C11.6834 8.31658 12.3166 8.31658 12.7071 8.70711Z"/>
</Icon>

