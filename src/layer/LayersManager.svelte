<script>
import { onMount, setContext } from 'svelte';

let escapeKeyHandlers = [];
let docClickHandlers = [];

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
  docClickHandlers = docClickHandlers.filter(
    (handler) => handler !== docClickHandler
  );
};

setContext('basvelte-ui:layers', {
  zIndex: 1,
  addEscapeHandler: onAddEscapeHandler,
  removeEscapeHandler: onRemoveEscapeHandler,
  addDocClickHandler: onAddDocClickHandler,
  removeDocClickHandler: onRemoveDocClickHandler,
});

onMount(() => {
  document.addEventListener('keyup', onKeyUp);
  document.addEventListener('mousedown', onDocumentClick);
});
</script>

<slot />
<div id="basvelte-ui-layers"></div>
