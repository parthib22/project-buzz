"use client";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useState } from "react";
import "../css/quiz.css";
import Link from "next/link";
import Image from "next/image";
function Page() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const data = require(`../question_bank/${title?.toLowerCase()}_bank.js`);
  return (
    <>
      <main className="quizMain">
        <section className="quizWrapper">
          <QuizComponent title={title} data={data} />
        </section>
      </main>
    </>
  );
}
function QuizComponent(props: any) {
  const { title, data } = props;
  console.log(data);
  const [index, setIndex] = useState(0);
  const [result, setResult] = useState(Array(data.length).fill(false));
  const [checkCorrect, setCheckCorrect] = useState<boolean>(false);
  const handleClick = (index: any) => {
    setResult((prev) => ({ ...prev, [index]: checkCorrect }));
  };
  console.log(typeof result);
  const resultCount = Object.values(result).filter((x) => x === true).length;
  console.log(resultCount);
  return (
    <>
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        <p>{`${index + 1} of ${data.length}`}</p>
        <h2>{data[index].question}</h2>
        <div className="optionWrapper">
          {data[index].options.map((option: any, id: any) => (
            <button
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
          console.log(result);
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
                query: { result: resultCount, full: data.length, topic: title },
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
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Page />
    </Suspense>
  );
}
