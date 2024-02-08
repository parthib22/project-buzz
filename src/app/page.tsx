"use client";
import Image from "next/image";
import React, { useState } from "react";
export default function Home() {
  const [data, setData] = useState<object>(require("./question_bank.js"));
  console.log(data);
  return (
    <>
      <main>
        <section>
          <Image
            src={
              "https://images.unsplash.com/photo-1706905615690-91782b2d5491?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            height={500}
            width={387}
            alt="image"
          />
        </section>
        <section>
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
          <button>Start here</button>
        </section>
      </main>
    </>
  );
}
