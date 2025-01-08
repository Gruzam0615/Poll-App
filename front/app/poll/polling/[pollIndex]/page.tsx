"use client";

import { useAtom } from "jotai";
import { Button, Label, Radio } from "flowbite-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { doPoll, findByPollIndex } from "@/app/api/poll_server";

export default function Page() {
    const router = useRouter();
    const pathname = usePathname();
    const params = useSearchParams();
    const [pollData, setPollData] = useState([]);

    const onSubmitAction = (event: any) => {
        event.preventDefault();
        const selectedValue = event.target.pollCandidates.value;
        console.log(event.target.pollCandidates.value);
        if(selectedValue === undefined || selectedValue === "") {
            alert("아무것도 선택하지 않았습니다.");
        } else {
            const pollIndex = pathname.split("/")[3];
            doPoll({
                "pollIndex": pollIndex,
                "pollCandidateName": selectedValue
            })
            .then((res) => {
                if(res.status == "200") {
                    alert("투표가 완료되었습니다.")
                    router.push("/poll");
                } else {
                    alert("투표에 실패했습니다.")
                    router.refresh();
                }
            })
            .catch((err) => {
                alert("오류 처음부터 다시 시도해주세요.");
                router.refresh();
            })
            
        }
    }

    useEffect(() => {
        async function searchData() {
            const pollIndex = pathname.split("/")[3];
            const body = pollIndex;

            const result = await findByPollIndex(body);
            const data = await result.data;
            setPollData(data.pollCandidateList);
            console.log(data.pollCandidateList);
        }
        searchData();
    }, [])

    return (
        <div className="grid grid-rows-3 text-center">
            <div className="grid grid-cols-1 w-full self-center">
                <h1 className="text-6xl">{params.get("pollName")}</h1>
            </div>
            <form onSubmit={onSubmitAction}>
            <div className="grid grid-cols-1 w-full h-32 self-center">
                <fieldset className="flex max-w-md flex-col gap-4">
                {
                    pollData?.map((item: any, index: number) => (
                        <div key={index} className="flex items-center gap-2">
                            <Radio id={item.pollCandidateName} name="pollCandidates" value={item.pollCandidateName} />
                            <Label htmlFor={item.pollCandidateName}>{item.pollCandidateName}</Label>
                        </div>
                    ))
                }
                </fieldset>
            </div>
            <div className="grid grid-cols-1 w-full self-center">
                <Button className="my-5" color="dark" type="submit">투표하기</Button>
            </div>
            </form>
        </div>
    );
}