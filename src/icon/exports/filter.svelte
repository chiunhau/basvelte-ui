<script>
import Icon from '../Icon.svelte';

export let ref;
export let title = 'Filter';
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
    <rect x="7" y="11" width="10" height="2" rx="1"/>
  <rect x="4" y="7" width="16" height="2" rx="1"/>
  <rect x="10" y="15" width="4" height="2" rx="1"/>
</Icon>

