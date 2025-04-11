import { makeAutoObservable, runInAction } from "mobx";
import { User } from "../../data/models/User.jsx";
import { CreateUserUseCase } from "../../domain/CreateUserUseCase.jsx";

export class UserViewModel {
  curp = "";
  name = "";
  email = "";
  lastname = "";
  phone = "";
  error = null;
  isValid = false;

  constructor() {
    makeAutoObservable(this);
    this.createUserUseCase = new CreateUserUseCase();
  }

  onChangeCurp(curp) {
    this.curp = curp;
  }

  onChangeName(name) {
    this.name = name;
  }

  onChangeLastname(lastname) {
    this.lastname = lastname
  }

  onChangePhone(phone) {
    this.phone = phone
  }

  onChangeEmail(email) {
    this.email = parseInt(email);
  }

  async doCreateUser() {
    this.error = null;

    if (this.curp !== "" && this.name !== "" && this.lastname !== "" && this.phone !== "" && this.email !== "") {
      const User = new User(this.curp, this.name, this.lastP, this.lastM, this.email);

      try {
        const data = await this.createUserUseCase.execute(User);
        console.log(JSON.stringify(data));

        runInAction(() => {
          if (data != null) this.isValid = true;
        });
      } catch (err) {
        runInAction(() => {
          this.error = err.message || "Error al crear la cita";
        });
      }
    } else {
      this.error = "Campos vacíos";
    }
  }
}
