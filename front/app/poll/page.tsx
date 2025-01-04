"use client";

import { Button, ListGroup } from "flowbite-react";
import { useAtom } from "jotai";
import Image from "next/image";
import Link from "next/link";
import { Bar, BarChart, XAxis } from "recharts";
import { pollResultAtom } from "@/app/store/pollingAtom";

export default function Page() {
  // const [ data, setData ] = useAtom(pollResultAtom);

  return (
    <div className="grid grid-rows-4 text-center items-baseline">
      {/* recharts */}
      {/* <BarChart className="" width={1080} height={360} data={data} barSize={60}>
        <Bar dataKey="countValue" fill="#0AE" label={{ position: "center" }}/>
        <XAxis dataKey="name" axisLine={false} tickLine={false} />
      </BarChart> */}    
      <div className="grid grid-cols-1 w-full p-5">
        <h1 className="text-6xl">
          <Link href="#">투표 목록</Link>
        </h1>
      </div>
      <div className="grid grid-cols-1 w-full p-5">
        <h3 className="text-4xl hover:font-bold hover:bg-slate-300">
          <Link href="#">투표 1</Link>
        </h3>
      </div>
      <div className="grid grid-cols-1 w-full p-5">
        <h5 className="text-2xl hover:font-bold hover:bg-slate-300">
          <Link href="/poll/createpoll">새 투표 생성</Link>
        </h5>
      </div>
    </div>
  );
}
