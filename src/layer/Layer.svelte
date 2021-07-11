<script>
import { getContext, onMount, onDestroy } from 'svelte';
import Portal from 'svelte-portal';
import { Container } from './styled/index.js';

export let onEscape = () => {};
export let onDocumentClick = () => {};
export let onLayerMount = () => {};
export let mountNode = null;

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
  if (mountNode) {
    onLayerMount && onLayerMount();
  }
});

onDestroy(() => {
  removeEscapeHandler(onEscape);
  removeDocClickHandler(onDocumentClick);
});
</script>

<Portal target="#basvelte-ui-layers">
  <Container><slot /></Container>
</Portal>
