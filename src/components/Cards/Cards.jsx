import { Card } from "./Card/Card"
import s from "./Cards.module.css"

export const Cards = ({currentPost, loadind, remove}) => {


    if(!currentPost.length){
       return <h2>Картинок нет</h2>
    }

    return(
        <div className={s.cards}>
                {currentPost.map((el, index) => <Card loadind={loadind} key={index} remove={remove}  post={el} />)}
            </div>
    )
}