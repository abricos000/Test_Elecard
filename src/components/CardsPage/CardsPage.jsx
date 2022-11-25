import React, { useEffect, useState } from 'react';
import s from './CardsPage.module.css';
import { Pagination } from '../Pagination/Pagination';
import { Cards } from '../Cards/Cards';
import { SortCardsPage } from './SortCardsPage/SortCardsPage';
import { clearRemovedCards, getRemovedCardList, setRemovedCard } from '../../utils/removed-cards';
import { numberPostsPerPage } from '../../constants/number-of-posts-per-page';
import { getCardList, setCardList, clearCards } from '../../utils/cards';

export const CardsPage = ({ posts, onScrollToTop }) => {
  const [cards, setCards] = useState(getCardList().length ? getCardList() : posts);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(numberPostsPerPage);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const postList = cards.slice(firstPostIndex, lastPostIndex);

  const filledArray = Array(Math.ceil(cards.length / postsPerPage)).fill();
  const listPageNumbers = filledArray.map((_, index) => (
    { number: index + 1, status: index === 0 }
  ));

  const [pageNumbers, setPageNumbers] = useState([]);

  useEffect(() => {
    setPageNumbers(listPageNumbers);
  }, [listPageNumbers.length]);

  const handlePaginate = (currentPageNumber) => {
    setCurrentPage(currentPageNumber);
    onScrollToTop();
    setPageNumbers(pageNumbers.map((pageNumber) => (
      { number: pageNumber.number, status: currentPageNumber === pageNumber.number })));
  };

  const removePost = (post) => {
    setCards((prefCards) => prefCards.filter((p) => p.id !== post.id));
    setCardList(cards.filter((p) => p.id !== post.id));
    setRemovedCard(post);
  };

  const handleAddAllCards = () => {
    setCards(posts);
    clearRemovedCards();
    clearCards();
  };

  const handleShowDeletedCards = () => {
    const deletedCards = getRemovedCardList();
    setCards(deletedCards);
  };

  const removeShowDeletedCards = () => {
    clearRemovedCards();
    setCards(getCardList().length ? getCardList() : posts);
  };

  const handleBackToCards = () => {
    setCards(getCardList().length ? getCardList() : posts);
  };

  return (
    <div>
      <div className={s.cardPage}>
        {postList.length
          ? (
            <Cards
              key={postList[numberPostsPerPage] ? postList[numberPostsPerPage].id : 0}
              postList={postList}
              onClose={removePost}
            />
          )
          : <h2 className={s.noPost}>Картинок нет</h2>}

        <SortCardsPage
          onBackToCards={handleBackToCards}
          quantityPosts={cards.length}
          onAddAllCards={handleAddAllCards}
          onShowDeletedCards={handleShowDeletedCards}
          removeShowDeletedCards={removeShowDeletedCards}
          setCards={setCards}
        />
      </div>
      <Pagination
        pageNumbers={pageNumbers}
        onPaginate={handlePaginate}
      />
    </div>
  );
};
