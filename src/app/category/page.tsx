"use client";
import React, { useState } from "react";
import Image from "next/image";
import "../css/category.css";
import Link from "next/link";

export default function Category() {
  const category = ["movies", "food", "sports", "nature", "coding", "random"];

  return (
    <>
      <main className="choiceMain">
        <section className="choiceWrapper">
          <Link href="/" className="backBtn">
            <Image src={"/round_arrow.svg"} height={30} width={30} alt="back" />
          </Link>
          <div>
            <h1>Choose</h1>
            <span>-a topic to start the quiz</span>
          </div>
          <span className="categoryWrapper">
            {category.map((item, id) => (
              <Link
                key={id}
                href={{ pathname: "/quiz", query: { topic: item } }}
              >
                {item}
                {/* <Image src={`/${item}.jpg`} height={200} width={200} alt="" />
                <h2
                  style={{
                    backgroundImage: `url("/${item}.jpg")`,
                    backgroundSize: "cover",
                  }}
                ></h2> */}
              </Link>
            ))}
          </span>
        </section>
      </main>
    </>
  );
}
