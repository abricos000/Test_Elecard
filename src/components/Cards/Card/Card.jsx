import s from "./Card.module.css"


export const Card = ({post, remove}) => {

   


    // let unix_timestamp = post.timestamp
    
    // var date = new Date(unix_timestamp * 1000);
    // var hours = date.getHours();
    // var minutes = "0" + date.getMinutes();
    // var seconds = "0" + date.getSeconds();
    // var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    




    // let data = new Date(post.timestamp).toLocaleDateString("en-US")

    

    const imageUrl ="http://contest.elecard.ru/frontend_data/" + post.image

    return(
        <div className={s.card}>
            <button className={s.btn} onClick={() => remove(post)} >&times;</button>
            <img className={s.image} src={imageUrl} alt="картинка не прогрузилась" />
            <p className={s.text}>категория: {post.category} размер файла : {post.filesize} data: {post.timestamp} </p>
            

        </div>
    )
}