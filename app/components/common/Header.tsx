"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import cx from "classnames";
import ViIcon from "./ViIcons";
import Image from "next/image";
import logo from "../../../public/images/logo_wht.svg";
import logoText from "../../../public/images/logo_text_wht.svg";
import ViButton from "./ViButton";

export default function Header() {
  const pathname = usePathname();
  const [btnOpen, setBtnOpen] = useState(false);
  const toggleBtnOpen = () => {
    setBtnOpen(!btnOpen);
  };
  return (
    <div className={cx("header", { active: btnOpen === true })}>
      <div className="header-wrap">
        {/* main */}
        <div className="gnb">
          {pathname === "/main/" && (
            <div className="logo">
              <Link href="/main">
                <Image src={logo} alt="ormakgil" />
              </Link>
            </div>
          )}
          {pathname !== "/main/" && (
            <>
              <div className="logo">
                <ViButton type="icon">
                  <ViIcon icon="prev active" />
                </ViButton>
                <Link href="/main">
                  <Image src={logoText} alt="ormakgil" />
                </Link>
              </div>
              <div className="page-tit">About</div>
            </>
          )}
          <button className="btn-menu" onClick={() => toggleBtnOpen()}>
            {btnOpen ? <ViIcon icon="close active" size="xl" /> : <ViIcon icon="hamburger active" size="xl" />}
          </button>
        </div>

        {btnOpen && (
          <div className="nav">
            <ul className="nav-list">
              <li className="li-1">
                <Link href="/">About</Link>
              </li>
              <li className="li-2">
                <Link href="/">Projects</Link>
              </li>
              <li className="li-3">
                <Link href="/">Contact</Link>
              </li>
            </ul>
            <div className="info">
              <div className="mail">
                <ul className="mail-list">
                  <li>
                    <div className="label">Email</div>
                    <div className="con">
                      <Link href="mailto: contact@ormakgil.com">contact@ormakgil.com</Link>
                    </div>
                  </li>
                  <li>
                    <div className="label">Tel.</div>
                    <div className="con">
                      <Link href="tel:+82 (0)2 6959 9630">+82 (0)2 6959 9630</Link>
                    </div>
                  </li>
                  <li>
                    <div className="label">Fax.</div>
                    <div className="con">
                      <Link href="tel:+82 (0)2 6711 9351">+82 (0)2 6711 9351</Link>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="company">
                <div className="name">(주)오르막길</div>
                <div className="adress">
                  <strong>경기도 광명시 일직로12번길 22, 5층 531호</strong>
                  <br />
                  531, 5F <br />
                  22, Iljik-ro 12beon-gil, <br />
                  Gwangmyeong-si, Gyeonggi-do, <br />
                  Republic of Korea
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
