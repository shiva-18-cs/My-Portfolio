import { useRef, useEffect, useCallback } from 'react';

export default function CustomCursor() {
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const mouse = useRef({ x: -100, y: -100 });
  const outer = useRef({ x: -100, y: -100 });
  const rafId = useRef(null);
  const isHovered = useRef(false);
  const isVisible = useRef(false);

  const tick = useCallback(() => {
    // Lerp the outer ring toward the mouse position (slight delay)
    outer.current.x += (mouse.current.x - outer.current.x) * 0.15;
    outer.current.y += (mouse.current.y - outer.current.y) * 0.15;

    if (outerRef.current) {
      outerRef.current.style.left = `${outer.current.x}px`;
      outerRef.current.style.top = `${outer.current.y}px`;
    }
    if (innerRef.current) {
      innerRef.current.style.left = `${mouse.current.x}px`;
      innerRef.current.style.top = `${mouse.current.y}px`;
    }

    rafId.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    // Only activate on desktop screens
    if (window.innerWidth < 1024) return;
    isVisible.current = true;

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const interactive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]');

      if (interactive && !isHovered.current) {
        isHovered.current = true;
        outerRef.current?.classList.add('hovered');
      } else if (!interactive && isHovered.current) {
        isHovered.current = false;
        outerRef.current?.classList.remove('hovered');
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });

    // Start the animation loop
    rafId.current = requestAnimationFrame(tick);

    // Handle resize — hide cursor if window shrinks below 1024
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        if (outerRef.current) outerRef.current.style.display = 'none';
        if (innerRef.current) innerRef.current.style.display = 'none';
      } else {
        if (outerRef.current) outerRef.current.style.display = '';
        if (innerRef.current) innerRef.current.style.display = '';
      }
    };
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('resize', handleResize);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [tick]);

  // Don't render on mobile (SSR-safe check is done in useEffect)
  return (
    <>
      <div ref={outerRef} className="custom-cursor" />
      <div ref={innerRef} className="custom-cursor-inner" />
    </>
  );
}
