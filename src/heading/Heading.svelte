<script>
import { getContext } from 'svelte';
import { H1, H2, H3, H4, H5, H6 } from '../common/index';

export let styleLevel;

const headingComponents = [H1, H2, H3, H4, H5, H6];

const level = getContext('basvelte-ui:headingLevel');

let renderedLevel = level > 6 ? 6 : level < 1 ? 1 : level;

const FONTS = [
  '',
  'font1050',
  'font950',
  'font850',
  'font750',
  'font650',
  'font550',
];
</script>

<svelte:component
  this="{headingComponents[renderedLevel - 1]}"
  data-baseweb="heading"
  font="{styleLevel ? FONTS[styleLevel] : FONTS[level]}">
  <slot />
</svelte:component>
