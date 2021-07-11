<script context="module">
import { H1, H2, H3, H4, H5, H6 } from '../common/index';

const headings = [H1, H2, H3, H4, H5, H6];

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

<script>
import { getContext } from 'svelte';

export let styleLevel = undefined;

const level = getContext('basvelte-ui:headingLevel');
</script>

<svelte:component
  this="{headings[level > 6 ? 5 : level < 1 ? 0 : level - 1]}"
  data-basvelte="heading"
  font="{styleLevel ? FONTS[styleLevel] : FONTS[level]}">
  <slot />
</svelte:component>
