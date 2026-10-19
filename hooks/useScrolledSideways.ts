import { UIEvent, useState } from 'react';

export function useScrolledSideways() {
  const [scrolled, setScrolled] = useState(false);

  return [
    scrolled,
    (evt: UIEvent<HTMLElement>) =>
      setScrolled(evt.currentTarget.scrollLeft > 0),
  ] as const;
}
