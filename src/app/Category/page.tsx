"use client";
import React, { useState } from "react";
import Image from "next/image";
import "../css/category.css";
import Link from "next/link";

function ChoiceContainer() {
  const category = [
    {
      id: 1,
      title: "Movie",
      desc: "",
      img_src: "movie",
    },
    {
      id: 2,
      title: "Food",
      desc: "",
      img_src: "food",
    },
    {
      id: 3,
      title: "Sports",
      desc: "",
      img_src: "sports",
    },
    {
      id: 4,
      title: "Nature",
      desc: "",
      img_src: "nature",
    },
    {
      id: 5,
      title: "Coding",
      desc: "",
      img_src: "coding",
    },
  ];
  return (
    <span className="choiceWrapper">
      {category.map((item, id) => (
        <Link
          key={id}
          href={{ pathname: "/Quiz", query: { title: item.title } }}
        >
          <Image src={`/${item.img_src}.jpg`} height={150} width={150} alt="" />
          <h2
            style={{
              backgroundImage: `url("/${item.img_src}.jpg")`,
              backgroundSize: "cover",
            }}
          >
            {item.title}
          </h2>
        </Link>
      ))}
    </span>
  );
}

export default function Category() {
  return (
    <>
      <main className="choiceMain">
        <h1>Choose</h1>
        <span>-a topic to start the quiz</span>
        <ChoiceContainer />
      </main>
    </>
  );
}
