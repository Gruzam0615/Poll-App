import { atom } from "jotai"

export const candidatesListAtom = atom([
    {
        "index": 1,
        "id": "candidates1",
        "value": "후보1"
    },
    {
        "index": 2,
        "id": "candidates2",
        "value": "후보2"
    },
    {
        "index": 3,
        "id": "candidates3",
        "value": "후보3"
    }
]);
export const pollResultAtom = atom([
    {
        "name": "후보1",
        "countValue": 0
    },
    {
        "name": "후보2",
        "countValue": 0
    },
    {
        "name": "후보3",
        "countValue": 0
    }
]);
