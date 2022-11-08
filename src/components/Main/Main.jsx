import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, animateScroll as scroll } from 'react-scroll';
import { useWindowScroll } from 'react-use';
import s from './main.module.css';
import { PageTreeList } from '../PageTreeList/PageTreeList';
import { CardsPage } from '../CardsPage/CardsPage';
import { RenderMethod } from '../../constants/render-method';

export const Main = ({ renderMethod }) => {
  const requestURL = 'http://contest.elecard.ru/frontend_data/catalog.json';
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [mainPost, setMainPost] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      axios.get(requestURL).then(({ data }) => {
        const newData = data.map((imageData, index) => ({ ...imageData, id: index }));
        setPosts(newData);
        setMainPost(newData);
      }).finally(() => {
        setLoading(false);
      });
    };
    getPosts();
  }, []);

  const handleScrollToTop = () => scroll.scrollToTop();

  const { y } = useWindowScroll();

  return (
    <main id="top" className={s.mainContent}>
      {renderMethod === RenderMethod.cards
        ? (
          <CardsPage
            posts={posts}
            onSetPosts={setPosts}
            onSetLoading={setLoading}
            loading={loading}
            mainPost={mainPost}
            onScrollToTop={handleScrollToTop}
          />
        )
        : <PageTreeList posts={mainPost} /> }
      {(y < 2000) || (
        <button
          type="button"
          className={s.scrollTop}
          onClick={handleScrollToTop}
        >
          <Link to="top" smooth>
            &#9650;
            вверх
          </Link>
        </button>
      )}
    </main>
  );
};
