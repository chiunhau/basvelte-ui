<script>
import Icon from '../Icon.svelte';

export let ref;
export let title = 'Overflow';
export let size;
export let color;
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
    <circle cx="6" cy="12" r="2"/>
  <circle cx="12" cy="12" r="2"/>
  <circle cx="18" cy="12" r="2"/>
</Icon>

