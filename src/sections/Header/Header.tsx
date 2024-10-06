"use client";
import Link from "next/link";
const Links = [
  { link: "Home" },
  { link: "Projects" },
  { link: "About" },
  // { link: "Contact" },
];
export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed  z-10 top-3 w-full ">
      <nav className="flex gap-1 p-0.5 border rounded-full bg-white/15 backdrop:blur ">
        {Links.map((ele, i) => (
          <Link
            href={`/#${ele.link.toLowerCase()}`}
            key={i}
            className="nav-item "
          >
            {ele.link}
          </Link>
        ))}

        <Link
          href="/#contact"
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray900 "
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};
