import React, { useState } from 'react';
import s from './cardsPage.module.css';
import { Pogination } from '../Pagination/Pagination';
import { Cards } from '../Cards/Cards';
import { SortCardsPage } from './SortCardsPage/SortCardsPage';
import { clearRemovedCards, getRemovedCardList, setRemovedCard } from '../utils/removed-cars';
import { numberOfPostsPerPage } from '../../constants/number-of-posts-per-page';

export function CardsPage({
  onPosts, onSetPosts, onMainPost, onloading,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(numberOfPostsPerPage.amount);
  const [selectedSort, setSelectedSort] = useState('');
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPost = onPosts.slice(firstPostIndex, lastPostIndex);

  const handlePaginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(onPosts.length / postsPerPage)) {
      setCurrentPage((pref) => pref + 1);
    }
  };
  const handlePrefPage = () => {
    if (currentPage > 1) {
      setCurrentPage((pref) => pref - 1);
    }
  };

  const removePost = (post) => {
    onSetPosts(onPosts.filter((p) => p.id !== post.id));
    setRemovedCard(post);
  };

  const handleSortPost = (sort) => {
    setSelectedSort(sort);
    onSetPosts((prevPosts) => {
      const newPosts = [...prevPosts];
      const sortFunction = sort === 'category'
        ? (a, b) => a[sort].localeCompare(b[sort])
        : (a, b) => (a[sort] > b[sort] ? -1 : b[sort] > a[sort] ? 1 : 0);
      return newPosts.sort(sortFunction);
    });
  };

  const handleAddAllCards = () => {
    onSetPosts(onMainPost);
  };

  const handleShowDeletedCards = () => {
    const deletedCards = getRemovedCardList();
    if (deletedCards.length) {
      onSetPosts(deletedCards);
    }
  };

  const removeShowDeletedCards = () => {
    clearRemovedCards();
    onSetPosts(onMainPost);
  };

  if (onloading) {
    return <h2 className={s.noPost}>loading... </h2>;
  }

  return (
    <div>
      <SortCardsPage
        onAddAllCards={handleAddAllCards}
        onShowDeletedCards={handleShowDeletedCards}
        onRemoveShowDeletedCards={removeShowDeletedCards}
        onSortPost={handleSortPost}
      />
      {currentPost.length
        ? <Cards onCurrentPost={currentPost} onRemove={removePost} />
        : <h2 className={s.noPost}>Картинок нет</h2>}
      <Pogination
        onNextPage={handleNextPage}
        onPrefPage={handlePrefPage}
        onCurrentPost={currentPost}
        onPostsPerPage={postsPerPage}
        onTotalPosts={onPosts.length}
        onPaginate={handlePaginate}
      />
    </div>
  );
}
