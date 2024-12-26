"use client";

import { Button } from "flowbite-react";
import Link from "next/link";
import { Bar, BarChart, XAxis } from "recharts";

export default function Test1() {
    return (
        <div className="container mx-auto pt-80 justify-items-center">
            <h1 className="text-6xl">Test1</h1>
            <h1 className="text-6xl">투표 결과</h1>
            {/* <BarChart className="" width={1080} height={360} data={data} barSize={60}> */}
                {/* <Bar dataKey="countValue" fill="#0AE" label={{ position: "center" }} /> */}
                {/* <XAxis dataKey="name" axisLine={false} tickLine={false} /> */}
            {/* </BarChart> */}
            <Link href="/polling">
                <Button className="my-5" color="light" >투표 페이지로</Button>
            </Link>
        </div>
    );
}