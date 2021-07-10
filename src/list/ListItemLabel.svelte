<script>
import { getOverrides } from '../styles';

import {
  StyledLabelContent,
  StyledLabelDescription,
  StyledLabelSublistContent,
} from './styled/index.js';

export let overrides = {};
export let description;

const [LabelSublistContent, labelSublistContentProps] = getOverrides(
  overrides.LabelSublistContent,
  StyledLabelSublistContent
);
const [LabelContent, labelContentProps] = getOverrides(
  overrides.LabelContent,
  StyledLabelContent
);
const [LabelDescription, labelDescriptionProps] = getOverrides(
  overrides.LabelDescription,
  StyledLabelDescription
);
</script>

<div>
  <LabelContent {...labelContentProps}><slot /></LabelContent>
  {#if description}
    <LabelDescription {...labelDescriptionProps}>
      {description}
    </LabelDescription>
  {/if}
</div>
