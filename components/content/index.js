function Container({ homepage, containerRef, children }) {
  return (
    <div
      className={`container mx-auto max-w-screen-xl relative overflow-hidden ${
        homepage ? "pb-0" : "pb-32"
      }`}
      ref={containerRef}
    >
      {children}
    </div>
  );
}

function Body({ homepage, children }) {
  return (
    <div
      className={`${
        homepage ? "h-screen flex items-center" : "pt-28"
      } xl:px-0 sm:px-20 px-7 cursor-default`}
    >
      {children}
    </div>
  );
}

export { Container, Body };
