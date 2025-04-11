import { RFCDTO } from "../data/models/RFCDTO.jsx";
import { RFC } from "../data/models/RFC.jsx";
import { RFCRepository } from "../data/repository/RFCRepository.jsx";

export class getRFCUseCase {
  constructor() {
    this.RFCRepository = new RFCRepository();
  }

  async execute(User) {
    const response = await this.RFCRepository.create(User);

    let data = null;
    if (response != null)
      data = new UserDTO(
        response.id,
        response.rfc,
        response.fechaAsignacion,
        response.idUser
      );

    console.log("Use Case: " + JSON.stringify(data));
    return data;
  }
}
