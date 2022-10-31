import s from "./Footer.module.css"

export const Footer = ({children}) => {
    return(
        <footer className={s.footer_content}>
           {children}
        </footer>
    )
}