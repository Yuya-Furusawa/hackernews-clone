import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const Loader = (props) => {
  //divタグのHTML要素を作成
  const [node] = useState(document.createElement('div'));
  //id=loaderのHTML要素を取得
  const loader = document.querySelector('#loader');

  useEffect(() => {
    //loaderにnode（divタグ）を追加しmessageというクラスを与える
    loader.appendChild(node).classList.add('message');
  }, [loader, node]);

  useEffect(() => {
    if (props.show){
      loader.classList.remove('hide');
      document.body.classList.add('loader-open');
    } else {
      loader.classList.add('hide');
      document.body.classList.remove('loader-open');
    }
  }, [loader, props.show]);

  //nodeにchildrenをレンダリングする
  return ReactDOM.createPortal(props.children, node);
};

export default Loader;