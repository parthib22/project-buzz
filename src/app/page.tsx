"use client";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense, useState } from "react";
import "./css/page.modules.css";
import { useSession } from "next-auth/react";
import Profile from "./components/Profile";
import Loading from "./components/Loading";
import { CircularProgress } from "@mui/material";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const { status } = useSession();
  return (
    <Suspense fallback={<Loading />}>
      <main className="homeMain" style={{ position: "relative" }}>
        <Profile />
        <section className="imageWrapper"></section>
        <section className="textWrapper">
          <div>
            <h2>beta 3</h2>
            <h1>Buzz</h1>
          </div>
          <p>
            A no-nonsense quiz app. Keeping it easy and stressless. Dont worry,
            there are no time limits and lame powerups or lifelines. Custom
            questionaire is still under development. More stuff are coming
            soon...
          </p>

          <Link
            href={`${status === "authenticated" ? "/category" : "/auth"}`}
            onClick={() => setLoading(true)}
          >
            {status === "authenticated" ? "Start Quiz" : "Register"}
            {loading ? (
              <CircularProgress
                color="inherit"
                style={{ color: "#000", height: 25, width: 25 }}
              />
            ) : (
              <Image
                height={25}
                width={25}
                src="/round_arrow.svg"
                alt="arrow"
              />
            )}
          </Link>
        </section>
      </main>
    </Suspense>
  );
}
