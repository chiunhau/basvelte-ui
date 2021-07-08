<script>
import { getOverrides } from '../styles';
import {
  Avatar as StyledAvatar,
  Initials as StyledInitials,
  Root as StyledRoot,
} from './styled/index.js';
import { getInitials } from './utils';

export let overrides = {};
export let size = 'scale1000';
export let src = '';
export let name = '';
export let initials = '';

let noImageAvailable = !src;

const handleError = () => {
  console.log('error');
  noImageAvailable = true;
};

$: noImageAvailable = !src;

const [Avatar, avatarProps] = getOverrides(overrides.Avatar, StyledAvatar);
const [Initials, initialsProps] = getOverrides(
  overrides.Initials,
  StyledInitials
);
const [Root, rootProps] = getOverrides(overrides.Root, StyledRoot);
</script>

<Root
  data-basvelte="avatar"
  aria-label="{noImageAvailable ? name : null}"
  role="{noImageAvailable ? 'img' : null}"
  _$didImageFailToLoad="{noImageAvailable}"
  _$size="{size}"
  {...rootProps}>
  {#if noImageAvailable}
    <Initials {...initialsProps}>
      {initials || getInitials(name)}
    </Initials>
  {:else}
    <Avatar
      alt="{name}"
      on:error="{handleError}"
      src="{src}"
      _$size="{size}"
      {...avatarProps} />
  {/if}
</Root>
