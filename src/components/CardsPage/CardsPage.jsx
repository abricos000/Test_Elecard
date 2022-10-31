import React, { useState } from "react"
import s from "./CardsPage.module.css"
import { Pogination } from "../Pogination/Pogination"
import { Cards } from "../Cards/Cards"
import { SortCardsPage } from "./SortCardsPage/SortCardsPage"


const deletePosts = []

export const CardsPage = ({posts,setPosts, mainPost, loadind}) => {

    
    const [currentPage, setCurrentPage] = useState(1)// на какой странице сейчас
    const [postsPerPage, setPostsPsge] = useState(30)//  сколько элементов на странице

    const lastPostIndex = currentPage * postsPerPage
    const firstPostIndex = lastPostIndex - postsPerPage
    const currentPost = posts.slice(firstPostIndex, lastPostIndex)

    const paginate = (pageNumber) => {

        setCurrentPage(pageNumber)
    }

    const nextPage = () => {
        if(currentPage < Math.ceil(posts.length / postsPerPage)){
            return setCurrentPage(pref => pref + 1)

        }
    }
    const prefPage = () => {
        if(currentPage > 1){
            return setCurrentPage(pref => pref - 1)
        }
    }


    const removePost = (post) =>{


        deletePosts.push(post)

       setPosts(posts.filter(p => {
   
           return p.id !== post.id
       }))
       }
       
    //    localStorage.setItem("myKey",JSON.stringify(deletePosts));

     const [selectedSort, setselectedSort] = useState('')
   
   
       const sortPost = (sort) => {
           setselectedSort(sort)
           console.log(sort);
   
   
           if( sort === 'category'){
               setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
           }
           else{
               setPosts([...posts].sort((a, b) => {
   
                   return (a[sort] > b[sort] ? -1 : b[sort] > a[sort] ? 1 : 0);
               }))
           }  
       }


    const deleteAllCards = () => {
        setPosts([])
    }
    const addAllCards = () => {
        setPosts( mainPost)
    }

    const showDeletedCards = () => {

        // let getDeleteCards = JSON.parse(localStorage.getItem("myKey"))   

        if(JSON.parse(localStorage.getItem("myKey")).length){
            setPosts(JSON.parse(localStorage.getItem("myKey")))

        }
       
    }

    const removeShowDeletedCards = () => {
       localStorage.clear();
    //    deletePosts = []
    setPosts( mainPost)

    }

    if(loadind){
        return <h2 className={s.no__post}>loadind... </h2>
    }

    

    return(
        <div>
        
       <SortCardsPage 
        deleteAllCards={deleteAllCards}
        addAllCards={addAllCards} 
        showDeletedCards={showDeletedCards}
        removeShowDeletedCards={removeShowDeletedCards} 
        selectedSort={selectedSort}
        sortPost={sortPost} />


            {(currentPost.length)
                ?<Cards currentPost={currentPost} loadind={loadind} remove={removePost}></Cards>
                : <h2 style={{textAlign: "center"}}>Картинок нет</h2>}


            {/* <div className={s.pogin}> */}
                <Pogination nextPage={nextPage} prefPage={prefPage} currentPost={currentPost} postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
                
                
            {/* </div> */}

            
        </div>
    )
}