"use client";

import Modal from "@/app/components/Modal";
import AddCandidate from "@/app/ui/addcandidate";
import { useRouter } from "next/navigation";

export default function Page(
) {
    const router = useRouter();

    return(
        // <Modal>{children}</Modal>
        <>
             <button onClick={() => {
                router.back()
            }}>
                Close Modal
            </button>
            <AddCandidate />
        </>
    )
}