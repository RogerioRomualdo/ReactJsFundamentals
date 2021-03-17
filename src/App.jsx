import "./App.css"
import React from 'react'

import Card from './components/layout/Card'
import Primeiro from './components/basics/firstComponent'
import ComParametros from './components/basics/withParameter'
import ComFilhos from './components/basics/withChildren'
import Repetição from './components/basics/repetition'
import Condicional from './components/basics/conditional'

export default props => 
  <div className="App"> 
    <Card title="First component">
        <Primeiro/>
    </Card>
    <Card title="Component with parameters">
        <ComParametros title="This is the tittle" subtitle="This is the subtitle"/>
    </Card>
    <Card title="Component with children">
        <ComFilhos>
            <ul>
                <li>Ana</li>
                <li>Bia</li>
                <li>Carlos</li>
                <li>Daniel</li>
            </ul>
        </ComFilhos>
    </Card>
    <Card title="Repetition component">
        <Repetição/>
    </Card>
    <Card title="Conditional component">
        <Condicional number={9}></Condicional>
    </Card>
  </div>