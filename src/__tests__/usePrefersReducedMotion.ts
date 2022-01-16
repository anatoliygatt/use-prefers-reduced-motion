import MatchMediaMock from 'jest-matchmedia-mock';
import { renderHook, act } from '@testing-library/react-hooks';
import { renderHook as renderHookOnServer } from '@testing-library/react-hooks/server';
import { usePrefersReducedMotion } from '../usePrefersReducedMotion';

describe('usePrefersReducedMotion', () => {
  let matchMedia: MatchMediaMock;

  beforeEach(() => {
    matchMedia = new MatchMediaMock();
  });

  test('returns false when motion preference is unknown', () => {
    matchMedia.useMediaQuery('(prefers-reduced-motion: no-preference)');
    const { result } = renderHook(() => usePrefersReducedMotion());
    expect(result.current).toBe(false);
  });

  test('returns true when reduced motion is preferred', () => {
    matchMedia.useMediaQuery('(prefers-reduced-motion: reduce)');
    const { result } = renderHook(() => usePrefersReducedMotion());
    expect(result.current).toBe(true);
  });

  test('responds to the change in motion preference', () => {
    matchMedia.useMediaQuery('(prefers-reduced-motion: no-preference)');
    const { result } = renderHook(() => usePrefersReducedMotion());
    expect(result.current).toBe(false);
    act(() => {
      matchMedia.useMediaQuery('(prefers-reduced-motion: reduce)');
    });
    expect(result.current).toBe(true);
  });

  test('removes media query event listener on unmount', () => {
    const { unmount } = renderHook(() => usePrefersReducedMotion());

    const mediaQueries = matchMedia.getMediaQueries();
    expect(mediaQueries).toHaveLength(1);

    const mediaQuery = mediaQueries[0] as string;
    expect(matchMedia.getListeners(mediaQuery)).toHaveLength(1);
    unmount();
    expect(matchMedia.getListeners(mediaQuery)).toHaveLength(0);
  });

  test('returns false when rendered on the server', () => {
    const { result } = renderHookOnServer(() => usePrefersReducedMotion());
    expect(result.current).toBe(false);
  });

  test('returns true when rendered on the server with ssr=true', () => {
    const { result } = renderHookOnServer(() =>
      usePrefersReducedMotion({ ssr: true })
    );
    expect(result.current).toBe(true);
  });

  test('returns false when window.matchMedia is not supported and ssr=true', () => {
    matchMedia.destroy();
    const { result } = renderHook(() => usePrefersReducedMotion({ ssr: true }));
    expect(result.current).toBe(false);
  });
});
