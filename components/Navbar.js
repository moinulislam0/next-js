"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <ul>
      <li>
        <Link href="/" className={pathname === "/" ? "active" : ""}>
          Home
        </Link>
      </li>
      <li>
        <Link href="/about" className={pathname === "/about" ? "active" : ""}>
          About
        </Link>
      </li>
      <li>
        <Link href="/login" className={pathname === "/login" ? "active" : ""}>
          SignUp
        </Link>
      </li>
    </ul>
  );
}
