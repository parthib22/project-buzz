"use client";
import { useSearchParams, useRouter } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import "../css/quiz.css";
import Link from "next/link";
import Image from "next/image";
import CryptoJS from "crypto-js";
import { useSession } from "next-auth/react";
import Profile from "../components/Profile";
import Loading from "../components/Loading";
import { CircularProgress } from "@mui/material";

const PostResult = async (
  status: string,
  email: string,
  topic: string,
  result: number
) => {
  if (status === "authenticated") {
    try {
      const res = await fetch("/api/user", {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email,
          topic,
          result,
        }),
      });
      if (!res.ok) throw new Error("Failed to PUT.");
      console.log("Done!!!!");
    } catch (error) {
      console.error("Error sending result from client: ", error);
    }
  }
};

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
      <Suspense fallback={<Loading />}>
        <main className="quizMain">
          <Profile />
          <section className="quizWrapper">
            <QuizComponent topic={topic} data={dataRandomize(topic)} />
          </section>
        </main>
      </Suspense>
    </>
  );
}
function QuizComponent(props: any) {
  const { topic, data } = props;
  const [index, setIndex] = useState(0);
  const [result, setResult] = useState(Array(data.length).fill(false));
  const [checkCorrect, setCheckCorrect] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);

  const handleClick = (index: any) => {
    setResult((prev) => ({ ...prev, [index]: checkCorrect }));
  };
  const resultCount = Object.values(result).filter((x) => x === true).length;
  const perResult = (value: number) => {
    const pValue = (value * 100) / data.length;
    const stringValue = pValue % 10 > 0 ? pValue.toFixed(1) : pValue.toFixed(0);
    return Number(stringValue);
  };
  const cryptoEncrypt = (topic: string, result: number) =>
    CryptoJS.AES.encrypt(
      JSON.stringify({ topic, result }),
      "secret key 123"
    ).toString();
  //auth check
  const { status, data: session } = useSession();
  const email = session?.user?.email || "";

  return (
    <>
      <Suspense fallback={<Loading />}>
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
        <span className="navBtnWrapper" onClick={() => handleClick(index)}>
          <button onClick={() => index > 0 && setIndex((prev) => prev - 1)}>
            {index == 0 ? (
              <Link href="/category">
                <>
                  {loading ? (
                    <CircularProgress
                      color="inherit"
                      style={{ color: "#000", height: 20, width: 20 }}
                    />
                  ) : (
                    <Image
                      src="/round_arrow.svg"
                      height={50}
                      width={50}
                      alt="arrow"
                    />
                  )}
                  Change Topic
                </>
              </Link>
            ) : (
              <>
                <Image
                  src="/round_arrow.svg"
                  height={50}
                  width={50}
                  alt="arrow"
                />
                <span>Previous</span>
              </>
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
                  pathname: `/result`,
                  query: {
                    id: cryptoEncrypt(topic, perResult(resultCount)),
                  },
                }}
                onClick={() => {
                  !loading &&
                    PostResult(status, email, topic, perResult(resultCount));
                  setLoading(true);
                }}
              >
                <>
                  Show Result
                  {loading ? (
                    <CircularProgress
                      color="inherit"
                      style={{ color: "#000", height: 20, width: 20 }}
                    />
                  ) : (
                    <Image
                      src="/round_arrow.svg"
                      height={50}
                      width={50}
                      alt="arrow"
                    />
                  )}
                </>
              </Link>
            ) : (
              <>
                <span>Next</span>
                <Image
                  src="/round_arrow.svg"
                  height={50}
                  width={50}
                  alt="arrow"
                />
              </>
            )}
          </button>
        </span>
      </Suspense>
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
    <Suspense fallback={<Loading />}>
      <Page />
    </Suspense>
  );
}
