<style>
main {
  width: 80vw;
  margin: 0 auto;
}
</style>

<script>
import { onMount } from 'svelte';
import Theme from 'basvelte-ui/styles/Theme.svelte';
import { Button, SIZE } from 'basvelte-ui/button/index.js';
import { Avatar } from 'basvelte-ui/avatar/index.js';
import { Input } from 'basvelte-ui/input/index.js';
import { FormControl } from 'basvelte-ui/form-control/index.js';
import { Heading, HeadingLevel } from 'basvelte-ui/heading/index.js';
import { Menu } from 'basvelte-ui/menu/index.js';
import { Tag } from 'basvelte-ui/tag/index.js';
import { Grid, Cell } from 'basvelte-ui/layout-grid/index.js';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  SIZE as MODAL_SIZE,
} from 'basvelte-ui/modal/index.js';
import { Drawer, ANCHOR as DRAWER_ANCHOR } from 'basvelte-ui/drawer/index.js';
const items = [{ label: 'apple' }, { label: 'banana' }, { label: 'cake' }];

let showLayer = false;
let isOpen = false;
let drawerIsOpen = false;
let divRef;
let divRef2;

const handleOpenModal = () => {
  isOpen = true;
};

onMount(() => {
  console.log(divRef);
  console.log(divRef2);
});
</script>

<Theme>
  <main>
    <HeadingLevel>
      <Heading>Basvelte UI Playground</Heading>
      <HeadingLevel>
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
      </HeadingLevel>
    </HeadingLevel>
  </main>
</Theme>
