"use client";

import { useAtom } from "jotai";

import { candidatesListAtom, pollResultAtom } from "@/app/store/pollingAtom";
import { Button, Label, Radio } from "flowbite-react";
import { useRouter } from "next/navigation";

export default function Page() {

    const router = useRouter();
    const [candidatesList, setCandidatesList] = useAtom(candidatesListAtom);
    const [pollResult, setPollResult] = useAtom(pollResultAtom);

    const onSubmitAction = (event: any) => {
        event.preventDefault();
        if (event.target.candidates.value === undefined || event.target.candidates.value === "") {
            alert("아무것도 선택하지 않았습니다.");
        } else {
            let tempNumber = Number(event.target.candidates.value);
            console.log(`${typeof (tempNumber)}, ${tempNumber}`);
            const updatePollResult = pollResult.map((v, i) => {
                if (i === tempNumber - 1) {
                    return {
                        "name": v.name,
                        "countValue": v.countValue + 1
                    }
                } else {
                    return v;
                }
            });
            setPollResult(updatePollResult);
            // alert(`투표 완료\npollResult: ${JSON.stringify(pollResult)}`)
            alert(`투표 완료`);
            router.push("/poll");
        }
    }

    return (
        <div className="pt-80 justify-items-center">
            <h1 className="text-6xl">투표하기</h1>
            <form className="py-10" name="candidates" onSubmit={onSubmitAction}>
                <fieldset className="flex max-w-md flex-col gap-4">
                    <legend className="mb-4">후보</legend>
                    {
                        candidatesList.map((candidate, index: number) => (
                            <div key={index} className="flex items-center gap-2">
                                <Radio id={candidate.id} name="candidates" value={candidate.index} />
                                <Label htmlFor={candidate.id}>{candidate.value}</Label>
                            </div>
                        ))
                    }
                </fieldset>
                <Button className="my-5" color="dark" type="submit">투표하기</Button>
            </form>
        </div>
    );
}