import React, { useEffect, useState } from 'react';
import axios from 'axios';
import s from './main.module.css';
import { PageTreeList } from '../PageTreeList/PageTreeList';
import { CardsPage } from '../CardsPage/CardsPage';
import { RenderMethod } from '../../constants/render-method';

export function Main({ onRenderMethod }) {
  const requestURL = 'http://contest.elecard.ru/frontend_data/catalog.json';
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);// идентификатор закрузки
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

  return (
    <main className={s.mainContent}>
      {onRenderMethod === RenderMethod.cards ? (
        <CardsPage
          onPosts={posts}
          onSetPosts={setPosts}
          onSetLoading={setLoading}
          onLoading={loading}
          onMainPost={mainPost}
        />
      ) : (
        <PageTreeList posts={posts} />
      )}
    </main>
  );
}
