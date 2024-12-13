"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import "@/styles/globals.scss";
import cx from "classnames";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="ko">
      <body>
        <div
          id="wrap"
          className={cx({ blk: pathname === "/main/" || pathname === "/about/" }, { wht: pathname !== "/main/" && pathname !== "/about/" })}
        >
          <AntdRegistry>{children}</AntdRegistry>
        </div>
      </body>
    </html>
  );
}
