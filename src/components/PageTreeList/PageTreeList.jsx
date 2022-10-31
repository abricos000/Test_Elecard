import { useState } from "react";
import { MyButton } from "../MyButtons/MyButton";
import { MyModal } from "../MyModal/MyModal";
import s from "./PageTreeList.module.css"




export const PageTreeList = ({posts}) => {

        const arrayMap = posts.map(el => el.category)
        const arrayCategorys = [...new Set(arrayMap)]
        
        const arrayСonversion = (arr, arrCateg, categ = '13') => {
        
            const arrСonvers = []
            
            for(let i=0; i<arrCateg.length; i++){

                let j = 0
                if(arr[i].category === arrCateg[j]){
                    j++
                    arrСonvers.push(
                        {
                            categori: arrCateg[i],
                            nested_values: arrayСonversion(arr, arr,  arrCateg[i])
                        }
                    )
                } else if(categ === arr[i].category) 
                     {
                         arrСonvers.push(
                         {bool: false, categorii: arr[i].category, name:"http://contest.elecard.ru/frontend_data/" + arr[i].image}
                         )
                     }
            }
            return arrСonvers
        }



    const array = arrayСonversion(posts, arrayCategorys)

    const [arraycards, setArraycards] = useState(array)
    const [status, setstatus] = useState(false)

const addDrow = (e) => {
    let newArr = []

const sortTreeArrey = arraycards.map(el => {

    if(el.categori === e){
       newArr =  el.nested_values.map(elem => {






           return ({bool: !elem.bool, categorii: elem.categorii, name: elem.name})
       })
    } 
    else{
        newArr = el.nested_values
    }

    return  ({categori: el.categori,
        nested_values: newArr })
    
})


console.log(sortTreeArrey);
setArraycards(sortTreeArrey)

}

const changeStatus = () => {
    setstatus(!status)

}

const [modal, setModal] = useState('')
const [modalStatus, setModalStatus] = useState(false)

const imageModal = (i,e) =>{
    setModal(i)
    setModalStatus(true)
}

const removeModal = () =>{
    setModalStatus(false)

}


    const drowRender = (data, isSub, level = 1) => {

        let children = [];
    if (isSub) { level++; }

    for (let i = 0; i < data.length ; i++) {
            if ((typeof(data[i].nested_values) === 'object') && (status)) { 
                children.push(
                    <li key={i} className={s.item} onClick={(e) => addDrow(e.target.innerHTML)}>
                        <ul className={s.spisok}><li className={s.hov}>{data[i].categori}</li></ul>
                           
                        <ul  className={s.spisok}>
                            <li key={i} data={data[i]} level={level}>
                                { drowRender(data[i].nested_values, true, level)}
                            </li>
                       </ul>
                    </li>
                )
            
            } 
            else if (data[i].bool) {
                children.push(
                    <li className={`${s.item} ${s.hov}`} key={i} value={data[i].name} >
                        {data[i].name}

                        <span className={s.span}><img className={s.img} onClick={(e) => imageModal(data[i].name, e)} value={data[i].name} src={data[i].name} alt="111" style={{width: "200px"}} /></span>
                        
                    </li>);
                }
    }


    if(status ){
        return (
            <ul className={s.spisok} >
            
                    {children}
            </ul>
                    )
    }
    else{
        return (
            <h3>раскройте дерево</h3>
        )
    }
    
    }
    return (
        <div className={s.spisokposition}>
            <MyButton click={changeStatus}>древовидный список</MyButton>
                {drowRender(arraycards, status)}

                { modalStatus ?<MyModal remove={removeModal}>
           
                <span style={{minWidth:"800px" ,maxHeight: "600px", padding: "0 20px",  background:"rgb(0, 0, 0)",textAlign: "center",}}><img style={{height: "100%" , minHeight: "600px", maxWidth: "1000px"}}  src={modal} alt='dcf'/></span>

                <div style={{width:"200px", marginLeft: "5px", background:"rgb(234, 234, 234)",  borderTopRightRadius: "10px", borderBottomRightRadius: "10px"}}></div>

            </MyModal> : <div></div>}
    </div>
    )
}











