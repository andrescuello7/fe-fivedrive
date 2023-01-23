import axios from 'axios'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { PageNames } from '../enums/page_enum';
import { setItem, getItem } from "../utils/localStorage";
import { ApiNames } from '../enums/api_enum';

export default function useSession() {
    const users = getItem('users') || [];
    const router = useRouter();

    const [valid, setvalid] = useState(false);
    const [form, setform] = useState({
        fullname: "",
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
        let result = users.map((item: any) => {
            if (form.password === item.password && form.username === item.username) {
                return true;
            }
            return false;
        })
        if (typeof window !== 'undefined' && result[0]) {
            const user = await axios.get(`${ApiNames.GITHUB}${form.username}`)
            const repos = await axios.get(`${ApiNames.GITHUB_REPOS}`)
            setItem("user", user.data);
            setItem("repos", repos.data);
            setItem("token", "eykjerfldkmnbts");
            router.push(PageNames.HOME)
        } else {
            setvalid(true)
        }
    }

    const SingUp = () => {
        if (form.password != "" && form.email != "" && form.fullname != "" && form.username != "") {
            users.push(form)
            setItem("users", users);
            router.push(PageNames.LOGIN)
        } else {
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