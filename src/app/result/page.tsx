"use client";
import Link from "next/link";
import "../css/result.css";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import CryptoJS from "crypto-js";
import Profile from "../components/Profile";
import Loading from "../components/Loading";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { CircularProgress } from "@mui/material";

function Page() {
  const searchParams = useSearchParams();
  const [id]: any = searchParams.values();
  const [loading, setLoading] = useState(false);

  const cryptoDecrypt = () =>
    JSON.parse(
      CryptoJS.AES.decrypt(id, "secret key 123").toString(CryptoJS.enc.Utf8)
    );
  const { topic, result } = cryptoDecrypt();
  console.log(topic, result);

  const content =
    Number(result) > 50
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

  const { status, data: session } = useSession();
  const emailID = CryptoJS.AES.encrypt(
    `${session?.user?.email}`,
    "email"
  ).toString();

  return (
    <>
      <Suspense fallback={<Loading />}>
        <main className="resultMain">
          <Profile />
          <section className="resultWrapper">
            <h1>{content.heading}</h1>
            <div>
              <p>Topic</p>
              <h2>{topic}</h2>
            </div>
            <div className="scoreWrapper">
              <p>You have scored</p>
              <h2>
                {result}
                <p>{" %"}</p>
              </h2>
            </div>
            <p>{content.text}</p>
            <span className="linkWrapper">
              <Link href={content.href}>
                <Image
                  src={"/round_arrow.svg"}
                  height={20}
                  width={20}
                  alt="back"
                  style={{ rotate: "180deg" }}
                />
                {content.action}
              </Link>
              |
              <Link
                href={`/account/${encodeURIComponent(emailID)}`}
                onClick={() => setLoading(true)}
              >
                View Profile
                {loading ? (
                  <CircularProgress
                    color="inherit"
                    style={{ color: "#000", height: 20, width: 20 }}
                  />
                ) : (
                  <Image
                    src={"/round_profile.svg"}
                    height={20}
                    width={20}
                    alt="back"
                  />
                )}
              </Link>
            </span>
          </section>
        </main>
      </Suspense>
    </>
  );
}
export default function Result() {
  return (
    <Suspense fallback={<Loading />}>
      <Page />
    </Suspense>
  );
}
