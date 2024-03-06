import { NextResponse } from "next/server";
import "../css/leaderboard.css";

const AllPlayers = async () => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/user`);
    if (!res.ok) throw new Error("Cannot get players from client.");
    else return res.json();
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
};

const av = (round: []) => {
  var sav = 0;
  if (round.length === 0) return -1;
  round.map((item: any) => (sav += item.result));
  sav /= round.length;
  return Number(sav % 10 > 0 ? sav.toFixed(1) : sav.toFixed(0));
};
const board = (user: any) => {
  const lead: any = [];
  user.map((u: any) => {
    lead.push([u.name, av(u.round)]);
  });
  lead.sort((a: any, b: any) => b[1] - a[1]);

  return lead;
};
export default async function Leaderboard() {
  const { user } = await AllPlayers();
  const lead = board(user);
  console.log(lead);
  return (
    <main className="leadMain">
      <section className="leadWrapper">
        {lead.map((u: any) => (
          <div className="leadContainer" key={u._id}>
            <h1 className="name">{u[0]}</h1>
            <h2 className="score">
              {u[1] < 0 ? "" : u[1]}
              {u[1] < 0 ? <></> : <span>%</span>}
            </h2>
          </div>
        ))}
      </section>
    </main>
  );
}
