<script>
  import { getOverrides } from '../styles'
  import { 
    BaseButton as StyledButton
  } from './styled-components'
  import { KIND, SHAPE, SIZE } from './constants'

  export let disabled = false;
  export let isLoading = false;
  export let isSelected = false;
  export let kind = KIND.primary;
  export let overrides = {};
  export let shape = SHAPE.default;
  export let size = SIZE.default;
  
  const [Button, buttonProps] = getOverrides(overrides.Button, StyledButton)
  
  const sharedProps = {
    _$disabled: disabled,
    _$isLoading: isLoading,
    _$isSelected: isSelected,
    _$kind: kind,
    _$shape: shape,
    _$size: size,
  }
</script>

<Button 
  data-baseweb="button"
  {...buttonProps}
  {...sharedProps}
>
  <slot/>
</Button>