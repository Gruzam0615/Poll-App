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

export async function CreatePoll(body: any) {
    console.log("Requested CreatePoll");
    console.log(JSON.stringify(body));

    const headers = new Headers();
    headers.append("Content-Type", "application/json")

    return await fetch("/poll/createPoll", {
        method: "POST",
        headers: headers,
        mode: "cors",   
        body: JSON.stringify(body)
    })
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

export async function findAllPoll() {
    console.log("Requested findAllPoll");

    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    return await fetch("/poll/findAll", {
        method: "GET",
        headers: headers,
        mode: "cors",
    })
    .then((response) => {
        return response.json()
    })
    .then((result) => {
        return result;
    })
    .catch((err) => {
        return {
            "status": 500,
            "message:": "failed",
            "data": "false"
        }
    })
}

export async function findByPollIndex(body: any) {
    console.log("Requested findByPollIndex");
    console.log(JSON.stringify(body));

    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    return await fetch(`/poll/findByPollIndex?pollIndex=${body}`, {
        method: "GET",
        headers: headers,
        mode: "cors",
    })
    .then((response) => {
        return response.json()
    })
    .then((result) => {
        return result;
    })
    .catch((err) => {
        return {
            "status": 500,
            "message:": "failed",
            "data": "false"
        }
    })
}