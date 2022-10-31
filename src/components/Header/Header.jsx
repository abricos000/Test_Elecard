import s from "./Header.module.css"

export const Header = ({renderTree, renderCards}) => {
    return(
        <header className={s.header}>
          <p className={s.p}><input type="radio" name="prim" onClick={(e) => renderCards(e)} value="cards"/>карточки</p>
          <p className={s.p}><input type="radio" name="prim" onClick={(e) => renderTree(e)} value="tree"/>древовидный список</p>
        </header>
    )
}