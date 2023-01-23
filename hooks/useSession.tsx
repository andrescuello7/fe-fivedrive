import { useState } from 'react'
import { PageNames } from '../router/page_enum';
import { setItem } from "../utils/localStorage";

export default function useLogin() {
    const [form, setform] = useState({});

    const onChange = (e: any) => {
        const { name, value } = e.target;
        const response = { ...form, [name]: value };
        setform(response);
    }

    const SingIn = () => {
        setItem("token", "eykjerfldkmnbts");
        setform({});
        window.location.href = PageNames.HOME
    }

    const SingUp = () => {
        setItem("session", form);
        setform({});
        window.location.href = PageNames.LOGIN
    }

    return {
        onChange,
        SingIn,
        SingUp
    }
}