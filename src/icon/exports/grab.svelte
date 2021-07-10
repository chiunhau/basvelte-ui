<script>
import Icon from '../Icon.svelte';

export let ref;
export let title = 'Grab';
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
    <path fillRule="evenodd" clipRule="evenodd" d="M5 8C4.44775 8 4 8.44775 4 9C4 9.55225 4.44775 10 5 10H19C19.5522 10 20 9.55225 20 9C20 8.44775 19.5522 8 19 8H5ZM5 14C4.44775 14 4 14.4478 4 15C4 15.5522 4.44775 16 5 16H19C19.5522 16 20 15.5522 20 15C20 14.4478 19.5522 14 19 14H5Z"/>
</Icon>

