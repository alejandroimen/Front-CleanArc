import { RFCDTO } from "../models/RFCDTO";

export class RFCRepository {
    async get(curp) {
        const response = await fetch(import.meta.env.VITE_URL, {
            method: "POST",
            body: JSON.stringify({
                curp: User.curp
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });

        if (!response.ok) return null;

        const data = await response.json();
        return new UserDTO(data.id, data.curp, data.name, data.lastname, data.phone, data.email);
    }
}
