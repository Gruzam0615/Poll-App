"use client";

import { TextInput } from "flowbite-react";
import { Label } from "flowbite-react/components/Label";
import { useAtom } from "jotai";
import { useState } from "react";
import { candidateListAtom } from "../store/pollingAtom";
import { useRouter } from "next/navigation";

export default function AddCandidate() {
    const router = useRouter();
    const [ value, setValue ] = useState("");
    const [ candidateList, setCandidateList ] = useAtom(candidateListAtom);

    const onChangeValue = (e: any) => {
        setValue(e.target.value);
    }
    
    const onClickValue = () => {
        // candidateList.push(value);
        setCandidateList([...candidateList, value]);
        setValue("");
        alert("추가되었습니다.");
        router.back();
    }

    return (
        <div className="grid grid-row-4 pt-20 pb-20 text-center self-center">
            <div className="gird grid-col-1 pt-5 pb-5">
                <h3 className="text-4xl">후보 추가 페이지</h3>
            </div>
            <div className="grid grid-cols-4">
                <div className="col-1 self-center">
                    <Label htmlFor="polltitle" value="투표명" />
                </div>
                <div className="col-span-2  self-center">
                    <TextInput id="polltitle" type="text" placeholder="" value={value} onChange={onChangeValue} required shadow />
                </div>
            </div>
            <div className="grid grid-cols-4 text-center self-center pt-10"></div>
            <div className="grid grid-cols-4 text-center self-center">
                <div className="col-start-2 col-span-2 bg-slate-400 hover:bg-slate-800 hover:text-white" onClick={onClickValue}>
                    후보 추가
                </div>
            </div>
        </div>
    );
}