<script>
import Icon from '../Icon.svelte';

export let ref;
export let title = 'Show';
export let size;
export let color;
export let overrides = {};

const SvgOverride = overrides && overrides.Svg ? overrides.Svg : {};
</script>

<Icon
  viewBox="0 0 20 20"
  bind:ref
  title="{title}"
  size="{size}"
  color="{color}"
  overrides="{{ Svg: SvgOverride }}"
  {...$$restProps}>
    <path d="M.2 10a11 11 0 0119.6 0A11 11 0 01.2 10zm9.8 4a4 4 0 100-8 4 4 0 000 8zm0-2a2 2 0 110-4 2 2 0 010 4z"/>
</Icon>

