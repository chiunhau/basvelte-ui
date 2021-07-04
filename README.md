# Basvelte UI

Basvelte is a Svelte component system inspired by the mighty Baseui.

## Usage

```svelte
// App.svelte
<script>
	import Theme from 'basvelte-ui/styles/Theme.svelte';
	import Button from 'basvelte-ui/button/Button.svelte';
</script>

<Theme>
	<main>
		<Button size="mini">Mini</Button>
		<Button size="compact">Compact</Button>
		<Button size="default">Default</Button>
		<Button size="large">Large</Button>
	</main>
</Theme>
```
