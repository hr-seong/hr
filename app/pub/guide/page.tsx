"use client";

import Link from "next/link";

export default function Guide() {
  return (
    <>
      <div id="container" className="guide-wrap">
        <div className="guide-title-set">
          <div className="guide-title">Ormakgil guide list</div>
          <Link href="/pub/styleGuide" target="_blank" className="guide-txt">
            Components guide
          </Link>
        </div>
        <table className="guide-table">
          <colgroup>
            <col style={{ width: "180px" }} />
            <col style={{ width: "180px" }} />
            <col style={{ width: "180px" }} />
            <col style={{ width: "180px" }} />
            <col />
            <col style={{ width: "100px" }} />
            <col style={{ width: "100px" }} />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th>1 Depth</th>
              <th>2 Depth</th>
              <th>3 Depth</th>
              <th>4 Depth</th>
              <th>URL</th>
              <th>상태</th>
              <th>수정일</th>
              <th>비고</th>
            </tr>
          </thead>
          <tbody>
            {/* MAIN */}
            <tr className="line">
              <td rowSpan={1}>MAIN</td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <Link href="/main" target="_blank">
                  /main
                </Link>
              </td>
              <td className="ac">
                <span className="ing"></span>
              </td>
              <td className="ac"></td>
              <td></td>
            </tr>
            <tr className="line">
              <td rowSpan={1}>about</td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <Link href="/about" target="_blank">
                  /about
                </Link>
              </td>
              <td className="ac">
                <span className="yet"></span>
              </td>
              <td className="ac"></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
