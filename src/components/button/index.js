/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */

import Link from "next/link";
function ButtonBlue({ href, children }) {
  return (
    <button className=" bg-blue-500 p-2 rounded hover:bg-blue-700">
      <a href={href}>{children}</a>
    </button>
  );
}

function ButtonGreen({ href, children }) {
  return (
    <button className="bg-green-500 p-2 sm:ml-3 sm:mt-0 mt-3 rounded hover:bg-green-700">
      <a href={href}>{children}</a>
    </button>
  );
}

function ButtonYellow({ href, children }) {
  return (
    <button className="bg-yellow-500 p-2 sm:ml-3 sm:mt-0 mt-3 rounded hover:bg-yellow-700">
      <a href={href}>{children}</a>
    </button>
  );
}

function ButtonRed({ children, href }) {
  return (
    <button className="bg-red-500 text-white text-sm p-2 rounded hover:bg-red-700">
      <a href={href}>{children}</a>
    </button>
  );
}

function LinkButtonRed({ children, href }) {
  return (
    <Link href={href}>
      <a className="bg-red-500 text-white text-sm p-2 rounded hover:bg-red-700">
        {children}
      </a>
    </Link>
  );
}

export { ButtonBlue, ButtonGreen, ButtonYellow, ButtonRed, LinkButtonRed };
