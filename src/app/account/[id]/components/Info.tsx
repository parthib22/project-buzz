"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Loading from "@/app/components/Loading";
import { Suspense } from "react";

export default function Info() {
  const router = useRouter();
  const { status, data: session } = useSession();
  const handleDelete = async () => {
    if (
      confirm(
        "This will delete your account and all of it's data. This change is irreversible!\n\nAre you sure to continue?"
      ) == false
    )
      return;
    else {
      try {
        const res = await fetch(`/api/user/${session?.user?.email}`, {
          method: "DELETE",
        });
        if (!res.ok) throw new Error("Cannot delete user from client.");
        await signOut({
          callbackUrl: `${window.location.origin}/auth`,
        });
        alert(
          "Your account is deleted!\nBut you can join back anytime you want.\n\nClick (OK) to proceed."
        );
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <Suspense fallback={<Loading />}>
      {status === "authenticated" && (
        <section className="infoWrapper">
          <button onClick={() => router.back()} className="backBtn">
            <Image src={"/round_arrow.svg"} height={30} width={30} alt="back" />
          </button>
          <div className="ppWrapper">
            <Image
              src={`${session?.user?.image}`}
              height={96}
              width={96}
              alt="profile picture"
            />
          </div>
          <h1>{session?.user?.name}</h1>
          <p>{session?.user?.email}</p>
          {/* <div>Personal Best</div> */}
          {/* <div>Topic</div> */}
          <span>
            <button
              onClick={() =>
                signOut({
                  callbackUrl: `${window.location.origin}/auth`,
                })
              }
              className="signBtn"
            >
              Sign out
            </button>
            |
            <button onClick={handleDelete} className="delBtn">
              Delete account
            </button>
          </span>
        </section>
      )}
    </Suspense>
  );
}
