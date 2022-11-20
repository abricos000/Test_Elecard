import React, { useState } from 'react';
import { useLockBodyScroll, useToggle } from 'react-use';
import s from './PageTreeList.module.css';
import { dataHost } from '../../constants/host';
import { Button } from '../Buttons/Button';
import { Modal } from '../Modal/Modal';
import { TreeList } from './TreeList/TreeList';

export const PageTreeList = ({ posts }) => {
  const pref = 'pref';
  const next = 'next';

  const normalizeArray = posts.reduce((newArray, item, index) => {
    const newCategory = {
      bool: false,
      id: item.id,
      category: item.category,
      nested_values: [item],
    };
    newArray[newArray.length - 1].category === item.category
      ? newArray[newArray.length - 1].nested_values.push(item)
      : index === 0
        ? newArray = [newCategory]
        : newArray.push(newCategory);
    return newArray;
  }, [{}]);

  const [arrayTree, setArrayTree] = useState(normalizeArray);
  const [flagTree, setFlagTree] = useToggle(false);
  const [modal, setModal] = useState({ img: '', id: 0 });
  const [showModal, setShowModal] = useToggle(false);

  const handleAddTree = (category) => {
    const sortTreeArray = arrayTree.map((mainBranch) => ({
      ...mainBranch,
      bool: (mainBranch.category === category ? !mainBranch.bool : mainBranch.bool),
    }));
    setArrayTree(sortTreeArray);
  };

  useLockBodyScroll(showModal);

  const handleImageModal = (name, id) => {
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
            onImageModal={handleImageModal}
          />
        )))}
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
