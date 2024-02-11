"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import "./css/page.modules.css";

export default function Home() {
  return (
    <>
      <main className="homeMain">
        <section className="imageWrapper"></section>
        <section className="textWrapper">
          <div>
            <h2>Project</h2>
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
          <Link href="/category">
            <Image
              height={200}
              width={100}
              src="/right_arrow.svg"
              alt="arrow"
            />
          </Link>
        </section>
      </main>
    </>
  );
}
