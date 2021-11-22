import './App.css';
import React, { useEffect } from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import Button from './components/Button'
import { studentsViewButtons } from './utils/studentsViewButtons';

import CheckBox from './components/Checkbox'
import NavBar from './components/NavBar'
import ListView from './components/tables/ListView'
import TableView from './components/tables/TableView'

function App() {
  const [isViewActive, setIsViewActive] = useState(new Array(studentsViewButtons.length).fill(false))
  const [studentsView, activeList] = useState(<ListView />)

  // const [IsSortByName, sortByName] = useState()
  // const [IsSortByAge, sortByName] = useState()
  // const [IsSortByGender, sortByName] = useState()


  const setViewActive = (e) => {
    console.log(e)
  }

  // const setListView = () => {
  //   if (!isListActive) {
  //     setIsListActive(!isListActive)
  //     setIsTableActive(!isTableActive)
  //   }
  // }

  // const setTableView = () => {
  //   if (!isTableActive) {
  //     setIsListActive(!isListActive)
  //     setIsTableActive(!isTableActive)
  //   }
  // }


  useEffect((a) => {
    switch (a) {
      case true:
        activeList(<ListView />)
        break
      case false:
        activeList(<TableView />)
        break
      default:
        console.log('No list found')
    }

  }, [isViewActive])

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
                  <div className="form-check">
                    <input className="form-check-input checkbox" type="checkbox" value="FirstName" id="nameSort"></input> First
                    {/* <label className="form-check-label" htmlFor="genderSort">Age</label> */}

                  </div>
                  <div className="form-check">
                    <input className="form-check-input checkbox" type="checkbox" value="" id="genderSort"></input>
                    <label className="form-check-label" htmlFor="genderSort">Age</label>
                  </div>
                  <div className="form-check mb-3">
                    <input className="form-check-input checkbox" type="checkbox" value="" id="ageSort"></input>
                    <label className="form-check-label" htmlFor="ageSort">Gender</label>
                  </div>
                  <button className="btn btn-primary">Sort</button>
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

                    <Button buttons={studentsViewButtons} onClick={() => setViewActive(this.index)} />
                    {/* <Button viewType="table" isActive={isTableActive} onClick={() => setTableView()} /> */}

                  </div>

                </div>
                <hr></hr>
                <div id="student-list" className="row">
                  {studentsView}
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