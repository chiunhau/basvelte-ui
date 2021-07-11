<script>
import { getOverrides } from '../styles';
import StyledSvg from './Svg.svelte';

export let title = '';
export let size = 24;
export let color = undefined;
export let overrides = {};
export let ref = null;

const [Svg, overrideProps] = getOverrides(overrides.Svg, StyledSvg);
const passThroughProps = {
  title,
  _$color: color,
  _$size: size,
  ...$$restProps,
  ...overrideProps,
};
</script>

<Svg data-basvelte="icon" bind:ref {...passThroughProps}>
  {#if title}
    <title>{title}</title>
    <slot />
  {/if}
</Svg>
