import s from "./Card.module.css"

export const Card = ({post, remove}) => {

    let data = new Date(post.timestamp).toLocaleDateString("en-US")
    const KB = Math.ceil(post.filesize/1024)
    const B = post.filesize%1000
    const imageUrl ="http://contest.elecard.ru/frontend_data/" + post.image

    return(
        <div className={s.card}>
            <button className={s.btn} onClick={() => remove(post)} >&times;</button>
            <img className={s.image} src={imageUrl} alt="изображение не прогрузилась" />
            <p className={s.text}> <b>категория:</b> {post.category} <b>размер файла:</b> {KB}Кб {B}байт <b>месяц/число/год: </b> {data} </p>
        </div>
    )
}