"use client";

import { Button, ListGroup } from "flowbite-react";
import { useAtom } from "jotai";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Bar, BarChart, XAxis } from "recharts";
import { findAllPoll } from "../api/poll_server";

export default function Page() {
  const [pollList, setPollList] = useState<object[]>([]);

  useEffect(() => {
    async function reloadPollList() {
      const result = await findAllPoll();
      if(result.data != "false") {
        setPollList(result.data);
      } else {
        setPollList([{"pollName": "No Poll"}]);
      }
    }
    reloadPollList();
  }, [])

  return (
    <div className="grid grid-rows-3 text-center">
      {/* recharts */}
      {/* <BarChart className="" width={1080} height={360} data={data} barSize={60}>
        <Bar dataKey="countValue" fill="#0AE" label={{ position: "center" }}/>
        <XAxis dataKey="name" axisLine={false} tickLine={false} />
      </BarChart> */}
      <div className="grid grid-cols-1 w-full self-center">
        <h1 className="text-6xl">
          <Link href="#">투표 목록</Link>
        </h1>
      </div>
      <div className="grid grid-cols-1 w-full h-32 overflow-auto self-center">
        {/* <h3 className="text-4xl hover:font-bold hover:bg-slate-300">
          <Link href="#">투표 1</Link>
        </h3> */}
        {
          pollList.map((item: any, index) => (
            <h3 key={index} className="text-4xl hover:font-bold hover:bg-slate-300">
              <Link href="#">{item.pollName}</Link>
            </h3>
          ))
          ||
          <h3 className="text-4xl">No Poll</h3>
        }
      </div>
      <div className="grid grid-cols-1 w-full self-center">
        <h5 className="text-2xl hover:font-bold hover:bg-slate-300">
          <Link href="/poll/createpoll">새 투표 생성</Link>
        </h5>
      </div>
    </div>
  );
}
