import { useState } from "react";
import Button from "../../../components/Button";

const Form = () => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: any) => {
        e.preventDefault();

        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 3000);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="register-page__form"
        >
            <h2 className="register-page__form__title">Register an account.</h2>
            {/*  */}
            <Button loading={loading}>Register</Button>
        </form>
    );
};

export default Form;
