import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, animateScroll as scroll } from 'react-scroll';
import { useWindowScroll } from 'react-use';
import s from './main.module.css';
import { PageTreeList } from '../PageTreeList/PageTreeList';
import { CardsPage } from '../CardsPage/CardsPage';
import { RenderMethod } from '../../constants/render-method';
import { host } from '../../constants/host';

export const Main = ({ renderMethod }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true);
      axios.get(host).then(({ data }) => {
        const newData = data.map((imageData, index) => ({ ...imageData, id: index }));
        setPosts(newData);
      }).finally(() => {
        setLoading(false);
      });
    };
    getPosts();
  }, []);

  const handleScrollToTop = () => scroll.scrollToTop();

  const { y } = useWindowScroll();

  if (loading) {
    return <h1 className={s.noPost}>loading...</h1>;
  }
  return (
    <main id="top" className={s.mainContent}>
      {posts.length && (
        renderMethod === RenderMethod.cards
          ? (
            <CardsPage
              posts={posts}
              onScrollToTop={handleScrollToTop}
            />
          )
          : <PageTreeList posts={posts} />
      )}

      {(y > 2000) && (
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
