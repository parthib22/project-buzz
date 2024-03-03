import "../../css/account.css";
import Info from "./components/Info";
import CryptoJS from "crypto-js";
import { Suspense } from "react";
import Loading from "@/app/components/Loading";

const attemptData = async (id: string) => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/user/${id}`, {
      method: "GET",
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to GET data from client");
    const { user } = await res.json();
    return user.round;
  } catch (error) {
    console.error(error);
  }
};

export default async function Account({ params }: any) {
  const { id } = await params;
  const emailID = CryptoJS.AES.decrypt(
    decodeURIComponent(id),
    "email"
  ).toString(CryptoJS.enc.Utf8);
  const round = await attemptData(emailID);

  const handleDate = (date: Date) => {
    const hZ = (n: number) => `${n < 10 ? "0" : ""}${n}`;
    const MM_str = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const date_ob = new Date(date);
    const DD = hZ(date_ob.getDate());
    const MM = MM_str[date_ob.getMonth()];
    const YYYY = date_ob.getFullYear();
    const H = hZ(date_ob.getHours());
    const M = hZ(date_ob.getMinutes());

    return `${DD} ${MM} ${YYYY} | ${H}:${M}`;
  };

  return (
    <Suspense fallback={<Loading />}>
      <main className="accMain">
        <Info />
        <section className="attemptWrapper">
          <h1>Your attempts</h1>
          <div>
            {round?.length == 0 ? (
              <p style={{ color: "#333", fontSize: 10, margin: "auto" }}>
                You are a new player! Start with a quiz now...
              </p>
            ) : (
              <ul className="roundWrapper">
                {round?.map((item: any) => {
                  const { topic, result, _id, date, answer } = item;
                  return (
                    <li
                      key={_id}
                      className="round"
                      style={{
                        color: "#000",
                        textShadow: "none",
                        background: `${
                          result > 60
                            ? "#a1eebd"
                            : result > 40
                            ? "#ffcf96"
                            : "#ff9b9b"
                        }`,
                        border: `2px solid #000`,
                      }}
                    >
                      <div>
                        <span className="topic">{topic}</span>
                        <p>{handleDate(date)}</p>
                      </div>
                      <div className="answer">
                        {answer.map((item: boolean, id: number) => (
                          <div key={id} className={`${item ? "👍" : "👎"}`} />
                        ))}
                      </div>
                      <span
                        className="result"
                        style={{
                          color: `${
                            result > 60
                              ? "#0d9276"
                              : result > 40
                              ? "#f57d1f"
                              : "#d24545"
                          }`,
                        }}
                      >
                        {result}
                        <span>%</span>
                      </span>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </section>
      </main>
    </Suspense>
  );
}
