# use-window-focus

React Hook to show if window is focused or not

## Installation

```sh
yarn add use-window-focus
```

## Usage

```jsx
import React from 'react';
import useWindowFocus from 'use-window-focus';

export default () => {
  const windowFocused = useWindowFocus();

  return (
    <div>
      <span>{windowFocused ? 'Focused' : 'Not focused'}</span>
    </div>
  );
}
```

## License

The package is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
