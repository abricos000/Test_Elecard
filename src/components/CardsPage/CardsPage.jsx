import React, { useState } from 'react';
import s from './cardsPage.module.css';
import { Pogination} from '../Pagination/Pagination';
import { Cards } from '../Cards/Cards';
import { SortCardsPage } from './SortCardsPage/SortCardsPage';
import { clearRemovedCards, getRemovedCardList, setRemovedCard } from '../utils/removed-cars';
import { numberOfPostsPerPage } from '../../constants/number-of-posts-per-page';

// const deletePosts = [];

export function CardsPage({
  // loading
  onPosts, onSetPosts, onMainPost, onloading,
}) {
  const [currentPage, setCurrentPage] = useState(1);// на какой странице сейчас
  const [postsPerPage] = useState(numberOfPostsPerPage.amount);
  const [selectedSort, setSelectedSort] = useState('');
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPost = onPosts.slice(firstPostIndex, lastPostIndex);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(onPosts.length / postsPerPage)) {
      setCurrentPage((pref) => pref + 1);
    }
  };
  const prefPage = () => {
    if (currentPage > 1) {
      setCurrentPage((pref) => pref - 1);
    }
  };

  const removePost = (post) => {
    onSetPosts(onPosts.filter((p) => p.id !== post.id));
    setRemovedCard(post);
  };

  const sortPost = (sort) => {
    setSelectedSort(sort);
    onSetPosts((prevPosts) => {
      const newPosts = [...prevPosts];
      const sortFunction = sort === 'category'
        ? (a, b) => a[sort].localeCompare(b[sort])
        : (a, b) => (a[sort] > b[sort] ? -1 : b[sort] > a[sort] ? 1 : 0);
      return newPosts.sort(sortFunction);
    });
  };

  const addAllCards = () => {
    onSetPosts(onMainPost);
  };

  const showDeletedCards = () => {
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
        onAddAllCards={addAllCards}
        onShowDeletedCards={showDeletedCards}
        onRemoveShowDeletedCards={removeShowDeletedCards}
        onSortPost={sortPost}
      />
      {currentPost.length
        ? <Cards onCurrentPost={currentPost} onRemove={removePost} />
        : <h2 className={s.noPost}>Картинок нет</h2>}
      <Pogination
        onNextPage={nextPage}
        onPrefPage={prefPage}
        onCurrentPost={currentPost}
        onPostsPerPage={postsPerPage}
        onTotalPosts={onPosts.length}
        onPaginate={paginate}
      />
    </div>
  );
}
