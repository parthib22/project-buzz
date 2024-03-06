"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import "../css/auth.css";
import Image from "next/image";
import { Suspense, useState } from "react";
import Loading from "../components/Loading";
import Link from "next/link";
import { CircularProgress } from "@mui/material";

export default function Login() {
  const { status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [close, setClose] = useState(false);
  if (status === "authenticated") router.push("/category");
  else
    return (
      <Suspense fallback={<Loading />}>
        <main className="authMain">
          <span>
            <Link href={"/"}>
              <Image
                src={"/round_arrow.svg"}
                height={30}
                width={30}
                alt="back"
                style={{ rotate: "180deg" }}
              />
            </Link>
            <h1>
              Register
              <p>or Sign in to start...</p>
            </h1>
          </span>
          <button
            onClick={() => {
              signIn("google", {
                callbackUrl: `${window.location.origin}/category`,
              });
              setLoading(true);
            }}
          >
            Continue with
            <Image
              src={"/google-icon.svg"}
              height={20}
              width={20}
              alt="google"
            />
          </button>
          {loading && (
            <CircularProgress
              color="inherit"
              style={{
                color: "#000",
                height: 25,
                width: 25,
                margin: 30,
                position: "absolute",
                bottom: 50,
              }}
            />
          )}
          <p className={`p ${close && "go-up"}`}>
            <Image
              src={"/close_icon.svg"}
              height={15}
              width={15}
              alt="close"
              onClick={() => setClose(true)}
            />
            more login options coming soon...
          </p>
        </main>
      </Suspense>
    );
}
