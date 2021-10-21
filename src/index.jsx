import React from 'react';
import { render } from 'react-dom';
import './style.css';

import Klikatko from './components/klikatko';
import Stavitko from './components/stavitko';

const App = () => (
  <>
    <h1>Šestá lekce</h1>
    {/* <Klikatko /> */}
    <Stavitko />
  </>
);

render(<App />, document.querySelector('#app'));
