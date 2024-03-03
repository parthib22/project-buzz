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
                  const { topic, result, _id } = item;
                  return (
                    <li
                      key={_id}
                      className="round"
                      style={{
                        color: "#000",
                        textShadow: "none",
                        backgroundColor: `${
                          result > 70
                            ? "#a1eebd"
                            : result > 40
                            ? "#ffcf96"
                            : "#ff9b9b"
                        }`,
                        border: `2px solid #000`,
                        // ${
                        //   result > 70
                        //     ? "#0d9276"
                        //     : result > 40
                        //     ? "#f57d1f"
                        //     : "#d24545"
                        // }
                      }}
                    >
                      <span
                        className="topic"
                        style={{
                          fontWeight: 500,
                        }}
                      >
                        {topic}
                      </span>
                      <span
                        className="result"
                        style={{
                          fontWeight: 600,
                        }}
                      >
                        {result} <span>%</span>
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
