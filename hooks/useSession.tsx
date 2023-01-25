import axios from 'axios'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { PageNames } from '../enums/page_enum';
import { setItem, getItem } from "../utils/localStorage";
import ApiNames from '../enums/api_enum';

export default function useSession() {
    const apiNames = ApiNames();

    const users = getItem('users') || [];
    const router = useRouter();

    const [valid, setvalid] = useState(false);
    const [form, setform] = useState({
        username: "",
        password: "",
        email: "",
    });

    const onChange = (e: any) => {
        const { name, value } = e.target;
        const response = { ...form, [name]: value };
        setform(response);
    }

    const SingIn = async () => {
        setvalid(false)
        try {
            const { data } = await axios.post(apiNames.API_AUTH, form)
            if (typeof window !== 'undefined' && data !== undefined) {
                const user = await axios.get(`${apiNames.GITHUB}${form.username}`)
                const repos = await axios.get(`${apiNames.GITHUB_REPOS(form.username)}`)
                setItem("user", user.data);
                setItem("repos", repos.data);
            }
            setItem("token", data.response.access_token);
            router.push(PageNames.HOME)
        } catch (error) {
            console.error(error)
            setvalid(true)
        }

    }

    const SingUp = async () => {
        try {
            const { data } = await axios.post(apiNames.API_USER, form)
            setItem("token", data.response.access_token);
            router.push(PageNames.HOME)
        } catch (error) {
            console.error(error)
            setvalid(true)
        }
    }

    return {
        onChange,
        SingIn,
        SingUp,
        valid
    }
}