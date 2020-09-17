import useWindowFocus from './index';
import { renderHook, act } from '@testing-library/react-hooks';

const fireFocusEvent = () => {
  global.window.dispatchEvent(new Event('focus'));
};

const fireBlurEvent = () => {
  global.window.dispatchEvent(new Event('blur'));
};

test('useWindowFocus should default to false', () => {
  const { result } = renderHook(() => useWindowFocus());

  expect(result.current).toBe(false);
});

test('useWindowFocus should be true after focus event', () => {
  const { result } = renderHook(() => useWindowFocus());

  act(() => {
    fireFocusEvent();
  });

  expect(result.current).toBe(true);
});

test('useWindowFocus should be false after blur event', () => {
  const { result } = renderHook(() => useWindowFocus());

  act(() => {
    fireFocusEvent();
  });

  expect(result.current).toBe(true);

  act(() => {
    fireBlurEvent();
  });

  expect(result.current).toBe(false);
});
