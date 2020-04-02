import React from 'react';
import { Provider } from 'react-redux';

import Sidebar from "./components/sidebar/index";
import Video from "./components/video/index";
import ListHooks from './components/ListHooks/index';

//import { Provider } from 'react-redux'; for the new version

import store from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Video/>
        <Sidebar/>
        <ListHooks/>
      </Provider>
    </div>
  );
}

export default App;
