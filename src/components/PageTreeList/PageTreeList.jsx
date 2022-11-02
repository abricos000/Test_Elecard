import React, { useState } from 'react';
import { MyButton } from '../MyButtons/MyButton';
import { MyModal } from '../MyModal/MyModal';
import s from './pageTreeList.module.css';

export function PageTreeList({ posts }) {
  const arrayMap = posts.map((el) => el.category);
  const arrayCategorys = [...new Set(arrayMap)];

  const arrayСonversion = (arr, arrCateg, categ = '13') => {
    const arrСonvers = [];

    for (let i = 0; i < arrCateg.length; i++) {
      let j = 0;
      if (arr[i].category === arrCateg[j]) {
        j++;
        arrСonvers.push(
          {
            categori: arrCateg[i],
            nested_values: arrayСonversion(arr, arr, arrCateg[i]),
          },
        );
      } else if (categ === arr[i].category) {
        arrСonvers.push(
          { bool: false, categorii: arr[i].category, name: `http://contest.elecard.ru/frontend_data/${arr[i].image}` },
        );
      }
    }
    return arrСonvers;
  };

  const array = arrayСonversion(posts, arrayCategorys);

  const [arrayCards, setArrayCards] = useState(array);
  const [status, setStatus] = useState(false);

  const addDrow = (e) => {
    let newArr = [];
    const sortTreeArray = arrayCards.map((el) => {
      if (el.categori === e) {
        newArr = el.nested_values.map((elem) => (
          {
            bool: !elem.bool,
            categorii: elem.categorii,
            name: elem.name,
          }
        ));
      } else {
        newArr = el.nested_values;
      }
      return (
        {
          categori: el.categori,
          nested_values: newArr,
        });
    });
    setArrayCards(sortTreeArray);
  };

  const changeStatus = () => {
    setStatus(!status);
  };

  const [modal, setModal] = useState('');
  const [modalStatus, setModalStatus] = useState(false);

  const imageModal = (i) => {
    setModal(i);
    setModalStatus(true);
  };

  const removeModal = () => {
    setModalStatus(false);
  };

  const drowRender = (data) => {
    const children = [];

    for (let i = 0; i < data.length; i++) {
      if ((typeof (data[i].nested_values) === 'object') && (status)) {
        children.push(
          <li
            role="presentation"
            key={i}
            className={s.item}
            onClick={(e) => addDrow(e.target.innerHTML)}
          >
            <ul className={`${s.list} ${s.category}`}>
              <li className={s.hoverImg}>{data[i].categori}</li>
            </ul>
            <ul className={s.list}>
              <li data={data[i]}>
                { drowRender(data[i].nested_values)}
              </li>
            </ul>
          </li>,
        );
      } else if (data[i].bool) {
        children.push(
          <li className={`${s.item} ${s.hoverImg}`} key={i} value={data[i].name}>
            <span className={s.text}>{data[i].name}</span>
            <span className={s.span}>
              <img
                role="presentation"
                className={s.img}
                onClick={(e) => imageModal(data[i].name, e)}
                value={data[i].name}
                src={data[i].name}
                alt="изображение из категории"
              />
            </span>
          </li>,
        );
      }
    }
    if (status) {
      return (
        <ul className={s.list}>
          {children}
        </ul>
      );
    }
    return (<h5>раскройте дерево</h5>);
  };

  return (
    <div className={s.listPosition}>
      <MyButton click={changeStatus}>древовидный список</MyButton>
      {drowRender(arrayCards)}
      { modalStatus ? (
        <MyModal remove={removeModal}>
          <span className={s.wrapImgModal}>
            <img className={s.imgModal} src={modal} alt="изображение не прогрузилось" />
          </span>
          <div className={s.rightPanelModal} />
        </MyModal>
      ) : <div />}
    </div>
  );
}
