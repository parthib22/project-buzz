"use client";
import Link from "next/link";
import "../css/result.css";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";
function Page() {
  const searchParams = useSearchParams();
  const [result, full, topic]: any = searchParams.values();
  // console.log(result);

  const score =
    (result * 100) % full > 0
      ? Number((result * 100) / full).toFixed(1)
      : Number((result * 100) / full).toFixed(0);

  const content =
    Number(score) > 50
      ? {
          heading: "Well done. Congrats!",
          text: "Keep up the amazing work and see what challenges await you next.",
          action: "play another",
          href: { pathname: "/category" },
        }
      : {
          heading: "Practice makes perfect!",
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
              <p>{" %"}</p>
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
