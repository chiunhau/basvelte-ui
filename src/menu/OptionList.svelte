<script>
import { getOverrides } from '../styles';
import { OPTION_LIST_SIZE } from './constants.js';
import MaybeChildMenu from './MaybeChildMenu.svelte';
import {
  ListItem as StyledListItem,
  ListItemAnchor as StyledListItemAnchor,
} from './styled/index.js';

export let overrides = {};
export let renderAll = false;
export let renderHrefAsAnchor = true;
export let size = OPTION_LIST_SIZE.default;
export let item;
export let getChildMenu;
export let _$isHighlighted;
export let resetMenu = () => {};
export let onMouseEnter = () => {};
export let getItemLabel = (item) => (item ? item.label : '');
export let ref = undefined;

const [ListItem, listItemProps] = getOverrides(
  overrides.ListItem,
  StyledListItem
);
const [ListItemAnchor, listItemAnchorProps] = getOverrides(
  overrides.ListItemAnchor,
  StyledListItemAnchor
);
</script>

<!-- <MaybeChildMenu
  getChildMenu="{getChildMenu}"
  isOpen="{!!_$isHighlighted}"
  item="{item}"
  resetParentMenu="{resetMenu}"
  renderAll="{renderAll}"
  overrides="{overrides}"> -->
<ListItem
  this="{ref}"
  item="{item}"
  onMouseEnter="{onMouseEnter}"
  $size="{size}"
  _$isHighlighted="{_$isHighlighted}"
  {...$$restProps}
  {...listItemProps}>
  {#if item.href && renderHrefAsAnchor}
    <ListItemAnchor
      $item="{item}"
      href="{item.href}"
      _$isHighlighted="{_$isHighlighted}"
      {...listItemAnchorProps}>
      {getItemLabel(item)}
    </ListItemAnchor>
  {:else}
    {getItemLabel(item)}
  {/if}
</ListItem>
<!-- </MaybeChildMenu> -->
