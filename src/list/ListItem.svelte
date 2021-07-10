<script>
import { getOverrides } from '../styles';

import { ARTWORK_SIZES } from './constants.js';
import {
  StyledRoot,
  StyledContent,
  StyledEndEnhancerContainer,
  StyledArtworkContainer,
} from './styled/index.js';

import { artworkSizeToValue } from './utils.js';

export let overrides = {};
export let artwork;
export let EndEnhancer;
export let sublist;
export let artworkSize = ARTWORK_SIZES.MEDIUM;

let rootRef;

const [Root, rootProps] = getOverrides(overrides.Root, StyledRoot);
const [ArtworkContainer, artworkContainerProps] = getOverrides(
  overrides.ArtworkContainer,
  StyledArtworkContainer
);
const [Content, contentProps] = getOverrides(overrides.Content, StyledContent);
const [EndEnhancerContainer, endEnhancerContainerProps] = getOverrides(
  overrides.EndEnhancerContainer,
  StyledEndEnhancerContainer
);
</script>

<Root bind:ref="{rootRef}" {...rootProps}>
  {#if artwork}
    <ArtworkContainer
      $artworkSize="{artworkSize}"
      $sublist="{Boolean(sublist)}"
      {...artworkContainerProps}>
      {artwork}
    </ArtworkContainer>
  {/if}
  <Content $mLeft="{!artwork}" $sublist="{!!sublist}" {...contentProps}>
    <slot />
    {#if EndEnhancer}
      <EndEnhancerContainer {...endEnhancerContainerProps}>
        <svelte:component this="{EndEnhancer}" />
      </EndEnhancerContainer>
    {/if}
  </Content>
</Root>
