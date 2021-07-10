<script>
import Icon from '../Icon.svelte';

export let ref;
export let title = 'Check Indeterminate';
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
    <path fillRule="evenodd" clipRule="evenodd" d="M6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H7C6.44772 13 6 12.5523 6 12Z"/>
</Icon>

