import s from "./Main.module.css"
import { useEffect, useState } from "react"
import axios from "axios"
import { PageTreeList } from "../PageTreeList/PageTreeList"
import { CardsPage } from "../CardsPage/CardsPage"

export const Main = ({contentMain}) => {
    const RequestURL = "http://contest.elecard.ru/frontend_data/catalog.json"
    const [posts, setPosts] = useState([])
    const [loadind, setLoading] = useState(false)// идентификатор закрузки
    const [mainPost, setMainPost] = useState([])

    useEffect(() => {
        // fetch(RequestURL)
        // .then((res) => {return res.json()})
        // .then((arr) => {setPosts(arr)})
        const getPosts = async() => {
            setLoading(true)
            const res = await (await axios.get(RequestURL))

            for(let i=0; i<res.data.length; i++){
               res.data[i].id = i
            }

            setPosts(res.data)
            setLoading(false)
            setMainPost(res.data)
        }
        getPosts()
    },[])

    const rerenderPage = () =>{
        if (contentMain === "cards"){
            return (
                <CardsPage
                    posts={posts}
                    setPosts={setPosts}
                    setLoading={setLoading}
                    loadind={loadind}
                    mainPost={mainPost}
                />)
        }
        else if (contentMain === "tree"){
            return <PageTreeList posts={posts}/>
        }
        else{
            return (
                <CardsPage
                    posts={posts}
                    setPosts={setPosts}
                    setLoading={setLoading}
                    loadind={loadind}
                    mainPost={mainPost}
                />)
        }
    }
    return(
        <main className={s.main__content}>
        {rerenderPage()}
        </main>
    )
}
