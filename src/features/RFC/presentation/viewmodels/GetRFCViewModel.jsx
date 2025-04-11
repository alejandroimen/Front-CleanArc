import { makeAutoObservable, runInAction } from "mobx";
import { RFC } from "../../data/models/RFC.jsx";
import { getRFCUseCase } from "../../domain/GetRFCUseCase.jsx";

export class RFCViewModel {
  curp = "";
  name = "";
  email = "";
  lastname = "";
  phone = "";
  error = null;
  isValid = false;

  constructor() {
    makeAutoObservable(this);
    this.getRFCUseCase = new getRFCUseCase();
  }

  onChangeCurp(curp) {
    this.curp = curp;
  }

  async doGetRFC() {
    this.error = null;

    if (this.curp !== "") {
      try {
        const data = await this.getRFCUseCase.execute(this.curp);
        console.log(JSON.stringify(data));

        runInAction(() => {
          if (data != null) this.isValid = true;
        });
      } catch (err) {
        runInAction(() => {
          this.error = err.message || "Error al obtener su RFC";
        });
      }
    } else {
      this.error = "Campos vacíos";
    }
  }
}
