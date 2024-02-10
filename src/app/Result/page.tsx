"use client";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useState } from "react";
function Page() {
  const searchParams = useSearchParams();
  const result = searchParams.get("result");
  console.log(result);
  return (
    <>
      <h1>{result}</h1>
    </>
  );
}
export default function Result() {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Page />
    </Suspense>
  );
}
