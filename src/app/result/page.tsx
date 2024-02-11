"use client";
import Link from "next/link";
import Image from "next/image";
import "../css/result.css";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useState } from "react";
function Page() {
  const searchParams = useSearchParams();
  // const result = searchParams.get("result");
  // const full_marks = searchParams.get("full");
  const [result, full, topic]: any = searchParams.values();
  console.log(result);
  const score = Number((result * 100) / full).toFixed(1);
  const content =
    Number(score) > 50
      ? {
          heading: "You smashed it!",
          text: "Keep up the amazing work and see what challenges await you next.",
          action: "play another",
          href: { pathname: "/category" },
        }
      : {
          heading: "Not quite there yet...",
          text: "Don't worry, everyone stumbles sometimes! Give it another shot.",
          action: "try again",
          href: { pathname: "/quiz", query: { title: topic } },
        };
  return (
    <>
      <main className="resultMain">
        <section className="resultWrapper">
          <h1>{content.heading}</h1>
          <div>
            <p>Topic</p>
            <h2>{topic}</h2>
          </div>
          <div className="scoreWrapper">
            <p>You have scored</p>
            <h2>
              {score}
              <p style={{ display: "inline", fontSize: 24 }}>{" %"}</p>
            </h2>
          </div>
          <p>{content.text}</p>
          <span className="linkWrapper">
            <Link href="/">Go to home</Link>|
            <Link href={content.href}>{content.action}</Link>
          </span>
        </section>
      </main>
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
