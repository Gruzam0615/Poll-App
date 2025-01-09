"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { findByPollIndex } from "@/app/api/poll_server";
import { Bar, BarChart, XAxis } from "recharts";

export default function Page() {
    const router = useRouter();
    const pathname = usePathname();
    const params = useSearchParams();
    const [ data, setData ] = useState();

    useEffect(() => {
        async function searchData() {
            const pollIndex = pathname.split("/")[3];
            const body = pollIndex;

            const result = await findByPollIndex(body);
            const data = await result.data;
            setData(data.pollCandidateList);
            console.log(data.pollCandidateList);
        }
        searchData();
    }, [])

    return (
        <div className="grid grid-rows-3 text-center">
            <div className="grid grid-cols-1 w-full self-center">
                <h1 className="text-6xl">{params.get("pollName")}</h1>
            </div>
            <div className="grid grid-cols-1 w-full h-32 self-center">
                {/* recharts */}
                <BarChart className="" width={1080} height={360} data={data} barSize={60}>
                    <Bar dataKey="pollCount" fill="#0AE" label={{ position: "center" }} />
                    <XAxis dataKey="pollCandidateName" axisLine={false} tickLine={false} />
                </BarChart>
            </div>
            <div className="grid grid-cols-1 w-full self-center">
            </div>
        </div>
    );
}