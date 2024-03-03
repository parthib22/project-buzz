"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CryptoJS from "crypto-js";
import { useRouter } from "next/navigation";
import { CircularProgress } from "@mui/material";

export default function Profile() {
  const router = useRouter();
  const [card, setCard] = useState(true);
  const [loading, setLoading] = useState(false);
  const { status, data: session } = useSession();
  const emailID = CryptoJS.AES.encrypt(
    `${session?.user?.email}`,
    "email"
  ).toString();

  if (status === "authenticated")
    return (
      <>
        <div className="dpWrapper" onClick={() => setCard(!card)}>
          <Image
            src={`${session?.user?.image}`}
            height={50}
            width={50}
            alt="profile picture"
          />
        </div>
        <div className={`profileContainer ${card && "profile"}`}>
          <h1>{session?.user?.name}</h1>
          <Link
            id="account"
            href={`/account/${encodeURIComponent(emailID)}`}
            onClick={() => setLoading(true)}
          >
            {loading && (
              <CircularProgress
                color="inherit"
                style={{ color: "red", height: 8, width: 8, marginRight: 10 }}
              />
            )}
            Account & Settings
          </Link>
        </div>
      </>
    );
}
