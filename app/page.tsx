// "use client";
// import { useRouter } from "next/navigation";

import { redirect } from "next/navigation";

export default function Index() {
  // const router = useRouter();

  // const navigateToPurchase = () => {
  //   router.push("/main");
  // };

  // return (
  //   <>
  //     <div id="header">sadas</div>
  //     <div id="container">
  //       <button type="button" onClick={navigateToPurchase}>
  //         Main
  //       </button>
  //     </div>
  //   </>
  // );

  redirect("/pub/guide");
}
