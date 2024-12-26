import { PingPong, PingPong2 } from "@/app/api/poll_server";

async function getPingPongData() {
    const checkPingPong = await PingPong2();
    return checkPingPong;
}

export default async function Layout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <>
            {children}
        </>
    );
}