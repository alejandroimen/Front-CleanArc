import { UserDTO } from "../data/models/UserDTO.jsx";
import { User } from "../data/models/User.jsx";
import { UserRepository } from "../data/repository/UserRepository.jsx";

export class CreateUserUseCase {
  constructor() {
    this.UserRepository = new UserRepository();
  }

  async execute(User) {
    const response = await this.UserRepository.create(User);

    let data = null;
    if (response != null)
      data = new UserDTO(
        response.id,
        response.curp,
        response.name,
        response.lastname,
        response.phone,
        response.email
      );

    console.log("Use Case: " + JSON.stringify(data));
    return data;
  }
}
