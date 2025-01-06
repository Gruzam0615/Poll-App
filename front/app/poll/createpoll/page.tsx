"use client";

import { CreatePoll } from "@/app/api/poll_server";
import { candidateListAtom } from "@/app/store/pollingAtom";
import { Label, TextInput } from "flowbite-react";
import { useAtom } from "jotai";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const router = useRouter();

  /**
   * pollName: 투표 이름
   * pollCandidateList: 투표 대상인 후보의 목록
   * selectedCandidate: 현재 투표에서 선택된 후보의 값
   */
  const [pollName, setPollName] = useState("");
  const [pollCandidateList, setpollCandidateList] = useAtom(candidateListAtom);
  const [ selectedCandidate, setSelectedCandidate ] = useState("");
  const [ submitData, setSubmitData ] = useState({
    "pollName": "",
    "pollCandidateList": new Array,
  });

  const onChangePollName = (e: any) => {
    setPollName(e.target.value);
  }

  const submitNewPoll = () => {     
    console.log(pollName + "\n" + pollCandidateList);

    if(pollName.length === 0) {
      alert("투표명을 입력해주세요.");
    } else if(pollCandidateList.length === 0) {
      alert("등록된 후보가 없습니다.");
      router.refresh();
    } else {
      CreatePoll({
        "pollName": pollName,
        "pollCandidateList": pollCandidateList
      }).then((res) => {
        if(res.status == "200") {
          alert("새로운 투표가 등록되었습니다.")
          router.push("/poll")
          setpollCandidateList([]);
        }
        else {
          alert("새로운 투표 등록이 실패했습니다.")
          router.refresh()
        }
      }).catch((err) => {
        alert("오류 처음부터 다시 해주세요.")
        router.refresh();
      })
    }
  }

  return (
    <div className="grid grid-rows-5 pt-5 pb-5">
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
          <div className="col-1 text-center self-center overflow-auto h-32">
          {
            pollCandidateList?.map((item, index) => (
              <div className="col-1 items-center gap-2">
                <h3 className="text-3xl">{item}</h3>
              </div>                
            ))
          }
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 text-center self-center">
        <div className="col-start-2 col-span-2 bg-slate-400 hover:bg-slate-800 hover:text-white">
          <Link href={"/poll/createpoll/addcandidate"}>후보 추가</Link>
        </div>
      </div>
      <div className="grid grid-cols-4 text-center self-center">
        <div className="col-start-2 col-span-2 bg-slate-400 hover:bg-slate-800 hover:text-white" onClick={submitNewPoll}>
          투표 개시
        </div>
      </div>
    </div>
  );
}
