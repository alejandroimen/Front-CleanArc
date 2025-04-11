import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router";
import image from "../../../../core/assets/form-image.png"
import "./createUser.css";

export const RFCView = observer(({ viewModel }) => {
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
          <h2 className="form-title">Consulta tu RFC con tu CURP</h2>
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
