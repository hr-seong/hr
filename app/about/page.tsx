"use client";

import Image from "next/image";
import txtImg1 from "../../public/images/bg/bg_about_txt1.png";
import txtImg2 from "../../public/images/bg/bg_about_txt2.png";
import txtImg3 from "../../public/images/bg/bg_about_txt3.png";

export default function About() {
  return (
    <div className="layout-content about">
      <div className="section sec1">
        <div className="content">
          <div className="txt">
            오르막길은{" "}
            <div className="image">
              <Image src={txtImg1} alt="" />
            </div>
            <br />
            시장과 사용자, 파트너의 접점을 <br />
            <div className="image">
              <Image src={txtImg2} alt="" />
            </div>{" "}
            감각과 경험의 가치가 <br />
            확장되는 관점에서 비즈니스를 <br />
            성장시키고{" "}
            <div className="image">
              <Image src={txtImg3} alt="" />
            </div>{" "}
            있습니다.
          </div>
        </div>
      </div>
      <div className="section sec2">
        <div className="content">
          <div className="txt">
            디지털 패러다임의 변동성에서도, <br />
            우리가 지속적으로 성장할 수 <br />
            있었던 것은 오르막길의 지향점이 <br />
            파트너와 시장의 공감을 얻었기 <br />
            때문입니다.
          </div>
          <div className="cmt">
            오르막길에 올라서는 과정, <br />
            오르막길의 끝에서 바라보는 시선을 생각합니다.
            <br />
            <br />
            오르막길(Ormakgil)은 <br />
            기업의 프로젝트와 서비스를 제작하는 전문기업을 넘어 <br />
            시장과 사용자, 파트너의 접점을 <br />
            '공감의 경험'으로 이끌어가고자 합니다.
          </div>
        </div>
      </div>
      {/* <div className="section sec3">
        <div className="content"></div>
      </div> */}
    </div>
  );
}
