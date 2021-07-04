<script>
import Div from '../../common/Div.svelte';
</script>

<Div
  styled="{(props) => ({
    ...props.$theme.typography.font300,
    color: props.$theme.colors.mono100,
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
  })}"
  {...$$restProps}>
  <slot />
</Div>
