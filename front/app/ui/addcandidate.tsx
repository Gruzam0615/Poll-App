"use client";

import { TextInput } from "flowbite-react";
import { Label } from "flowbite-react/components/Label";
import { useState } from "react";

export default function AddCandidate() {
    const [value, setValue] = useState("");
    const onChangeValue = (e: any) => {
        setValue(e.target.value);
    }
    const onClickValue = () => {

    }

    return (
        <>
            <div className="grid grid-row-3 pt-20 pb-20 text-center self-center">
                <div className="gird grid-col-1 pt-5 pb-5">
                    <h3 className="text-4xl">후보 추가 페이지</h3>
                </div>
                <div className="grid grid-cols-4 w-full self-center">
                    <div className="col-1 text-end self-center mr-5">
                        <Label htmlFor="polltitle" value="투표명" />
                    </div>
                    <div className="col-span-2">
                        <TextInput id="polltitle" type="text" placeholder="" value={value} onChange={onChangeValue} required shadow />
                    </div>
                </div>
                <div className="grid grid-cols-4 text-center self-center pt-10">
                   
                </div>
                <div className="grid grid-cols-4 text-center self-center">
                    <div className="col-start-2 col-span-2 bg-slate-400 hover:bg-slate-800 hover:text-white" onClick={onClickValue}>
                        후보 추가
                    </div>
                </div>
            </div>
        </>
    );
}