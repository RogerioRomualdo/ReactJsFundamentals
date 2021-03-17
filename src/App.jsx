import "./App.css"
import React from 'react'

import Card from './components/layout/Card'
import Primeiro from './components/basics/firstComponent'
import ComParametros from './components/basics/withParameter'
import ComFilhos from './components/basics/withChildren'
import Repetição from './components/basics/repetition'
import Condicional from './components/basics/conditional'
import Parent from './components/communication/direct/parent'
import Super from './components/communication/indirect/super'
import Input from "./components/form/input"
import Counter from './components/counter/counter'
import Lottery from './components/lottery/lottery'

export default props => 
  <div className="App">
    <h1>React Fundamentals</h1> 
    <div className="Cards">
            <Card title="First Component" color="#588C73">
                <Primeiro/>
            </Card>
            <Card title="Component with Parameters" color="#F2E394">
                <ComParametros title="This is the tittle" subtitle="This is the subtitle"/>
            </Card>
            <Card title="Component with Children" color="#F2AE72">
                <ComFilhos>
                    <ul>
                        <li>Ana</li>
                        <li>Bia</li>
                        <li>Carlos</li>
                        <li>Daniel</li>
                    </ul>
                </ComFilhos>
            </Card>
            <Card title="Repetition Component" color="#D96459">
                <Repetição/>
            </Card>
            <Card title="Conditional Component" color="#8C4646">
                <Condicional number={9}/>
            </Card>
            <Card title="Direct Communication" color="#FA6900">
                <Parent surname="Romualdo"/>
            </Card>
            <Card title="Indirect Communication" color="#E94C6F">
                <Super/>
            </Card>
            <Card title="Input" color="#145DA0">
                <Input/>
            </Card>
            <Card title="Counter" color="#B1D4E0">
                <Counter step={1}/>
            </Card>
            <Card title="Mega Sena" color="#FFCD58">
                <Lottery qtdNum={8}/>
            </Card>
    </div>
  </div>