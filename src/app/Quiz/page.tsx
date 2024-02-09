"use client";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useState } from "react";
function Page() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const data = require(`../question_bank/${title?.toLowerCase()}_bank.js`);
  const [topic, setTopic] = useState(data);
  console.log(data);
  return (
    <>
      <h1>{title}</h1>
    </>
  );
}
export default function Quiz() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Page />
    </Suspense>
  );
}
