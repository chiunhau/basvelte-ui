<script>
import { onMount, setContext, getContext } from 'svelte';
import { writable } from 'svelte/store';

export let hostRef;

let escapeKeyHandlers = [];
let docClickHandlers = [];
let hostStore = writable(hostRef);
setContext('basvelte-ui:layersHost', hostStore);

const onDocumentClick = (event) => {
  const docClickHandler = docClickHandlers[docClickHandlers.length - 1];
  if (docClickHandler) {
    docClickHandler(event);
  }
};

const onKeyUp = (event) => {
  if (event.key === 'Escape') {
    const escapeKeyHandler = escapeKeyHandlers[escapeKeyHandlers.length - 1];
    if (escapeKeyHandler) {
      escapeKeyHandler();
    }
  }
};

const onAddEscapeHandler = (escapeKeyHandler) => {
  escapeKeyHandlers = [...escapeKeyHandlers, escapeKeyHandler];
};

const onRemoveEscapeHandler = (escapeKeyHandler) => {
  escapeKeyHandlers = escapeKeyHandlers.filter(
    (handler) => handler !== escapeKeyHandler
  );
};

const onAddDocClickHandler = (docClickHandler) => {
  docClickHandlers = [...docClickHandlers, docClickHandler];
};

const onRemoveDocClickHandler = (docClickHandler) => {
  docClickHandlers = prev.docClickHandlers.filter(
    (handler) => handler !== docClickHandler
  );
};

setContext('basvelte-ui:layers', {
  zIndex: 1,
  // host: hostStore,
  addEscapeHandler: onAddEscapeHandler,
  removeEscapeHandler: onRemoveEscapeHandler,
  addDocClickHandler: onAddDocClickHandler,
  removeDocClickHandler: onRemoveDocClickHandler,
});

onMount(() => {
  document.addEventListener('keyup', onKeyUp);
  document.addEventListener('mousedown', onDocumentClick);
  hostStore.set(hostRef);
});
</script>

<slot />
<div bind:this="{hostRef}"></div>
