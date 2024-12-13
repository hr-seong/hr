"use client";
import { useRouter } from "next/navigation";

export default function Sub1() {
  const router = useRouter();

  const navigateToPurchase = () => {
    router.push("/sub1");
  };

  return (
    <div>
      <h2>Sub1</h2>
      <button type="button" onClick={navigateToPurchase}>
        main
      </button>
    </div>
  );
}
