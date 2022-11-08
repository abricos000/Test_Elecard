import React, { useEffect, useState } from 'react';
import s from './cardsPage.module.css';
import { Pagination } from '../Pagination/Pagination';
import { Cards } from '../Cards/Cards';
import { SortCardsPage } from './SortCardsPage/SortCardsPage';
import { clearRemovedCards, getRemovedCardList, setRemovedCard } from '../utils/removed-cars';
import { numberOfPostsPerPage } from '../../constants/number-of-posts-per-page';

export const CardsPage = ({
  posts, onSetPosts, mainPost, loading, onScrollToTop,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(numberOfPostsPerPage.amount);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const postList = posts.slice(firstPostIndex, lastPostIndex);
  const listPageNumbers = [];

  for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
    if (i === 1) {
      listPageNumbers.push({ number: i, status: true });
    } else listPageNumbers.push({ number: i, status: false });
  }

  const [pageNumbers, setPageNumbers] = useState([]);

  useEffect(() => {
    setPageNumbers(listPageNumbers);
  }, [listPageNumbers.length]);

  const handlePaginate = (pageNumber) => {
    setCurrentPage(pageNumber);

    onScrollToTop();

    setPageNumbers(pageNumbers.map((e) => {
      if (pageNumber === e.number) {
        return ({ number: e.number, status: true });
      }
      return ({ number: e.number, status: false });
    }));
  };

  const removePost = (post) => {
    onSetPosts(posts.filter((p) => p.id !== post.id));
    setRemovedCard(post);
  };

  const handleSortPost = (sort) => {
    onSetPosts((prevPosts) => {
      const newPosts = [...prevPosts];
      const sortFunction = sort === 'category'
        ? (a, b) => a[sort].localeCompare(b[sort])
        : (a, b) => (a[sort] > b[sort] ? -1 : b[sort] > a[sort] ? 1 : 0);
      return newPosts.sort(sortFunction);
    });
  };

  const handleAddAllCards = () => {
    onSetPosts(mainPost);
  };

  const handleShowDeletedCards = () => {
    const deletedCards = getRemovedCardList();
    if (deletedCards.length) {
      onSetPosts(deletedCards);
    }
  };

  const removeShowDeletedCards = () => {
    clearRemovedCards();
    onSetPosts(mainPost);
  };

  if (loading) {
    return <h2 className={s.noPost}>loading... </h2>;
  }

  return (
    <div>
      <div className={s.cardPage}>
        {postList.length
          ? (
            <Cards
              key={postList[0] ? postList[0].id : 0}
              postList={postList}
              onClose={removePost}
            />
          )
          : <h2 className={s.noPost}>Картинок нет</h2>}

        <SortCardsPage
          quantityPosts={posts.length}
          onAddAllCards={handleAddAllCards}
          onShowDeletedCards={handleShowDeletedCards}
          removeShowDeletedCards={removeShowDeletedCards}
          onSortPost={handleSortPost}
        />
      </div>
      <Pagination
        pageNumbers={pageNumbers}
        onPaginate={handlePaginate}
      />
    </div>
  );
};
