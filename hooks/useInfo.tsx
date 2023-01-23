import axios from 'axios'
import { useState, useEffect } from 'react'
import { sessionToken } from '../utils/session';
import ApiNames from '../enums/api_enum';
import Post from '../components/post/post';

export default function useInfo() {
    const apiNames = ApiNames();

    const [repos, setrepos] = useState([])
    const [search, setsearch] = useState([])

    useEffect(() => {
        sessionToken();
        getStaticProps();
    }, [])

    const getStaticProps = async () => {
        try {
            const { data } = await axios.get(`${apiNames.GITHUB_REPOS("andrescuello7")}`)
            setrepos(data)
            setsearch(data)
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

    const onSearch = (e: any) => {
        let list_repos = [];
        const { value } = e.target;
        list_repos = repos;
        const filtered: any = list_repos.filter((item: any) => {
            let result = item.name.toLowerCase();
            return result.indexOf(value) > -1;
        });
        filtered.name !== "" ? setsearch(filtered) : setsearch(repos);
    }

    const mapRepos = search.map((item: any, i) => <a key={i} href={item.clone_url}>{item.full_name}</a>)

    return {
        onSearch,
        mapPost,
        mapRepos
    }
}