import s from "./MyModal.module.css"

export const MyModal = ({children, remove}) => {


    return(
        <div 
        onClick={() => remove()} 
        className={[s.modal, s.active].join(' ')}>

             <div className={s.modalContent} 
             onClick={(e) => e.stopPropagation()}
             >
                <button className={s.btn}
                 onClick={() => remove()}
                 >&times;</button>
                    {children}
            </div>
        </div>
    )
}