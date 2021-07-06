<style>
main {
  width: 80vw;
  margin: 0 auto;
}
</style>

<script>
import Theme from 'basvelte-ui/styles/Theme.svelte';
import { Button, SIZE } from 'basvelte-ui/button/index.js';
import { Avatar } from 'basvelte-ui/avatar/index.js';
import { Input } from 'basvelte-ui/input/index.js';
import { Heading, HeadingLevel } from 'basvelte-ui/heading/index.js';
import { Menu } from 'basvelte-ui/menu/index.js';
const items = [{ label: 'apple' }, { label: 'banana' }, { label: 'cake' }];
</script>

<Theme>
  <main>
    <HeadingLevel>
      <Heading>Basvelte UI Playground</Heading>
      <HeadingLevel>
        <Heading>Button</Heading>
        <Button size="{SIZE.mini}">Mini</Button>
        <Button size="{SIZE.compact}">Compact</Button>
        <Button size="{SIZE.default}">Default</Button>
        <Button size="{SIZE.large}">Large</Button>

        <Button startEnhancer="😀">StartEnhancer</Button>
        <Button endEnhancer="😀">EndEnhancer</Button>
        <Button disabled>Disabled</Button>

        <Heading>Input</Heading>
        <Input startEnhancer="😀" placeholder="Placeholder" />

        <Heading>Avatar</Heading>
        <Avatar
          name="Jane Doe"
          size="scale1600"
          src="https://not-a-real-image.png" />

        <Heading>Menu</Heading>
        <Menu items="{items}" />
      </HeadingLevel>
    </HeadingLevel>
  </main>
</Theme>
