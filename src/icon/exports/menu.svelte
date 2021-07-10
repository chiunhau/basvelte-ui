<script>
import Icon from '../Icon.svelte';

export let ref;
export let title = 'Menu';
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
    <rect x="4" y="11" width="16" height="2" rx="1"/>
  <rect x="4" y="5" width="16" height="2" rx="1"/>
  <rect x="4" y="17" width="16" height="2" rx="1"/>
</Icon>

