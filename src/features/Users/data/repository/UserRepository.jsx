import { UserDTO } from "../models/UserDTO.jsx";

export class UserRepository {
  async create(User) {
    const response = await fetch(import.meta.env.VITE_URL, {
      method: "POST",
      body: JSON.stringify({
        curp: User.curp,
        name: User.name,
        lastname: User.lastname,
        phone: User.phone,
        email: User.email
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    if (!response.ok) return null;

    const data = await response.json();
    return new UserDTO(data.id, data.curp, data.name, data.lastname, data.phone, data.email);
  }

  register() { }
  updateUser() { }
  deleteUser() { }
}
