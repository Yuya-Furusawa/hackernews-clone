import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import styled from 'styled-components';

import Story from './Story';
import { getStories } from './../utils/apis';

const ShowStories = ({ type }) => {
  const [hasMore, setHasMore] = useState(false);
  const [newsList, setNewsList] = useState([]);

  const loadMore = () => {
    getStories(type ? type : 'top', newsList.length+30)
    .then((stories) => {
      console.log(stories.length);
      if (stories.length > 100){
        setHasMore(false);
        return;
      }
      setNewsList([...stories]);
    })
    .catch(err => console.error(err));
  };

  const loader = <Message key={0}>Loading...</Message>;

  useEffect(() => {
    const f = async () => {
      const stories = await getStories(type ? type : 'top', 10);
      console.log("useEffect!");
      setNewsList([...stories]);
      setHasMore(true);
    };
    f();
  }, [type]);

  return(
    <>
      <InfiniteScroll
        pageStart={0}
        loadMore={() => loadMore()}
        hasMore={hasMore}
        loader={loader}
        useWindow={false}
      >
        {newsList.map(({ data: story }) => (
          //storiesの要素の１つのdataにstoryと名前をつける
          <Story key={story.id} story={story} />
        ))}
      </InfiniteScroll>
    </>
  );
};

export default ShowStories;

const Message = styled.div`
  position: relative;
  transform: translate(-5%, -5%);
  font-size: 20px;
  top: 50%;
  left: 50%;
  color: #fff;
`;