"use client";
import { useSearchParams, useRouter } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import "../css/quiz.css";
import Link from "next/link";
import Image from "next/image";
import AES from "crypto-js/aes";

// data randomizer
const dataRandomize = (topic: string) => {
  const data = require(`../question_bank/${topic?.toLowerCase()}_bank.js`);
  for (let i = data.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [data[i], data[j]] = [data[j], data[i]];
  }
  return data;
};
function Page() {
  const searchParams = useSearchParams();
  const topic = searchParams.get("topic") || "";
  return (
    <>
      <main className="quizMain">
        <section className="quizWrapper">
          <QuizComponent topic={topic} data={dataRandomize(topic)} />
        </section>
      </main>
    </>
  );
}
function QuizComponent(props: any) {
  const { topic, data } = props;
  // console.log(data);
  const [index, setIndex] = useState(0);
  const [result, setResult] = useState(Array(data.length).fill(false));
  const [checkCorrect, setCheckCorrect] = useState<boolean>(false);
  const handleClick = (index: any) => {
    setResult((prev) => ({ ...prev, [index]: checkCorrect }));
  };
  // console.log(typeof result);
  const resultCount = Object.values(result).filter((x) => x === true).length;
  // console.log(resultCount);
  const encryptResult = (value: number) => {
    const stringValue = JSON.stringify((value * 100) / data.length);
    return AES.encrypt(
      stringValue,
      process.env.ENCRYPTION_KEY || ""
    ).toString();
  };
  return (
    <>
      <div className="backWrapper">
        <Link href="/category" className="backBtn">
          <Image src={"/round_arrow.svg"} height={30} width={30} alt="back" />
        </Link>
        <h1>{topic}</h1>
      </div>
      <div>
        <p>{`${index + 1} of ${data.length}`}</p>
        <h2 suppressHydrationWarning>{data[index].question}</h2>
        <div className="optionWrapper">
          {data[index].options.map((option: any, id: any) => (
            <button
              suppressHydrationWarning
              onClick={(e) =>
                option == data[index].correct
                  ? setCheckCorrect(true)
                  : setCheckCorrect(false)
              }
              key={id}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      <span
        className="navBtnWrapper"
        onClick={() => {
          handleClick(index);
          // console.log(result);
        }}
      >
        <button onClick={() => index > 0 && setIndex((prev) => prev - 1)}>
          <Image src="/round_arrow.svg" height={50} width={50} alt="arrow" />
          {index == 0 ? (
            <Link href="/category">Change Topic</Link>
          ) : (
            <span>Previous</span>
          )}
        </button>
        |
        <button
          onClick={() =>
            index < data.length - 1 && setIndex((prev) => prev + 1)
          }
        >
          {index == data.length - 1 ? (
            <Link
              href={{
                pathname: "/result",
                query: {
                  id: encryptResult(resultCount),
                  // full: data.length,
                  topic: topic,
                },
              }}
            >
              Show Result
            </Link>
          ) : (
            <span>Next</span>
          )}
          <Image src="/round_arrow.svg" height={50} width={50} alt="arrow" />
        </button>
      </span>
    </>
  );
}
export default function Quiz() {
  const router = useRouter();

  useEffect(() => {
    const handleBeforeUnload = (e: any) => {
      // Cancel the event
      e.preventDefault();
      // Chrome requires returnValue to be set
      e.returnValue = true;
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
  return (
    <Suspense fallback={<div className="loaderContainer"></div>}>
      <Page />
    </Suspense>
  );
}
