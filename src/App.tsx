import React, { useState } from 'react'
import { Route, BrowserRouter as Router, Link } from 'react-router-dom'
import { global } from './global'
import Content from './Pages/Content'
import './assets/css/style2019.scss'
function App() {
  const positionArr = global.positionArr;
  const [position, setPosition] = useState(positionArr);
  const goNav = (res: any, index: number) => {
    let newPosition = JSON.parse(JSON.stringify(position))
    for (let i in newPosition) {
      newPosition[i].active = false;
    }
    newPosition[index].active = true;
    setPosition(newPosition)
  }
  return (
    <div>
      <Router>
        <div className="topBar">
          <div className="navBar">
            <div className="wrapper">
              <ul style={{ overflow: 'hidden' }}>
                {position.map((item: any, index: number) => {
                  return (
                    <li onClick={() => goNav(item, index)} className={item.active ? 'active' : ''} key={index}>
                      {item.name}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
        <Route path="/" exact component={Content} />
        {/* <Route path="/list/" component={List} /> */}
      </Router>
    </div>
  )

}

export default App
