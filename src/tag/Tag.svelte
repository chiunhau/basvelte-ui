<script>
import { getOverrides } from '../styles';
import {
  Action as StyledAction,
  Root as StyledRoot,
  ActionIcon as StyledActionIcon,
  Text as StyledText,
} from './styled/index.js';
import { KIND, VARIANT, SIZE } from './constants.js';

export let closeable = true;
export let color;
export let size = SIZE.small;
export let disabled = false;
export let isFocused = false;
export let isHovered = false;
export let kind = KIND.primary;
export let onActionClick = () => {};
export let onActionKeyDown = () => {};
export let onClick = null;
export let onKeyDown = null;
export let overrides = {};
export let title;
export let variant = VARIANT.light;
export let ref;

let focusVisible = false;

const handleFocus = (event) => {
  if (isFocusVisible(event)) {
    setFocusVisible(true);
  }
};

const handleBlur = (event) => {
  if (focusVisible !== false) {
    setFocusVisible(false);
  }
};

const handleKeyDown = (event) => {
  if (event.currentTarget !== event.target) {
    return;
  }
  const key = event.key;
  if (onClick && key === 'Enter') {
    onClick(event);
  }
  if (closeable && (key === 'Backspace' || key === 'Delete')) {
    onActionClick(event);
    onActionKeyDown(event);
  }
  if (onKeyDown) {
    onKeyDown(event);
  }
};

const [Root, rootProps] = getOverrides(overrides.Root, StyledRoot);
const [Action, actionProps] = getOverrides(overrides.Action, StyledAction);
const [ActionIcon, actionIconProps] = getOverrides(
  overrides.ActionIcon,
  StyledActionIcon
);
const [Text, textProps] = getOverrides(overrides.Text, StyledText);
const clickable = typeof onClick === 'function';
const rootHandlers = disabled
  ? {}
  : {
      onClick: onClick,
      onKeyDown: handleKeyDown,
    };
const actionHandlers = disabled
  ? {}
  : {
      onClick: (event) => {
        // we don't want onClick to be called when the close icon is clicked
        event.stopPropagation();
        onActionClick(event);
      },
    };
const sharedProps = {
  _$clickable: clickable,
  _$closeable: closeable,
  _$color: color,
  _$disabled: disabled,
  _$isFocused: isFocused,
  _$isHovered: isHovered,
  _$kind: kind,
  _$variant: variant,
  _$isFocusVisible: focusVisible,
  _$size: size,
};
const titleText = title;
const isButton = (clickable || closeable) && !disabled;
const actionSize = {
  [SIZE.small]: '12',
  [SIZE.medium]: '16',
  [SIZE.large]: '20',
}[size];
</script>

<Root
  this="{ref}"
  data-basvelte="tag"
  aria-disabled="{disabled ? true : null}"
  role="{isButton ? 'button' : null}"
  tabIndex="{isButton ? 0 : null}"
  {...rootHandlers}
  {...sharedProps}
  {...rootProps}>
  <Text title="{titleText}" {...textProps}>
    <slot />
  </Text>
  {#if closeable}
    <Action
      aria-hidden="{true}"
      role="presentation"
      {...actionHandlers}
      {...sharedProps}
      {...actionProps}>
      <ActionIcon
        width="{actionSize}"
        height="{actionSize}"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...actionIconProps}>
        <path
          fill="currentColor"
          d="M21.0999 5.09998L18.8999 2.90002L11.9999 9.90002L5.09985 2.90002L2.8999 5.09998L9.8999 12L2.8999 18.9L5.09985 21.1L11.9999 14.1L18.8999 21.1L21.0999 18.9L14.0999 12L21.0999 5.09998Z"
        ></path>
      </ActionIcon>
    </Action>
  {/if}
</Root>
