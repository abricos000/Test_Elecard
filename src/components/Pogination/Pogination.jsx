import { MyButton } from "../MyButtons/MyButton"
import s from "./Pogination.module.css"

export const Pogination = ({currentPost, postsPerPage, totalPosts, paginate, prefPage, nextPage}) => {
 
const pageNumbers = []
    


    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }




    return( 
        <div>
            <div className={s.spisok}>
                {pageNumbers.map((number,i) => 
                    <span onClick={() => paginate(number)} key={i} className={s.item}>{number}</span>)}
            </div>

            {((currentPost.length))
                    ?<div className={s.btns}>
                        <MyButton click={prefPage}>pref page</MyButton>
                        <MyButton click={nextPage}>next page</MyButton>
                    </div>
                    :<div></div>
                    }
        </div>
    )
}