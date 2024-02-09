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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
            voluptatum omnis doloribus obcaecati beatae illum qui pariatur
            explicabo, consectetur exercitationem tempora commodi id laboriosam
            voluptatibus dolores ad fugiat iste deleniti architecto blanditiis
            quas tenetur est.
          </p>
          <Link href="/Category">
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
