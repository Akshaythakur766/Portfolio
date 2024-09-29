import Link from "next/link";

export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed  z-10 top-3 w-full" >
      <nav className="flex gap-1 p-0.5 border rounded-full bg-white/15 backdrop:blur ">
        <Link href="#" className="nav-item ">
          Home
        </Link>
        <Link href="#" className="nav-item ">
          Projects
        </Link>
        <Link href="#" className="nav-item ">
          About
        </Link>
        <Link href="#" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray900 ">
          Contact
        </Link>
      </nav>
    </div>
  );
};
