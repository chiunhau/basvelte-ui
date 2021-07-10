# Basvelte UI

(WIP 🚧) Basvelte is a Svelte component system inspired by the mighty [Baseui](https://baseweb.design/).

## Usage

```svelte
<script>
import Theme from 'basvelte-ui/styles/Theme.svelte'; //Theme context
import { Button, SIZE } from 'basvelte-ui/button';
</script>

// App.svelte
<Theme>
  <main>
    <Button size="{SIZE.mini}">Mini</Button>
    <Button size="{SIZE.compact}">Compact</Button>
    <Button size="{SIZE.default}">Default</Button>
    <Button size="{SIZE.large}">Large</Button>
  </main>
</Theme>
```

## Components Roadmap

### Basic

- [ ] Button 🚧
- [ ] Button Group
- [ ] Checkbox
- [ ] Form Control
- [ ] Input 🚧
- [ ] Radio
- [ ] Slider
- [ ] Textarea
- [ ] Menu 🚧
- [ ] Select
- [ ] Tabs
- [ ] Layout Grid 🚧
- [x] Heading 🎉
- [ ] Icon
- [ ] List
- [ ] Tag 🚧
- [ ] Avatar 🚧
- [ ] Drawer 🚧
- [ ] Modal 🚧
- [ ] Popover
- [ ] Layer 🚧

### Advanced

#### PICKERS

- [ ] File Uploader
- [ ] Rating

#### DATE & TIME

- [ ] Datepicker
- [ ] Time Picker

#### NAVIGATION

- [ ] Breadcrumbs
- [ ] Pagination
- [ ] Side Navigation

#### CONTENT

- [ ] Accordion
- [ ] Drag and Drop List
- [ ] Tree View
- [ ] Typography

#### TABLES

- [ ] Table
- [ ] Data Table
- [ ] Grid Table
- [ ] Flex Table

#### PROGRESS & VALIDATION

- [ ] Notification
- [ ] Progress Bar
- [ ] Progress Steps
- [ ] Skeleton
- [ ] Snackbar
- [ ] Spinner
- [ ] Toast

#### SURFACES

- [ ] Card
- [ ] Tooltip
