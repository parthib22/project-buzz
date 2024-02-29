"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./css/page.modules.css";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { status } = useSession();
  return (
    <>
      <main className="homeMain">
        <section className="imageWrapper"></section>
        <section className="textWrapper">
          <div>
            <h2>alpha</h2>
            <h1> Buzz</h1>
          </div>
          <p>
            Sharpen your mind and embark on a thrilling trivia adventure with
            Buzz! Explore a diverse library of challenging questions, spanning
            every topic imaginable. Test your solo skills, push your limits, and
            see just how much you know. Every answer reveals fascinating facts,
            expanding your knowledge base with each game. No bells, no whistles,
            just pure quizzing satisfaction!
          </p>
          {status === "authenticated" ? (
            <Link href="/category">
              Start Quiz
              <Image
                height={25}
                width={25}
                src="/round_arrow.svg"
                alt="arrow"
              />
            </Link>
          ) : (
            <Link href="/login">
              Register / Sign In
              <Image
                height={25}
                width={25}
                src="/round_arrow.svg"
                alt="arrow"
              />
            </Link>
          )}
        </section>
      </main>
    </>
  );
}
