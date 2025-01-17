"use client";

import { Button, ListGroup } from "flowbite-react";
import { useAtom } from "jotai";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { findAllPoll } from "@/app/api/poll_server";

export default function Page() {
  const [pollList, setPollList] = useState<PollList[]>([]);

  useEffect(() => {
    async function reloadPollList() {
      const result = await findAllPoll();
      if (result.data != "false") {
        setPollList(result.data);
      }
    }
    reloadPollList();
  }, [])

  return (
    <div className="grid grid-rows-3 text-center">
      <div className="grid grid-cols-1 w-full self-center">
        <h1 className="text-6xl">
          <Link href="#">투표 목록</Link>
        </h1>
      </div>
      <div className="grid grid-cols-1 w-full h-32 overflow-auto self-center">
        {
          pollList.length == 0 ?
            <div className="grid grid-cols-1">
              <div className="grid col-1 self-center">
                <h3 className="text-4xl">No Content</h3>
              </div>
            </div>
            :
            pollList.map((item: any, index) => {
              return (
                <div key={index} className="grid grid-cols-5 hover:font-bold">
                  <div className="grid col-span-3 self-center">
                    <h3 className="text-4xl">{item.pollName}</h3>
                  </div>
                  <div className="grid grid-cols-1 self-center hover:bg-slate-300">
                    <Link href={`/poll/polling/${item.pollIndex}?pollName=${item.pollName}`} passHref>투표하기</Link>
                  </div>
                  <div className="grid grid-cols-1 self-center hover:bg-slate-300">
                    <Link href={`/poll/result/${item.pollIndex}?pollName=${item.pollName}`} passHref>결과보기</Link>
                  </div>
                </div>
              )
            })
         

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
