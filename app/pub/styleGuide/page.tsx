"use client";
// import cx from "classnames";
import ViButton from "@/app/components/common/ViButton";
import ViIcon from "@/app/components/common/ViIcons";
import ViChip from "@/app/components/common/ViChip";
import ViTag from "@/app/components/common/ViTag";
import { useState } from "react";
import { Checkbox, Tabs, Radio, Input } from "antd";
import type { CheckboxProps, TabsProps } from "antd";
import TextArea from "antd/es/input/TextArea";
import Search from "antd/es/input/Search";

// import Link from "next/link";

export default function StyleGuide() {
  // lnb 메뉴
  const [activeIndex, setActiveIndex] = useState(0);

  // guide 파일 메뉴 리스트
  const menuArr = ["Button", "Icons", "Chip", "Tag", "Checkbox", "Radio", "Input", "Tab", "ColorPalette"];

  // guide 파일 menu
  const handleOnClick = (idx: number) => {
    setActiveIndex(idx);
  };
  // checkbox
  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  // tab
  const onChangeTab = (key: string) => {
    console.log(key);
  };
  const itemsTab: TabsProps["items"] = [
    {
      key: "1",
      label: "Tab 1",
      children: "Content of Tab Pane 1",
    },
    {
      key: "2",
      label: "Tab 2",
      children: "Content of Tab Pane 2",
    },
    {
      key: "3",
      label: "Tab 3",
      children: "Content of Tab Pane 3",
    },
  ];
  const onChangeTab2 = (key: string) => {
    console.log(key);
  };
  const itemsTab2: TabsProps["items"] = [
    {
      key: "1",
      label: "Tab 1",
      children: "Content of Tab Pane 1",
    },
    {
      key: "2",
      label: "Tab 2",
      children: "Content of Tab Pane 2",
    },
    {
      key: "3",
      label: "Tab 3",
      children: "Content of Tab Pane 3",
    },
  ];
  // color palette
  const colorPaletteBg = [
    { var: "var(--primary)", code: "#1251A4" },
    { var: "var(--primary-hover)", code: "#95C7F5" },
    { var: "var(--primary-opa10)", code: "rgba(18, 81, 164, 0.1)" },
    { var: "var(--secondary)", code: "#117AFF" },
    { var: "var(--secondary-opa50)", code: "rgba(17, 122, 255, 0.5)" },
    { var: "var(--secondary-opa10)", code: "rgba(17, 122, 255, 0.1)" },
    { var: "var(--secondary-opa5)", code: "rgba(17, 122, 255, 0.05)" },
    { var: "var(--teriary)", code: "#232B38" },
    { var: "var(--teriary-opa50)", code: "rgba(35, 43, 56, 0.5)" },
    { var: "var(--teriary-opa10)", code: "rgba(35, 43, 56, 0.1)" },
    { var: "var(--white)", code: "#FFFFFF" },
    { var: "var(--white-opa80)", code: "rgba(255, 255, 255, 0.8)" },
    { var: "var(--white-opa40)", code: "rgba(255, 255, 255, 0.4)" },
    { var: "var(--white-opa20)", code: "rgba(255, 255, 255, 0.2)" },
    { var: "var(--black)", code: "#000000" },
    { var: "var(--black-opa40)", code: "rgba(0, 0, 0, 0.4)" },
    { var: "var(--black-opa20)", code: "rgba(0, 0, 0, 0.2)" },
    { var: "var(--red)", code: "#EB502D" },
    { var: "var(--red-opa10)", code: "rgba(235, 80, 45, 0.1)" },
    { var: "var(--green)", code: "#2FBE66" },
    { var: "var(--green-opa10)", code: "rgba(47, 190, 102, 0.1)" },
    { var: "var(--yellow)", code: "#FAA603" },
    { var: "var(--yellow-opa10)", code: "rgba(250, 166, 3, 0.1)" },
    { var: "var(--purple)", code: "#6A34B0" },
    { var: "var(--purple-opa50)", code: "rgba(106, 52, 176, 0.5)" },
    { var: "var(--purple-opa10)", code: "rgba(106, 52, 176, 0.1)" },
    { var: "var(--deep-blue)", code: "#3455B0" },
    { var: "var(--deep-blue-opa50)", code: "rgba(52, 85, 176, 0.5)" },
    { var: "var(--deep-blue-opa10)", code: "rgba(52, 85, 176, 0.1)" },
    { var: "var(--light-blue)", code: "#84CDF4" },
    { var: "var(--blue-opa5)", code: "rgba(22, 101, 216, 0.05)" },
    { var: "var(--pink)", code: "#EE5695" },
    { var: "var(--pink-opa10)", code: "rgba(238, 86, 149, 0.1)" },
    { var: "var(--grey-opa10)", code: "rgba(124, 130, 151, 0.1)" },
    { var: "var(--light-grey-opa50)", code: "rgba(198, 198, 198, 0.5)" },
    { var: "var(--light-grey-opa10)", code: "rgba(198, 198, 198, 0.1)" },
    { var: "var(--blue-gradation)", code: "linear-gradient(99deg, #1665d8 0.09%, #4980ec 100.09%)" },
    { var: "var(--green-gradation)", code: "linear-gradient(99deg, #01abd3 0.09%, #4bc8e6 100.09%)" },
    { var: "var(--pink-gradation)", code: "linear-gradient(990deg, #fc71ab 0.09%, #ef5796 100%)" },
    { var: "var(--red-gradation)", code: "linear-gradient(270deg, #fb5a35 -0.14%, #eb502d 100%)" },
    { var: "var(--user-gradation)", code: "linear-gradient(99deg, #00aad2 0.09%, #2961ce 100.09%)" },
    { var: "var(--bg-f8)", code: "#F8F8FB" },
    { var: "var(--bg-e1)", code: "#E1E2E9" },
    { var: "var(--bg-0f)", code: "#0FB1D7" },
    { var: "var(--border-d9)", code: "#D9D9D9" },
    { var: "var(--border-e0)", code: "#E0DFE7" },
    { var: "var(--border-e5)", code: "#E5E6EB" },
    { var: "var(--disabled)", code: "#A4AFC0" },
  ];

  const colorPaletteText = [
    { var: "var(--text-0)", code: "#080A0D" },
    { var: "var(--text-2)", code: "#222222" },
    { var: "var(--text-6)", code: "#666666" },
    { var: "var(--text-6-opa10)", code: "rgba(102, 102, 102, 0.1)" },
    { var: "var(--text-9)", code: "#999999" },
    { var: "var(--text-8e)", code: "#8E8E8E" },
    { var: "var(--text-4a)", code: "#4A5568" },
    { var: "var(--text-4a)", code: "#4A5568" },
  ];

  const colorCodeCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    alert("클립보드에 복사되었습니다.");
  };

  return (
    <>
      <div className="guide-component">
        <div className="guide-lnb">
          <div className="cmt">Components</div>
          <ul className="guide-lnb-list">
            {menuArr.map((menu, idx) => {
              return (
                <li key={idx}>
                  <a href={"#" + menu} className={activeIndex === idx ? "active" : ""} onClick={() => handleOnClick(idx)}>
                    {menu}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="guide-content">
          {/* Button */}
          <div className="guide-dvs" id="Button">
            <div className="title">Button</div>
            <div className="guide-set grid-row">
              <div className="inner-box">
                <div className="title">Button - color</div>
                <div className="cont flex-wrap">
                  <ViButton label="Button" bgColor="var(--primary)" />
                  <ViButton label="Button" bgColor="var(--secondary)" />
                  <ViButton label="Button" bgColor="var(--teriary)" />
                </div>
              </div>
              <div className="inner-box">
                <div className="title">Button - disabled</div>
                <div className="cont flex-wrap">
                  <ViButton label="Button" bgColor="var(--primary)" disabled />
                  <ViButton label="Button" outline bgColor="var(--primary)" disabled />
                </div>
              </div>
              <div className="inner-box">
                <div className="title">Button - type ( rect )</div>
                <div className="cont flex-wrap">
                  <ViButton label="Button" type="rect" size="lg" bgColor="var(--primary)" />
                  <ViButton label="Button" type="rect" bgColor="var(--primary)" />
                  <ViButton label="Button" type="rect" size="sm" bgColor="var(--primary)" />
                </div>
              </div>
              <div className="inner-box">
                <div className="title">Button - type ( round )</div>
                <div className="cont flex-wrap">
                  <ViButton label="Button" type="round" size="lg" bgColor="var(--primary)" />
                  <ViButton label="Button" type="round" bgColor="var(--primary)" />
                  <ViButton label="Button" type="round" size="sm" bgColor="var(--primary)" />
                </div>
              </div>
              <div className="inner-box">
                <div className="title">Button - type ( outline )</div>
                <div className="cont flex-wrap">
                  <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    {/* <ViButton label="Button" type="rect" outline size="xl" bgColor="var(--pink-opa10)" borderColor="var(--pink)" fontColor="var(--pink)" /> */}
                    <ViButton label="Button" type="rect" outline size="lg" bgColor="var(--secondary-opa10)" borderColor="var(--secondary)" />
                    <ViButton label="Button" type="rect" outline bgColor="var(--teriary-opa10)" borderColor="var(--teriary)" fontColor="var(--teriary)" />
                    <ViButton label="Button" type="rect" outline size="sm" bgColor="var(--text-6-opa10)" borderColor="var(--text-6)" fontColor="var(--text-6)" />
                    {/* <ViButton label="Button" type="rect" outline size="xs" bgColor="var(--yellow-opa10)" borderColor="var(--yellow)" fontColor="var(--yellow)" /> */}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    {/* <ViButton label="Button" type="round" outline size="xl" bgColor="var(--pink-opa10)" borderColor="var(--pink)" fontColor="var(--pink)" /> */}
                    <ViButton label="Button" type="round" outline size="lg" bgColor="var(--secondary-opa10)" borderColor="var(--secondary)" />
                    <ViButton label="Button" type="round" outline bgColor="var(--teriary-opa10)" borderColor="var(--teriary)" fontColor="var(--teriary)" />
                    <ViButton label="Button" type="round" outline size="sm" bgColor="var(--text-6-opa10)" borderColor="var(--text-6)" fontColor="var(--text-6)" />
                    {/* <ViButton label="Button" type="round" outline size="xs" bgColor="var(--yellow-opa10)" borderColor="var(--yellow)" fontColor="var(--yellow)" /> */}
                  </div>
                </div>
              </div>
              <div className="inner-box">
                <div className="title">Button - size</div>
                <div className="cont flex-wrap">
                  <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    {/* <ViButton label="size-xl" size="xl" bgColor="var(--primary)" /> */}
                    <ViButton label="size-lg" type="rect" size="lg" bgColor="var(--primary)" />
                    <ViButton label="size-md" type="rect" bgColor="var(--primary)" />
                    <ViButton label="size-sm" type="rect" size="sm" bgColor="var(--primary)" />
                    {/* <ViButton label="size-xs" size="xs" bgColor="var(--primary)" /> */}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    {/* <ViButton label="size-xl" type="round" size="xl" bgColor="var(--primary)" /> */}
                    <ViButton label="size-lg" type="round" size="lg" bgColor="var(--primary)" />
                    <ViButton label="size-md" type="round" bgColor="var(--primary)" />
                    <ViButton label="size-sm" type="round" size="sm" bgColor="var(--primary)" />
                    {/* <ViButton label="size-xs" type="round" size="xs" bgColor="var(--primary)" /> */}
                  </div>
                </div>
              </div>
              <div className="inner-box">
                <div className="title">Button - icon + text ( iconLeft )</div>
                <div className="cont flex-wrap">
                  <ViButton label="Filter" fontColor="var(--text-2)" padding="0" iconLeft>
                    <ViIcon icon="filter" />
                  </ViButton>
                  <ViButton label="Filter" fontColor="var(--primary)" padding="0" iconLeft>
                    <ViIcon icon="filter" activeIcon />
                  </ViButton>
                </div>
              </div>
              <div className="inner-box">
                <div className="title">Button - icon + text ( iconRight )</div>
                <div className="cont flex-wrap">
                  <ViButton label="Filter" fontColor="var(--text-2)" padding="0" iconRight>
                    <ViIcon icon="filter" />
                  </ViButton>
                  <ViButton label="Filter" fontColor="var(--primary)" padding="0" iconRight>
                    <ViIcon icon="filter" activeIcon />
                  </ViButton>
                </div>
              </div>
              <div className="inner-box">
                <div className="title">Button - icon only</div>
                <div className="cont flex-wrap">
                  <ViButton type="icon">
                    <ViIcon icon="close" />
                  </ViButton>
                  <ViButton type="icon">
                    <ViIcon icon="prev" />
                  </ViButton>
                  <ViButton type="icon">
                    <ViIcon icon="hamburger" />
                  </ViButton>
                  <ViButton type="icon">
                    <ViIcon icon="download" />
                  </ViButton>
                  <ViButton type="icon">
                    <ViIcon icon="filter" />
                  </ViButton>
                </div>
              </div>
              <div className="inner-box">
                <div className="title">Button - icon only ( cover type )</div>
                <div className="cont flex-wrap">
                  <ViButton type="icon" cover bgColor="var(--green-gradation)" width="40px" borderRadius="50%">
                    <ViIcon icon="more" size="lg" />
                  </ViButton>
                  <ViButton type="icon" cover bgColor="var(--primary)" width="40px" borderRadius="50%">
                    <ViIcon icon="more" size="lg" />
                  </ViButton>
                  <ViButton type="icon" cover bgColor="var(--text-2)" width="28px" borderRadius="50%">
                    <ViIcon icon="search" size="xs" />
                  </ViButton>
                  <ViButton type="icon" cover bgColor="var(--bg-90)" width="20px" borderRadius="50%">
                    <ViIcon icon="close" activeIcon size="xs" />
                  </ViButton>
                </div>
              </div>
            </div>
          </div>
          {/* Icons */}
          <div className="guide-dvs" id="Icons">
            <div className="title">Icons</div>
            <div className="guide-set grid-row">
              <div className="inner-box">
                <div className="title">Icons - type</div>
                <div className="cont flex-wrap dim">
                  <ViIcon icon="close" />
                  <ViIcon icon="close" activeIcon />
                  <ViIcon icon="prev" />
                  <ViIcon icon="prev" activeIcon />
                  <ViIcon icon="hamburger" />
                  <ViIcon icon="hamburger" activeIcon />
                  <ViIcon icon="download" />
                  <ViIcon icon="filter" />
                  <ViIcon icon="more" />
                  <ViIcon icon="search" />
                </div>
              </div>
              <div className="inner-box">
                <div className="title">Icons - size</div>
                <div className="cont flex-wrap">
                  <ViIcon icon="hamburger" size="xs" />
                  <ViIcon icon="hamburger" size="md" />
                  <ViIcon icon="hamburger" size="lg" />
                  <ViIcon icon="hamburger" size="xl" />
                </div>
              </div>
            </div>
          </div>
          {/* Chip */}
          <div className="guide-dvs" id="Chip">
            <div className="title">Chip</div>
            <div className="guide-set grid-row">
              <div className="inner-box">
                <div className="title">Chip - type</div>
                <div className="cont flex-wrap">
                  <ViChip label="Chip" />
                  <ViChip label="Chip" bgColor="var(--bg-82)" />
                  <ViChip label="Chip" type="round" />
                  <ViChip label="Chip" bgColor="var(--bg-82)" type="round" />
                </div>
              </div>
              <div className="inner-box">
                <div className="title">Chip - Size</div>
                <div className="cont flex-wrap">
                  <ViChip label="Chip" size="lg" />
                  <ViChip label="Chip" size="md" />
                  <ViChip label="Chip" size="sm" />
                </div>
              </div>
            </div>
          </div>
          {/* Tag */}
          <div className="guide-dvs" id="Tag">
            <div className="title">Tag</div>
            <div className="guide-set grid-row">
              <div className="inner-box">
                <div className="title">Tag - type</div>
                <div className="cont flex-wrap">
                  <ViTag label="Tag" />
                  <ViTag label="Tag" borderColor="var(--secondary)" fontColor="var(--secondary)" />
                </div>
              </div>
              <div className="inner-box">
                <div className="title">Chip - Size</div>
                <div className="cont flex-wrap">
                  <ViTag label="Tag" size="lg" />
                  <ViTag label="Tag" size="md" />
                  <ViTag label="Tag" size="sm" />
                </div>
              </div>
            </div>
          </div>
          {/* checkbox */}
          <div className="guide-dvs" id="Checkbox">
            <div className="title">Checkbox</div>
            <div className="guide-set grid-row">
              <div className="inner-box">
                <div className="title">Checkbox - default</div>
                <div className="cont flex-wrap">
                  <Checkbox onChange={onChange} checked />
                </div>
              </div>
              <div className="inner-box">
                <div className="title">Checkbox - disabled</div>
                <div className="cont flex-wrap">
                  <Checkbox onChange={onChange} checked disabled />
                </div>
              </div>
            </div>
          </div>
          {/* Radio */}
          <div className="guide-dvs" id="Radio">
            <div className="title">Radio</div>
            <div className="guide-set grid-row">
              <div className="inner-box">
                <div className="title">Radio - default</div>
                <div className="cont flex-wrap">
                  <Radio checked />
                </div>
              </div>
              <div className="inner-box">
                <div className="title">Radio - disabled</div>
                <div className="cont flex-wrap">
                  <Radio checked disabled />
                </div>
              </div>
            </div>
          </div>
          {/* Input */}
          <div className="guide-dvs" id="Input">
            <div className="title">Input</div>
            <div className="guide-set grid-row">
              <div className="inner-box">
                <div className="title">Input - type</div>
                <div className="cont flex-wrap">
                  <Input placeholder="input with clear icon" allowClear />
                  <Input showCount maxLength={20} />
                  <Search placeholder="input search text" allowClear />
                  <Input.Password placeholder="input password" />
                </div>
              </div>
              <div className="inner-box">
                <div className="title">Input - textarea</div>
                <div className="cont flex-wrap">
                  <TextArea placeholder="textarea with clear icon" allowClear />
                  <TextArea showCount maxLength={100} placeholder="can resize" />
                  <TextArea showCount maxLength={100} placeholder="disable resize" style={{ height: 120, resize: "none" }} />
                </div>
              </div>
              <div className="inner-box">
                <div className="title">Input - size</div>
                <div className="cont flex-wrap">
                  <Input size="large" placeholder="large size" allowClear />
                  <Input placeholder="default size" allowClear />
                  <Input size="small" placeholder="small size" allowClear />
                </div>
              </div>
            </div>
          </div>
          {/* Tab */}
          <div className="guide-dvs" id="Tab">
            <div className="title">Tab</div>
            <div className="guide-set grid-row">
              <div className="inner-box">
                <div className="title">Tab - basic</div>
                <div className="cont flex-wrap">
                  <Tabs defaultActiveKey="1" items={itemsTab} onChange={onChangeTab} />
                </div>
              </div>
              <div className="inner-box">
                <div className="title">Tab - switch</div>
                <div className="cont flex-wrap">
                  <Tabs defaultActiveKey="1" items={itemsTab2} onChange={onChangeTab2} className="switch-tab" />
                </div>
              </div>
            </div>
          </div>
          {/* ColorPalette */}
          <div className="guide-dvs" id="ColorPalette">
            <div className="title">Color Palette</div>
            <div className="guide-set ">
              <div className="inner-box">
                <div className="title">Color Palette - color</div>
                <div className="cont row row8">
                  {colorPaletteBg.map((color, idx) => {
                    return (
                      <div key={idx}>
                        <button type="button" className="color-chip" style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", textAlign: "center" }} onClick={() => colorCodeCopy(color.var)}>
                          <div className="rec" style={{ width: "40px", aspectRatio: "1/1", borderRadius: "5px", border: "1px solid var(--border-d9)", background: `${color.var}` }}></div>
                          <div className="code" style={{ fontSize: "12px", lineHeight: "1.5", marginTop: "5px" }}>
                            {color.var}
                            <br />
                            {color.code}
                          </div>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="inner-box">
                <div className="title">Color Palette - text</div>
                <div className="cont flex-wrap">
                  {colorPaletteText.map((color, idx) => {
                    return (
                      <div key={idx}>
                        <button type="button" className="color-chip" style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "150px", textAlign: "center" }} onClick={() => colorCodeCopy(color.var)}>
                          <div className="rec" style={{ width: "40px", aspectRatio: "1/1", borderRadius: "5px", border: "1px solid var(--border-d9)", background: `${color.var}` }}></div>
                          <div className="code" style={{ fontSize: "12px", lineHeight: "1.5", marginTop: "5px" }}>
                            {color.var}
                            <br />
                            {color.code}
                          </div>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
