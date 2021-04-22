import { ToastContainer } from "react-toastify";
import Form from "./components/Form";

const Register = () => {
  return (
    <div className="register-page page">
      <div className="register-page__image"></div>
      <div className="register-page__form__container flex flex:center-all">
        <Form />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
