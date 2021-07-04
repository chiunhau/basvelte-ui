# Basvelte UI

Basvelte is a Svelte component system inspired by the mighty [Baseui](https://baseweb.design/).

## Usage

```svelte
<script>
import Theme from 'basvelte-ui/styles/Theme.svelte'; //Theme context
import { Button, SIZE } from 'basvelte-ui/button';
</script>

// App.svelte
<Theme>
  <main>
    <Button size="{SIZE.mini}">Mini</Button>
    <Button size="{SIZE.compact}">Compact</Button>
    <Button size="{SIZE.default}">Default</Button>
    <Button size="{SIZE.large}">Large</Button>
  </main>
</Theme>
```
