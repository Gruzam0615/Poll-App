import { Button } from "flowbite-react";
import { useAtom } from "jotai";
import Image from "next/image";
import Link from "next/link";
import { Bar, BarChart, XAxis } from "recharts";
import { pollResultAtom } from "./store/pollingAtom";

export default function Home() {

  return (
    <div className="grid grid-rows-4 text-center items-baseline">
      <div className="grid grid-cols-1 w-full p-5">
        <h1 className="text-6xl">
          <Link href="#">앱 메인</Link>
        </h1>
      </div>
      <div className="grid grid-cols-1 w-full p-5">
        <h3 className="text-4xl hover:font-bold hover:bg-slate-300">
          <Link href="/poll">투표</Link>
        </h3>
      </div>
    </div>
  );
}
