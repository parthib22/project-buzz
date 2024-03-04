"use client";
import React, { useState } from "react";
import Image from "next/image";
import "../css/category.css";
import Link from "next/link";
import Profile from "../components/Profile";
import { CircularProgress } from "@mui/material";

export default function Category() {
  const category = ["movies", "food", "sports", "nature", "coding", "random"];
  const [cat, setCat] = useState([false, false, false, false, false, false]);
  return (
    <>
      <main className="choiceMain">
        <Profile />
        <section className="choiceWrapper">
          <div>
            <div>
              <Link href="/" className="backBtn">
                <Image
                  src={"/round_arrow.svg"}
                  height={30}
                  width={30}
                  alt="back"
                />
              </Link>
              <h1>Choose</h1>
            </div>
            <p>a topic to start the quiz</p>
          </div>
          <span className="categoryWrapper">
            {category.map((item, id) => (
              <Link
                key={id}
                href={{ pathname: "/quiz", query: { topic: item } }}
                onClick={() =>
                  setCat((prev) => {
                    const newCat = [...prev];
                    newCat[id] = true;
                    return newCat;
                  })
                }
              >
                {item}
                {cat[id] && (
                  <CircularProgress
                    color="inherit"
                    style={{ color: "#000", height: 15, width: 15 }}
                  />
                )}
              </Link>
            ))}
          </span>
          {/* <span className="customWrapper">
            <p>or</p>
            <button>
              {"< "}create your own{" />"}
            </button>
          </span> */}
        </section>
        <p id="p">soon you will be able to create your own questionaire...</p>
      </main>
    </>
  );
}
