"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    redirect("/cahiers-de-transmission");
  }, []);
  return (
    <>
      <h1>Hello World</h1>
    </>
  );
}
