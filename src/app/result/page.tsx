"use client";
import Link from "next/link";
import "../css/result.css";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";
import AES from "crypto-js/aes";
import Utf8 from "crypto-js/enc-utf8";
function Page() {
  const searchParams = useSearchParams();
  const [id, topic]: any = searchParams.values();
  // console.log(result);

  const decryptValue = (stringValue: string) => {
    const value = Number(
      AES.decrypt(stringValue, process.env.ENCRYPTION_KEY || "").toString(Utf8)
    );
    return value % 10 > 0 ? value.toFixed(1) : value.toFixed(0);
  };

  const content =
    Number(decryptValue(id)) > 50
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
          href: { pathname: "/quiz", query: { topic: topic } },
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
              {decryptValue(id)}
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
    <Suspense fallback={<div className="loaderContainer"></div>}>
      <Page />
    </Suspense>
  );
}
