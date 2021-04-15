import { useEffect, useRef } from "react";

function CircleAnimation({ containerRef }) {
  const circleRef = useRef();
  let onTouch = false;

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.onclick = () => {
        if (onTouch) return;

        circleRef.current.classList.add("w-16", "h-16");
        setTimeout(() => {
          circleRef.current?.classList.remove("w-16", "h-16");
        }, 400);
      };

      containerRef.current.onmousemove = (e) => {
        const [mouseX, mouseY] = [e.clientX, e.clientY];
        const [widthCircle, heightCircle] = [
          circleRef.current.offsetWidth / 2,
          circleRef.current.offsetHeight / 2
        ];

        circleRef.current.style.cssText = `left: ${
          mouseX - widthCircle
        }px; top: ${mouseY - heightCircle}px`;
      };

      containerRef.current.ontouchstart = () => {
        onTouch = true;
        circleRef.current?.classList.remove(
          "hidden",
          "transition-all",
          "duration-500",
          "ease-out"
        );

        setTimeout(() => {
          circleRef.current?.classList.remove("opacity-0");
          circleRef.current?.classList.add("animate-ping");
          setTimeout(() => {
            circleRef.current?.classList.remove("animate-ping");
            circleRef.current?.classList.add("hidden", "opacity-0");
          }, 500);
        }, 100);
      };
    }

    return () => (containerRef = null);
  }, [containerRef.current]);

  return (
    <div
      ref={circleRef}
      className="hidden md:block w-8 h-8 rounded-full border-2 border-yellow-400 fixed -left-10 transition-all duration-500 ease-out"
    ></div>
  );
}

export default CircleAnimation;
