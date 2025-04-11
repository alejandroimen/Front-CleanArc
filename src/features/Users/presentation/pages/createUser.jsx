import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router";
import image from "../../../../core/assets/form-image.png"
import "./createUser.css"

export const UserView = observer(({ viewModel }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (viewModel.isValid) {
      navigate("/dashboard");
    }
  }, [viewModel.isValid, navigate]);

  return (
    <div className="container">
      <div className="User-box">
        <div className="image-section">
          <img
            src={image}
            alt="Documento SAT"
            className="image"
          />
        </div>

        <div className="form-section">
          <h2 className="form-title">Ayúdanos con tu información</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              viewModel.doCreateUser();
            }}
          >
            <label htmlFor="curp">CURP</label>
            <input
              type="text"
              id="curp"
              onChange={(e) => viewModel.onChangeCurp(e.target.value)}
            />

            <label htmlFor="nombre">Nombre(s)</label>
            <input
              type="text"
              id="nombre"
              onChange={(e) => viewModel.onChangeName(e.target.value)}
            />

            <label htmlFor="apellido">Apellidos</label>
            <input 
              type="text" 
              id="apellido" 
              onChange={(e) => viewModel.onChangeLastname(e.target.value)}
            />

            <label htmlFor="apellidoM">Telefono</label>
            <input 
              type="text" 
              id="apellidoM" 
              onChange={(e) => viewModel.onChangePhone(e.target.value)}
            />

            <label htmlFor="correo">Correo electrónico</label>
            <input
              type="email"
              id="correo"
              onChange={(e) => viewModel.onChangeEmail(e.target.value)}
            />

            {viewModel.error && (
              <div className="error">{viewModel.error}</div>
            )}

            <button type="submit">Registrarme</button>
          </form>
        </div>
      </div>
    </div>
  );
});

export default UserView;
