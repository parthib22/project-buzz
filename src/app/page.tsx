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
            <h2>beta</h2>
            <h1>Trove</h1>
          </div>
          <p>
            Sharpen your mind and embark on a thrilling trivia adventure with
            Buzz! Explore a diverse library of challenging questions, spanning
            every topic imaginable. Test your solo skills, push your limits, and
            see just how much you know. Every answer reveals fascinating facts,
            expanding your knowledge base with each game. No bells, no whistles,
            just pure quizzing satisfaction!
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
