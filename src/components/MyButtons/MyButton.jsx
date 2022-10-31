import s from "./MyButton.module.css"

export const MyButton = ({children, click}) => {
    return(
        <button onClick={click} className={s.btn} >
           {children}
        </button>
    )
}