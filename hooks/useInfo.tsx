import axios from 'axios'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { PageNames } from '../enums/page_enum';
import { setItem, getItem } from "../utils/localStorage";
import { sessionToken } from '../utils/session';
import { ApiNames } from '../enums/api_enum';
import { GetStaticProps } from 'next';
import Post from '../components/post/post';

export default function useInfo() {
    const [repos, setrepos] = useState([])

    useEffect(() => {
        sessionToken();
        getStaticProps();
    }, [])

    const getStaticProps = async () => {
        try {
            const { data } = await axios.get(`${ApiNames.GITHUB_REPOS}`)
            setrepos(data)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }


    const mapPost = repos.map((item: any, i) => (
        <Post
            key={i}
            lenguage={item.language}
            photo={item.owner.avatar_url}
            title={item.full_name}
            user={item.owner.login}
            label='Get running space of job for client and conection of api...'
        />))
    return {
        mapPost
    }
}