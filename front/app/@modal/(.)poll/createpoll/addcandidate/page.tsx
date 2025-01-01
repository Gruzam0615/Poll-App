import Modal from "@/app/components/Modal";

export default function Page({
    children
}: {
    children: React.ReactNode
}) {
    return(
        <Modal children={children} />
    )
}