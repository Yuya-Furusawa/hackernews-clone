import axios from 'axios';
import { BASE_API_URL } from './constants';

const getStory = async (id) => {
  try {
    const story = await axios.get(`${BASE_API_URL}/item/${id}.json`);
    return story;
  } catch (err){
    console.error(err);
  }
};

export const getStories = async (type, num) => {
  try {
    //type storyに含まれる記事のidを取ってくる
    //取得してきたdataにstoryIdsという名前をつけてる
    const { data: storyIds } = await axios.get(`${BASE_API_URL}/${type}stories.json`);
    //idからその詳細を取ってくる
    const stories = await Promise.all(storyIds.slice(0, num).map((storyId) => getStory(storyId)));
    return stories;
  } catch (err){
    console.error(err);
  }
};