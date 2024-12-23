export async function PingPong() {
    const data = await fetch("/ping");
    const result = await data.text();
    return result;
}

export async function PingPong2() {
    console.log("PingPong2")
    return await fetch("http://localhost:8080/ping")
    .then((response) => {
       return response.json()
    })
    .then((result) => {
        return result;
    })
    .catch((err) => {
        return {
            "status": 500,
            "message": "failed",
            "data": "false"
        }
    })
    
}