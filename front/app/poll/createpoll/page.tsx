"use client";

import { Button, Checkbox, Label, List, TextInput } from "flowbite-react";
import Link from "next/link";
import { useRef, useState } from "react";

export default function Page() {

  const [pollName, setPollName] = useState("");
  const [pollCandidateName, setpollCandidateName] = useState("");
  const [pollCandidateList, setpollCandidateList] = useState([
    {
      "pollCandidateName": "후보1",
      "pollCount": 0,
    }
  ]);
  const [sendData, setSendData] = useState({});

  const onChangepollCandidateName = (e: any) => {
    setpollCandidateName(e.target.value);
  }
  const onChangePollName = (e: any) => {
    setPollName(e.target.value);
  }

  const submitNewPoll = () => {
    console.log("Submited");
    console.log(pollName);
    pollCandidateList?.map(item => {
      console.log(item);
    })
    setSendData({
      "pollName": pollName,
      "pollCandidateList": pollCandidateList,
    })
    console.log(`sendData: ${sendData}`);
  }

  return (
    <div className="grid grid-rows-4 pt-5 pb-5">
      <div className="grid grid-cols-1 w-full text-center self-center">
        <h1 className="text-6xl">새로운 투표</h1>
      </div>
      <div className="grid grid-cols-4 w-full self-center">
        <div className="col-1 text-end self-center mr-5">
          <Label htmlFor="polltitle" value="투표명" />
        </div>
        <div className="col-span-2">
          <TextInput id="polltitle" type="text" placeholder="" value={pollName} onChange={onChangePollName} required shadow />
        </div>
      </div>
      <div className="grid grid-cols-1 text-center self-center">
        <div className="grid-row">
          <div className="col-1 text-center self-center">
            <h3 className="text-4xl">후보 목록</h3>
          </div>
          <div className="col-1 text-center self-center">
            <h4 className="text-3xl">후보 1</h4>
          </div>
          <div className="col-1 text-center self-center hover:font-bold">
            <h6 className="text-xl">
              <Link href={"/poll/createpoll/addcandidate"}>후보 추가</Link> 
            </h6>
          </div>         
        </div>
      </div>
      <div className="grid grid-cols-4 text-center self-center">
        <div className="col-start-2 col-span-2 bg-slate-400 hover:bg-slate-800 hover:text-white" onClick={submitNewPoll}>
          투표 시작
        </div>
      </div>
    </div>
  );
}
