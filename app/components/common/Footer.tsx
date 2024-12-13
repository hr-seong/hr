"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import LogoGry from "../../../public/images/logo_footer.svg";
import LogoWht from "../../../public/images/logo_footer_wht.svg";

export default function Footer() {
  const pathname = usePathname();
  // console.log(pathname);

  return (
    <div className="footer">
      <div className="footer-wrap">
        <div className="copy">© 2024 ormakgil. All Rights Reserved.</div>
        <div className="logo">
          <Link href="/main">
            {pathname === "/main/" || pathname === "/about/" ? (
              <Image src={LogoWht} alt="ormakgil" />
            ) : (
              <Image src={LogoGry} alt="ormakgil" />
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}
