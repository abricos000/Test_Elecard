import React from "react"
import { MyButton } from "../../MyButtons/MyButton"
import MySelect from "../../MySelect/MySelect"
import s from "./SortCardsPage.module.css"


export const SortCardsPage = ({deleteAllCards, addAllCards, showDeletedCards, removeShowDeletedCards, selectedSort, sortPost}) => {

    return(

        <div className={s.conreiner}>

            
            <MySelect
                defaultValue = "Сортировать по"
                value={selectedSort}
                onChange={sortPost}
                options = {[
                    {value: "filesize", name: 'Размеру файла'},
                    {value: "timestamp", name: 'Дате'},
                    {value: "category", name: 'Категории'}
                ]}/>


            <div className={s.buttons}>
                <MyButton click={deleteAllCards}>сброс всех карточек</MyButton>
                <MyButton click={addAllCards}>добавить все карточки</MyButton>
                <MyButton click={showDeletedCards}>Корзина</MyButton>
                <MyButton click={removeShowDeletedCards}>Очистить корзину</MyButton>
            </div>
      
        </div>
    )
}