# use-window-focus

React Hook to show if window is focused or not

## Installation

```sh
pnpm add use-window-focus
```

## Usage

```jsx
import useWindowFocus from 'use-window-focus';

export const App = () => {
  const isWindowFocused = useWindowFocus();

  return (
    <div>
      <span>{isWindowFocused ? 'Focused' : 'Not focused'}</span>
    </div>
  );
}
```

## License

The package is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
