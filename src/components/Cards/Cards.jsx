// import { TransitionGroup, CSSTransition } from "react-transition-group"
import { Card } from "./Card/Card"
import s from "./Cards.module.css"

export const Cards = ({currentPost, loadind, remove}) => {

    if(!currentPost.length){
       return <h2>Картинок нет</h2>
    }

    return(
        <div className={s.cards}>
            {/* <TransitionGroup> */}
                {currentPost.map((el, index) =>
                // <CSSTransition
                //     key={index}
                //     timeout={500}
                //     classNames="card"
                // >
                    <Card loadind={loadind} key={index} remove={remove}  post={el} />
                // </CSSTransition>
                )}
            {/* </TransitionGroup> */}
            </div>
    )
}