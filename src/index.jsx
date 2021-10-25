import React from 'react';
import { render } from 'react-dom';
import './style.css';

import Klikatko from './components/klikatko';
import Stavitko from './components/stavitko';
import Pocitadlo from './components/Pocitadlo';

const App = () => (
  <>
    <h1>Šestá lekce</h1>
    {/* <Klikatko /> */}
    {/* <Stavitko /> */}
    <Pocitadlo start={0} step={1}/> 
    <Pocitadlo start={10} step={5}/>
    <Pocitadlo start={120} step={10}/> {/* můžu určit, kde bude začínat, nemusí být 0. pak ale tu prop musím posílat do komponenty a tam ji přijímat => const Pocitadlo = ({start}) a pak tu prop můžu dát místo 0, kterou mám jako výchozí hodnotu u funkce useState 
    
    nebo můžu přidat prop step, kterou budu říkat, o kolik se má zvětšit číslo při kliknutí => tu pak zase přidám do komponenty Počitadlo jako prop a zároveň do fce setPocet, kde jím nahradím tu původní jedničku, o kterou se zvětšovalo dřív*/}

  </>
);

render(<App />, document.querySelector('#app'));
