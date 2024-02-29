"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

export default function Profile() {
  const [card, setCard] = useState(true);
  const { status, data: session } = useSession();
  //   console.log(session);
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
          <p>{session?.user?.email}</p>
          <button
            onClick={() =>
              signOut({ callbackUrl: `${window.location.origin}` })
            }
            id="signout"
          >
            Sign Out
          </button>
        </div>
      </>
    );
  //   else
  //     return (
  //       <>
  //         <div className="profileContainer unprofile">
  //           <div className="dpWrapper">
  //             <Image
  //               src={`https://art.pixilart.com/e2e8c97c55ab35d.png`}
  //               height={50}
  //               width={50}
  //               alt="profile picture"
  //             />
  //           </div>
  //           <button
  //             onClick={() =>
  //               signIn("google", {
  //                 callbackUrl: `${window.location.origin}`,
  //               })
  //             }
  //             id="signin"
  //           >
  //             Sign In
  //           </button>
  //         </div>
  //       </>
  //     );
}
