"use client";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useState } from "react";
import "../css/quiz.css";
import Link from "next/link";
function Page() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const data = require(`../question_bank/${title?.toLowerCase()}_bank.js`);
  return (
    <>
      <main className="quizMain">
        <section>
          <h1>{title}</h1>
          <QuizComponent data={data} />
        </section>
      </main>
    </>
  );
}
function QuizComponent(props: any) {
  const { data } = props;
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
      <p>{`${index + 1} / ${data.length}`}</p>
      <h2>{data[index].question}</h2>
      <div>
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
      {/* <p>{}</p> */}
      <span
        onClick={() => {
          handleClick(index);
          console.log(result);
        }}
      >
        <button onClick={() => index > 0 && setIndex((prev) => prev - 1)}>
          {index == 0 ? (
            <Link href="/Category">Change Topic</Link>
          ) : (
            <>Previous Question</>
          )}
        </button>
        <button
          onClick={() =>
            index < data.length - 1 && setIndex((prev) => prev + 1)
          }
        >
          {index == data.length - 1 ? (
            <Link
              href={{
                pathname: "/Result",
                query: { result: resultCount },
              }}
            >
              Show Result
            </Link>
          ) : (
            <>Next Question</>
          )}
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
