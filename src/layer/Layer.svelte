<script>
import { getContext, onMount, onDestroy } from 'svelte';
import Portal from 'svelte-portal';
import { Container } from './styled/index.js';

export let onEscape = () => {};
export let onDocumentClick = () => {};

const layerContext = getContext('basvelte-ui:layers');
const {
  addEscapeHandler,
  addDocClickHandler,
  removeEscapeHandler,
  removeDocClickHandler,
} = layerContext;

onMount(() => {
  addEscapeHandler(onEscape);
  addDocClickHandler(onDocumentClick);
});

onDestroy(() => {
  removeEscapeHandler(onEscape);
  removeDocClickHandler(onDocumentClick);
});
</script>

<Portal target="#basvelte-ui-layers">
  <Container><slot /></Container>
</Portal>
