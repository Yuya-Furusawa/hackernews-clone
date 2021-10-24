import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from '../router/AppRouter';

//コンポーネントをレンダリングしている際にエラーが発生するかをテスト
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppRouter />, div);
});