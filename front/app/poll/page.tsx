"use client";

import { Button, ListGroup } from "flowbite-react";
import { useAtom } from "jotai";
import Image from "next/image";
import Link from "next/link";
import { Bar, BarChart, XAxis } from "recharts";
import { pollResultAtom } from "@/app/store/pollingAtom";

export default function Page() {
  const [ data, setData ] = useAtom(pollResultAtom);

  return (
    <div className="container mx-auto pt-80 justify-items-center">
      <h1 className="text-6xl">투표 목록</h1>
      {/* recharts */}
      {/* <BarChart className="" width={1080} height={360} data={data} barSize={60}>
        <Bar dataKey="countValue" fill="#0AE" label={{ position: "center" }}/>
        <XAxis dataKey="name" axisLine={false} tickLine={false} />
      </BarChart> */}
      <ListGroup className="w-48">
        <ListGroup.Item>
          <Link href="#">
            투표1
          </Link>
        </ListGroup.Item>
      </ListGroup>
      
      <Link href="/poll/createpoll">
        <Button className="my-5" color="light">새 투표 만들기</Button>
      </Link>
    </div>
  );
}
