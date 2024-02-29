"use client";
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <>
      <button
        onClick={() =>
          signIn("google", {
            callbackUrl: `${window.location.origin}/category`,
          })
        }
      >
        Sign in with Google
      </button>
    </>
  );
}
