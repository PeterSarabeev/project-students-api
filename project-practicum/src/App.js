import './App.css';
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import Button from './components/Button'
import { views } from './utils/views';

import CheckBox from './components/Checkbox'
import { checkBoxes } from './utils/checkBoxes';

import NavBar from './components/NavBar'
import ListView from './components/tables/ListView'
import TableView from './components/tables/TableView'

function App() {

  const [activeView, setActiveView] = useState(views[0])
  const [checkedState, setCheckBoxes] = useState(new Array(checkBoxes.length).fill(false))

  const renderCheckBoxes = () => {
    return checkBoxes.map((checkBox, index) => {
      return <CheckBox key={index} label={checkBox.label} checked={checkedState[index]} onChange={() => handleCheckBoxesState(index)} />
    })
  }

  const handleCheckBoxesState = (pos) => {
    setCheckBoxes(checkedState.map((checkBox, index) =>
      index === pos ? !checkBox : checkBox)
    )
  }

  const renderButtons = () => {
    return views.map((view, index) => {
      return <Button key={index} viewType={view.viewType} icon={view.icon} activeView={activeView.viewType} onClick={() => switchView(index)} />
    })
  }

  const switchView = (index) => {
    setActiveView(views[index])
    console.log(checkedState[2])
  }


  const renderView = () => {
    return activeView.viewType === 'list'
      ? <ListView firstName={checkedState[0]} age={checkedState[1]} status={checkedState[2]} />
      : <TableView firstName={checkedState[0]} age={checkedState[1]} status={checkedState[2]} />
  }
  return (
    <>
      <NavBar />

      <div id="main-container">
        <div className="row mx-auto">
          <div className="col-7 col-md-2">
            <div className="search-box mt-2 mt-md-0 sticky-top" style={{ top: "5rem" }}>
              <div className="card">
                <div className="card-body">
                  <p>Sort by:</p>
                  {renderCheckBoxes()}
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card mt-2 mt-md-0">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h5 className="card-title">Students List</h5>
                  <div className="btn-group" role="group" aria-label="Switch view">
                    {renderButtons()}
                  </div>
                </div>
                <hr></hr>
                <div id="student-list" className="row">
                  {renderView()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App