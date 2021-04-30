import { useState, useEffect } from 'react';
import { getStories } from './../utils/apis';

//カスタムフック
const useDataFetcher = (type) => {
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getStories(type)
      .then((stories) => {
        setIsLoading(false);
        setStories(stories);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [type]);

  return { isLoading, stories };
};

export default useDataFetcher;