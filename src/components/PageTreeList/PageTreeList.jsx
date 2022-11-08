import React, { useState, useEffect } from 'react';
import { useLockBodyScroll, useToggle } from 'react-use';
import { MyButton } from '../MyButtons/MyButton';
import { MyModal } from '../MyModal/MyModal';
import s from './pageTreeList.module.css';

export const PageTreeList = ({ posts }) => {
  const arrayMap = posts.map((el) => el.category);
  const arrayCategorys = [...new Set(arrayMap)];

  const handleArrayСonversion = (arr, arrCateg, categ = '13') => {
    const arrСonvers = [];

    for (let i = 0; i < arrCateg.length; i++) {
      let j = 0;
      if (arr[i].category === arrCateg[j]) {
        j++;
        arrСonvers.push(
          {
            categori: arrCateg[i],
            nested_values: handleArrayСonversion(arr, arr, arrCateg[i]),
          },
        );
      } else if (categ === arr[i].category) {
        arrСonvers.push(

          {
            id: i,
            bool: false,
            categorii: arr[i].category,
            name: `http://contest.elecard.ru/frontend_data/${arr[i].image}`,
          },
        );
      }
    }
    return arrСonvers;
  };

  const array = handleArrayСonversion(posts, arrayCategorys);
  const [arrayCards, setArrayCards] = useState(array);

  useEffect(() => {
    setArrayCards(array);
  }, [array.length]);

  const [status, setStatus] = useState(false);

  const handleAddTree = (e) => {
    let newArr = [];
    const sortTreeArray = arrayCards.map((el) => {
      if (el.categori === e) {
        newArr = el.nested_values.map((elem) => (
          {
            id: elem.id,
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

  const handleChangeStatus = () => {
    setStatus(!status);
  };

  const [modal, setModal] = useState({ img: '', id: 0 });
  const [modalStatus, setModalStatus] = useState(false);
  const [locked, toggleLocked] = useToggle(false);
  useLockBodyScroll(locked);

  const handleImageModal = (i, id) => {
    toggleLocked();
    setModal({ img: i, id });
    setModalStatus(true);
  };

  const handleSwitchingModalImage = (id, value) => {
    if (id > 0 && value === 'pref') {
      const pref = posts.filter((p) => p.id === id - 1);
      setModal({ img: `http://contest.elecard.ru/frontend_data/${pref[0].image}`, id: id - 1 });
    }
    if (id < posts.length - 1 && value === 'next') {
      const next = posts.filter((p) => p.id === id + 1);
      setModal({ img: `http://contest.elecard.ru/frontend_data/${next[0].image}`, id: id + 1 });
    }
  };

  const removeModal = () => {
    setModalStatus(false);
    toggleLocked();
  };

  const handleTreeRender = (data) => {
    const children = [];

    for (let i = 0; i < data.length; i++) {
      if ((typeof (data[i].nested_values) === 'object') && (status)) {
        children.push(
          <li
            role="presentation"
            key={i}
            className={s.item}
            onClick={(e) => handleAddTree(e.target.innerHTML)}
          >
            <ul className={`${s.list} ${s.category}`}>
              <li className={s.hoverImg}>{data[i].categori}</li>
            </ul>
            <ul className={s.list}>
              <li data={data[i]}>
                { handleTreeRender(data[i].nested_values)}
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
                onClick={() => handleImageModal(data[i].name, data[i].id)}
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
    return (<h5 style={{ color: '#6F1' }}>раскройте дерево</h5>);
  };

  return (
    <div className={s.listPosition}>
      <MyButton click={handleChangeStatus}>древовидный список</MyButton>
      {handleTreeRender(arrayCards)}
      { modalStatus && (
        <MyModal onClose={removeModal}>
          <span className={s.wrapImgModal}>
            <div className={s.btns}>
              <button
                value="pref"
                className={s.btnPref}
                onClick={(e) => handleSwitchingModalImage(modal.id, e.target.value)}
                type="button"
              >
                &#10094;
              </button>

              <button
                value="next"
                className={s.btnNext}
                onClick={(e) => handleSwitchingModalImage(modal.id, e.target.value)}
                type="button"
              >
                &#10095;
              </button>
            </div>

            <img className={s.imgModal} src={modal.img} alt="изображение не прогрузилось" />
          </span>
          <div className={s.rightPanelModal} />
        </MyModal>
      )}
    </div>
  );
};
