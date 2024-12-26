import { PingPong, PingPong2 } from "@/app/api/poll_server";

async function getPingPongData() {
    const checkPingPong = await PingPong2();
    return checkPingPong;
}

export default async function Layout({
    children,
    main_connected_backend,
}: {
    children: React.ReactNode
    main_connected_backend: React.ReactNode
}) {
    // const checkPingPong = await getPingPongData();
    // console.log(checkPingPong);

    return (
        <>
            {children}
            {/* {
                checkPingPong?.data === "true" ?
                    main_connected_backend :
                    children
            } */}
        </>
    );
}