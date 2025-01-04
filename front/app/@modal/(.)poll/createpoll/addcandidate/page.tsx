"use client";

import Modal from "@/app/components/Modal";
import AddCandidate from "@/app/ui/addcandidate";
import { useRouter } from "next/navigation";

export default function Page({ children }: {
    children: React.ReactNode
}
) {
    const router = useRouter();

    return(
        // <Modal>{children}</Modal>
        <>
            <Modal>
                <AddCandidate />
            </Modal>           
        </>
    )
}