# Multi-brand design system

An open-source React component library built on design tokens. One set of components, themed for three brands (Pepsi, Lay’s and Starbucks), each in light and dark mode.

The tokens come from the Semantics variables in Figma, so the code and the design file stay in sync.

**Live Storybook:** https://bhavyaux.github.io/multi-brand-design-system/

## Components

| Component | Status |
| --- | --- |
| Button (primary, secondary, tertiary; sm, md, lg; leading and trailing icons) | Ready |
| Input, Checkbox, Radio, OTP box | Planned |

## Getting started

You need [Node.js](https://nodejs.org) (LTS version) and Git.

```bash
git clone https://github.com/bhavyaux/multi-brand-design-system.git
cd multi-brand-design-system
npm install
npm run storybook
```

Storybook opens at http://localhost:6006. Use the **Brand** and **Mode** dropdowns in the toolbar to switch themes.

## Using a component

Import the tokens once, set the brand and mode on the root element, then use the components.

```tsx
import './tokens/tokens.css';
import { Button } from './components/Button/Button';

document.documentElement.dataset.brand = 'pepsi'; // 'pepsi' | 'lays' | 'starbucks'
document.documentElement.dataset.mode = 'light';  // 'light' | 'dark'

<Button variant="primary" size="md">Continue</Button>
```

## Project structure

```
.storybook/              Storybook setup, including the brand and mode switcher
src/tokens/tokens.css    Design tokens: one block per brand and mode
src/components/          One folder per component (code, styles, stories)
```

## Design tokens

Tokens are CSS variables named by role, for example `--surface-action`, `--text-on-action` and `--border-focused`. Each brand and mode defines its own values under `[data-brand="…"][data-mode="…"]` in `src/tokens/tokens.css`. Components only use these variables and never hardcoded colours.

## Accessibility

Every component has a visible keyboard focus state and a disabled state. The Storybook accessibility panel is enabled so you can check contrast and other issues for each story.

## Contributing

Contributions are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

See the [LICENSE](LICENSE) file.
