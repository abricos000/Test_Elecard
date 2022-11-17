import React, { useState } from 'react';
import { useLockBodyScroll, useToggle } from 'react-use';
import { dataHost } from '../../constants/host';
import { Button } from '../Buttons/Button';
import { Modal } from '../Modal/Modal';
import s from './pageTreeList.module.css';
import { TreeList } from './TreeList/TreeList';

export const PageTreeList = ({ posts }) => {
  const pref = 'pref';
  const next = 'next';

  const arrayMap = posts.map((el) => el.category);
  const arrayCategories = [...new Set(arrayMap)];

  const handleNormalizeArray = (arr, arrCateg, categ) => {
    const arrСonvers = [];

    for (let i = 0; i < arrCateg.length; i++) {
      let j = 0;
      if (arr[i].category === arrCateg[j]) {
        j++;
        arrСonvers.push(
          {
            id: i,
            category: arrCateg[i],
            nested_values: handleNormalizeArray(arr, arr, arrCateg[i]),
          },
        );
      } else if (categ === arr[i].category) {
        arrСonvers.push(

          {
            id: arr[i].id,
            bool: false,
            category: arr[i].category,
            name: `${dataHost}${arr[i].image}`,
          },
        );
      }
    }
    return arrСonvers;
  };

  const array = handleNormalizeArray(posts, arrayCategories);

  const [arrayTree, setArrayTree] = useState(array);
  const [flagTree, setFlagTree] = useToggle(false);
  const [modal, setModal] = useState({ img: '', id: 0 });
  const [showModal, setShowModal] = useToggle(false);

  const handleAddTree = (category) => {
    let newArr = [];
    const sortTreeArray = arrayTree.map((elementGeneralArray) => {
      if (elementGeneralArray.category === category) {
        newArr = elementGeneralArray.nested_values.map((elementCategoryArray) => (
          {
            id: elementCategoryArray.id,
            bool: !elementCategoryArray.bool,
            category: elementCategoryArray.category,
            name: elementCategoryArray.name,
          }
        ));
      } else {
        newArr = elementGeneralArray.nested_values;
      }
      return (
        {
          category: elementGeneralArray.category,
          nested_values: newArr,
        });
    });
    setArrayTree(sortTreeArray);
  };

  useLockBodyScroll(showModal);

  const handleImageModal = (name, id) => {
    setModal({ img: name, id });
    setShowModal();
  };

  const handleSwitchingModalImage = (id, value) => {
    const currentIndex = posts.findIndex((post) => post.id === id);

    if (id > 0 && value === pref) {
      const currentPost = posts.find((post, index) => index === currentIndex - 1);
      setModal({ img: `${dataHost}${currentPost.image}`, id: currentPost.id });
    }

    if (id < posts.length - 1 && value === next) {
      const currentPost = posts.find((post, index) => index === currentIndex + 1);
      setModal({ img: `${dataHost}${currentPost.image}`, id: currentPost.id });
    }
  };

  return (
    <div className={s.listPosition}>

      <Button onClick={setFlagTree}>древовидный список</Button>

      <TreeList
        arrayTree={arrayTree}
        onAddTree={handleAddTree}
        flagTree={flagTree}
        onImageModal={handleImageModal}
      />
      { showModal && (
        <Modal onClose={setShowModal}>
          <span className={s.wrapImgModal}>
            <div className={s.btns}>
              <button
                value={pref}
                className={s.btnPref}
                onClick={(event) => handleSwitchingModalImage(modal.id, event.target.value)}
                type="button"
              >
                &#10094;
              </button>

              <button
                value={next}
                className={s.btnNext}
                onClick={(event) => handleSwitchingModalImage(modal.id, event.target.value)}
                type="button"
              >
                &#10095;
              </button>
            </div>
            <img className={s.imgModal} src={modal.img} alt="изображение из категории, которое выводится в модальное окно" />
          </span>
          <div className={s.rightPanelModal} />
        </Modal>
      )}
    </div>
  );
};
