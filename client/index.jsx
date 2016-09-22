import React from 'react';
import { render } from 'react-dom';

// import css
import css from './style/style.css';

// import components
import App from './components/app';
import FrontPage from './components/frontPage';
import PostLists from './components/postLists';
import PostDetail from './components/postDetail';
import PostNew from './components/postNew';

// import react router dependencies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={FrontPage} />
        <Route path="posts/new" component={PostNew} />
        <Route path="posts" component={PostLists} />
        <Route path="posts/:id" component={PostDetail} />
      </Route>
    </Router>
  </Provider>
)


render(router, document.getElementById('root'));

