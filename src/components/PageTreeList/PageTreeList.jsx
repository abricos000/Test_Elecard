import React, { useState } from 'react';
import { useLockBodyScroll, useToggle } from 'react-use';
import s from './PageTreeList.module.css';
import { dataHost } from '../../constants/host';
import { Button } from '../Buttons/Button';
import { Modal } from '../Modal/Modal';
import { TreeList } from './TreeList/TreeList';

const pref = 'pref';
const next = 'next';

export const PageTreeList = ({ posts }) => {
  const normalizeArray = posts.reduce((newArray, item) => {
    newArray[item.category]
      ? newArray[item.category].nestedValues.push(item)
      : newArray[item.category] = {
        bool: false,
        id: item.id,
        category: item.category,
        nestedValues: [item],
      };
    return newArray;
  }, {});

  const [arrayTree, setArrayTree] = useState(Object.values(normalizeArray));
  const [flagTree, setFlagTree] = useToggle(false);
  const [modal, setModal] = useState({ img: '', id: 0 });
  const [showModal, setShowModal] = useToggle(false);

  const handleAddTree = (category) => {
    setArrayTree((prefArray) => prefArray.map((mainBranch) => ({
      ...mainBranch,
      bool: (mainBranch.category === category ? !mainBranch.bool : mainBranch.bool),
    })));
  };

  useLockBodyScroll(showModal);

  const handleClickImageModal = (name, id) => {
    setModal({ img: `${dataHost}${name}`, id });
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
      {flagTree && arrayTree.map((elementArray) => (
        (
          <TreeList
            key={elementArray.id}
            elementArray={elementArray}
            onAddTree={handleAddTree}
            onClickImageModal={handleClickImageModal}
          />
        )))}
      { showModal && (
        <Modal onClose={setShowModal}>
          <span className={s.wrapImgModal}>
            <div className={s.btns}>
              <button
                className={s.btnPref}
                onClick={() => handleSwitchingModalImage(modal.id, pref)}
                type="button"
              >
                &#10094;
              </button>
              <button
                className={s.btnNext}
                onClick={() => handleSwitchingModalImage(modal.id, next)}
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
