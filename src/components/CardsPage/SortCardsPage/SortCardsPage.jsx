import React from "react"
import { MyButton } from "../../MyButtons/MyButton"
import MyRadioButton from "../../MyRadioButton/MyRadioButton"
import s from "./SortCardsPage.module.css"


export const SortCardsPage = ({addAllCards, showDeletedCards, removeShowDeletedCards, selectedSort, sortPost}) => {

    return(
        <div className={s.conteiner}>
            <MyRadioButton
                defaultValue = "Сортировать по"
                value={selectedSort}
                onChange={sortPost}
                options = {[
                    {value: "filesize", name: 'Размеру файла'},
                    {value: "timestamp", name: 'Дате'},
                    {value: "category", name: 'Категории'}
                ]}/>
            <div className={s.buttons}>
                <MyButton click={addAllCards}>добавить все карточки</MyButton>
                <MyButton click={showDeletedCards}>Корзина</MyButton>
                <MyButton click={removeShowDeletedCards}>Очистить корзину</MyButton>
            </div>
        </div>
    )
}