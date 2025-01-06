"use client";

import { useAtom } from "jotai";
import { Button, Label, Radio } from "flowbite-react";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { findByPollIndex } from "@/app/api/poll_server";

export default function Page() {
    const pathname = usePathname(); 
    const params = useSearchParams();
    const [ candidateList, setCandidateList ] = useState([]);

    const onSubmitAction = (event: any) => {
        event.preventDefault();
        // if (event.target.candidates.value === undefined || event.target.candidates.value === "") {
        //     alert("아무것도 선택하지 않았습니다.");
        // } else {
        //     let tempNumber = Number(event.target.candidates.value);
        //     console.log(`${typeof (tempNumber)}, ${tempNumber}`);
        //     const updatePollResult = pollResult.map((v, i) => {
        //         if (i === tempNumber - 1) {
        //             return {
        //                 "name": v.name,
        //                 "countValue": v.countValue + 1
        //             }
        //         } else {
        //             return v;
        //         }
        //     });
        //     setPollResult(updatePollResult);
        //     // alert(`투표 완료\npollResult: ${JSON.stringify(pollResult)}`)
        //     alert(`투표 완료`);
        //     router.push("/poll");
        // }
    }

    useEffect(() => {
        async function searchData() {
            const pollIndex = pathname.split("/")[3];
            const body = pollIndex;

            const result = await findByPollIndex(body);
            console.log(result);
        }
        searchData();
    }, [])

    return (
        <div className="grid grid-rows-3 text-center">
            <div className="grid grid-cols-1 w-full self-center">
                <h1 className="text-6xl">{params.get("pollName")}</h1>
            </div>
            <div className="grid grid-cols-1 w-full h-32 self-center">
                {/* <form className="py-10" name="candidates" onSubmit={onSubmitAction}>
                    <fieldset className="flex max-w-md flex-col gap-4">
                        <legend className="mb-4">후보</legend>
                        {
                            // candidatesList.map((candidate, index: number) => (
                            //     <div key={index} className="flex items-center gap-2">
                            //         <Radio id={candidate.id} name="candidates" value={candidate.index} />
                            //         <Label htmlFor={candidate.id}>{candidate.value}</Label>
                            //     </div>
                            // ))
                        }
                    </fieldset>
                    <Button className="my-5" color="dark" type="submit">투표하기</Button>
                </form> */}
            </div>
            <div className="grid grid-cols-1 w-full self-center">
                <Button className="my-5" color="dark" type="submit">투표하기</Button>
            </div>
        </div>
    );
}