<script>
import { getContext, onMount, onDestroy } from 'svelte';
import { Div } from '../common/index.js';
import { Container } from './styled/index.js';

export let onEscape = () => {};
export let onDocumentClick = () => {};

const layerContext = getContext('basvelte-ui:layers');
const hostStore = getContext('basvelte-ui:layersHost');
const { addEscapeHandler, addDocClickHandler } = layerContext;

let ref;
let host;
let mounted = false;

onMount(() => {
  addEscapeHandler(onEscape);
  addDocClickHandler(onDocumentClick);
  mounted = true;

  if (host) {
    host.appendChild(ref);
  }
});

hostStore.subscribe((value) => {
  if (value) {
    host = value;
    if (host && mounted) {
      host.appendChild(ref);
    }
  }
});
</script>

<Div styled="{{ display: 'none' }}">
  <Container bind:ref><slot /></Container>
</Div>
