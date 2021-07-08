<script>
import { getOverrides } from '../styles';

import {
  List as StyledList,
  EmptyState as StyledEmptyState,
  OptgroupHeader as StyledOptgroupHeader,
} from './styled/index.js';
import OptionList from './OptionList.svelte';

export let overrides = {};
export let rootRef;
export let focusMenu = () => {};
export let handleMouseLeave = () => {};
export let renderAll = false;
export let noResultsMsg = '';
export let getRequiredItemProps = () => ({});
export let activedescendantId;
export let items;

let focusVisible = false;

const handleFocus = (event) => {
  setFocusVisible(true);
};

const handleBlur = () => {
  if (focusVisible !== false) {
    setFocusVisible(false);
  }
};

const [List, listProps] = getOverrides(overrides.List, StyledList);
const [Option, optionProps] = getOverrides(overrides.Option, OptionList);
const [EmptyState, emptyStateProps] = getOverrides(
  overrides.EmptyState,
  StyledEmptyState
);
const [OptgroupHeader, optgroupHeaderProps] = getOverrides(
  overrides.OptgroupHeader,
  StyledOptgroupHeader
);

const groupedItems = Array.isArray(items) ? { __ungrouped: items } : items;
const optgroups = Object.keys(groupedItems);
let itemIndex = -1;
const newGroupedItems = optgroups
  .map((optgroup) => {
    const groupItems = groupedItems[optgroup].map((item) => {
      itemIndex = itemIndex + 1;

      const {
        disabled,
        isFocused,
        isHighlighted,
        resetMenu = () => {},
        ...restProps
      } = getRequiredItemProps(item, itemIndex);

      return {
        item,
        resetMenu,
        _$disabled: disabled,
        _$isFocused: isFocused,
        _$isHighlighted: isHighlighted,
        'aria-disabled': disabled,
        'aria-selected': isHighlighted && isFocused,
        ...restProps,
      };
    });

    return { [optgroup]: groupItems };
  })
  .reduce((acc, val) => ({ ...acc, ...val }), {});

const isEmpty = optgroups.every((optgroup) => !groupedItems[optgroup].length);
</script>

<List
  aria-activedescendant="{activedescendantId || null}"
  role="listbox"
  this="{rootRef}"
  onMouseEnter="{focusMenu}"
  onMouseLeave="{handleMouseLeave}"
  onMouseOver="{focusMenu}"
  tabIndex="{0}"
  data-basvelte="menu"
  $isFocusVisible="{focusVisible}"
  {...listProps}>
  {#if isEmpty}
    <EmptyState aria-live="polite" aria-atomic {...emptyStateProps}>
      {noResultsMsg}
    </EmptyState>
  {:else}
    {#each optgroups as optgroup}
      {#if optgroup !== '__ungrouped'}
        <OptgroupHeader {...optgroupHeaderProps}>
          {optgroup}
        </OptgroupHeader>
      {/if}
      {#each newGroupedItems[optgroup] as item, index}
        <Option
          renderAll="{renderAll}"
          overrides="{overrides}"
          role="option"
          {...item}
          {...optionProps} />
      {/each}
    {/each}
  {/if}
</List>
