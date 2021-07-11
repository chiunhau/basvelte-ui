<style>
main {
  width: 80vw;
  margin: 0 auto;
}

.popper {
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  padding: 20px;
  background-color: #fff;
}

.popover-content {
  padding: 20px;
}
</style>

<script>
import { onMount } from 'svelte';
import Theme from 'basvelte-ui/Theme.svelte';
import { Button, SIZE } from 'basvelte-ui/button/index.js';
import { Avatar } from 'basvelte-ui/avatar/index.js';
import { Input } from 'basvelte-ui/input/index.js';
import { FormControl } from 'basvelte-ui/form-control/index.js';
import { Heading, HeadingLevel } from 'basvelte-ui/heading/index.js';
import { Menu } from 'basvelte-ui/menu/index.js';
import { Tag } from 'basvelte-ui/tag/index.js';
import { Grid, Cell } from 'basvelte-ui/layout-grid/index.js';
import { ListItem, ListItemLabel } from 'basvelte-ui/list/index.js';
import { Textarea } from 'basvelte-ui/textarea/index.js';
import { Checkbox, STYLE_TYPE } from 'basvelte-ui/checkbox/index.js';
import { Alert } from 'basvelte-ui/icon/index.js';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  SIZE as MODAL_SIZE,
} from 'basvelte-ui/modal/index.js';
import {
  Layer,
  TetherBehavior,
  TETHER_PLACEMENT,
} from 'basvelte-ui/layer/index.js';
import { Drawer, ANCHOR as DRAWER_ANCHOR } from 'basvelte-ui/drawer/index.js';
import { StatefulPopover } from 'basvelte-ui/popover/index.js';
const items = [{ label: 'apple' }, { label: 'banana' }, { label: 'cake' }];

let showLayer = false;
let isOpen = false;
let drawerIsOpen = false;
let divRef;
let divRef2;
let isTetherOpen = false;

// Tether demo
let anchorRef;
let popperRef;
let popperOffset = { top: 0, left: 0 };

const handlePopperUpdate = (normalizedOffsets) => {
  popperOffset = normalizedOffsets.popper;
};

const handleOpenModal = () => {
  isOpen = true;
};

onMount(() => {
  console.log(divRef);
  console.log(divRef2);
});

$: {
  console.log(anchorRef);
}
</script>

<Theme>
  <main>
    <HeadingLevel>
      <Heading>Basvelte UI Playground</Heading>
      <HeadingLevel>
        <HeadingLevel>
          <Heading>Sub heading</Heading>
        </HeadingLevel>
        <Heading>Layout Grid</Heading>
        <Grid gridColumns="{[2, 6, 12]}">
          <Cell>1</Cell>
          <Cell>2</Cell>
          <Cell>3</Cell>
          <Cell>4</Cell>
          <Cell>5</Cell>
          <Cell>6</Cell>
        </Grid>
        <Heading>Tag</Heading>
        <Tag>Hot</Tag>
        <Heading>Button</Heading>
        <Button size="{SIZE.mini}">Mini</Button>
        <Button size="{SIZE.compact}">Compact</Button>
        <Button size="{SIZE.default}">Default</Button>
        <Button size="{SIZE.large}">Large</Button>

        <Button startEnhancer="😀">StartEnhancer</Button>
        <Button endEnhancer="😀">EndEnhancer</Button>
        <Button disabled>Disabled</Button>

        <Heading>Input</Heading>
        <FormControl label="Label" caption="Caption">
          <Input startEnhancer="😀" placeholder="Placeholder" />
        </FormControl>

        <Heading>Avatar</Heading>
        <Avatar
          name="Jane Doe"
          size="scale1600"
          src="https://not-a-real-image.png" />

        <Heading>Menu</Heading>
        <Menu items="{items}" />

        <Heading>Icon</Heading>
        <Alert />

        <Heading>Modal</Heading>
        <Button on:click="{handleOpenModal}">Open Modal</Button>
        <Modal
          size="{MODAL_SIZE.default}"
          isOpen="{isOpen}"
          onClose="{() => {
            isOpen = false;
          }}">
          <ModalHeader>Modal Header</ModalHeader>
          <ModalBody>Modal Body</ModalBody>
          <ModalFooter
            ><Button
              on:click="{() => {
                isOpen = false;
              }}">Close</Button
            ></ModalFooter>
        </Modal>
        <Heading>Popover</Heading>
        <StatefulPopover>
          <Button slot="anchor">Open Popover</Button>
          <div class="popover-content" slot="content">I am popover content</div>
        </StatefulPopover>
        <Heading>Drawer</Heading>
        <Button
          on:click="{() => {
            drawerIsOpen = true;
          }}">Open Drawer</Button>
        <Drawer
          isOpen="{drawerIsOpen}"
          autoFocus
          onClose="{() => {
            drawerIsOpen = false;
          }}">
          <div>drawer content</div>
        </Drawer>
        <Heading>Layer TetherBehavior</Heading>
        <Button
          bind:ref="{anchorRef}"
          on:click="{() => {
            isTetherOpen = true;
          }}">Open Popper</Button>
        {#if isTetherOpen}
          <Layer>
            <TetherBehavior
              anchorRef="{anchorRef}"
              popperRef="{popperRef}"
              onPopperUpdate="{(...args) => handlePopperUpdate(...args)}"
              placement="{TETHER_PLACEMENT.right}">
              <div
                bind:this="{popperRef}"
                class="popper"
                style="left:{popperOffset.left}px; top:{popperOffset.top}px;">
                I am a popper
              </div>
            </TetherBehavior>
          </Layer>
        {/if}
        <Heading>List</Heading>
        <ListItem artwork="😀">
          <ListItemLabel>Label</ListItemLabel>
        </ListItem>
        <Heading>Textarea</Heading>
        <Textarea
          value="Textarea"
          placeholder="Controlled Input"
          clearOnEscape />
        <Heading>Checkbox</Heading>
        <Checkbox>Unchecked</Checkbox>
        <Checkbox checked="{true}">Checked</Checkbox>
        <Checkbox checked="{true}" checkmarkType="{STYLE_TYPE.toggle_round}"
          >Round Toggle</Checkbox>
      </HeadingLevel>
    </HeadingLevel>
  </main>
</Theme>
