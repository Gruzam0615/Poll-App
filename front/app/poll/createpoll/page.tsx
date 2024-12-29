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

  const CandidateAdd = () => {
    if (pollCandidateName !== "") {
      const member = {
        "pollCandidateName": pollCandidateName,
        "pollCount": 0
      }
      setpollCandidateList([...pollCandidateList, member]);
      setpollCandidateName("");
    } else {
      alert("후보 이름을 입력해 주세요.")
    }
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
    <div className="container mx-auto pt-80 justify-items-center">
      <h1 className="text-6xl">새로운 투표</h1>
      <form className="flex max-w-md flex-col gap-4" action={submitNewPoll}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="polltitle" value="투표명" />
          </div>
          <TextInput id="polltitle" type="text" placeholder="투표명" value={pollName} onChange={onChangePollName} required shadow />
        </div>
        <div>
          <div className="mb2-block">
            <Label htmlFor="pollCandidateList" value="후보 목록" />
          </div>
          <div className="mb2-block">
            <Button color="dark" onClick={CandidateAdd}>후보 추가</Button>
          </div>
          <div className="mb2-block">
            <ul>
              {
                pollCandidateList?.map((item, index) => (
                  <li key={index}>{item.pollCandidateName}</li>
                ))
              }
            </ul>
          </div>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="pollCandidateName" value="후보 이름" />
          </div>
          <TextInput id="pollCandidateName" type="text" value={pollCandidateName} onChange={onChangepollCandidateName} shadow />
        </div>

        {/* <div className="flex items-center gap-2">
          <Checkbox id="agree" />
          <Label htmlFor="agree" className="flex">
            I agree with the&nbsp;
            <Link href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
              terms and conditions
            </Link>
          </Label>
        </div> */}
        <Button type="submit">투표 시작하기</Button>
      </form>

      {/* <Link href="/poll/createpoll">
        <Button className="my-5" color="light">투표 시작</Button>
      </Link> */}
    </div>
  );
}
