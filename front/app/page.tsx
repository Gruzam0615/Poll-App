"use client";

import { Button } from "flowbite-react";
import { useAtom } from "jotai";
import Image from "next/image";
import Link from "next/link";
import { Bar, BarChart, XAxis } from "recharts";
import { pollResultAtom } from "./store/pollingAtom";

export default function Home() {
  const [ data, setData ] = useAtom(pollResultAtom);

  return (
    <div className="container mx-auto pt-80 justify-items-center">
      <h1 className="text-6xl">앱 메인</h1>      
      <Link href="/poll">
        <Button className="my-5" color="light" >투표 페이지로</Button>
      </Link>
    </div>
  );
}
