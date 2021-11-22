import Students from "../../data/Students"
import React, { useEffect, useState } from "react"

const TableView = ({ firstName, age, status }) => {
    const [students, setData] = useState([])

    useEffect(() => {

        Students(firstName, age, status).then(res => {
            setData(res.data)
        })
    }, [firstName, age, status])

    return (
        <>
            {students.map((student) =>
                <React.Fragment key={student.ID}>
                    <div className="col-md-4" style={{ marginBottom: "1rem" }}>
                        <div className="card">
                            <div className="card-body d-flex">
                                <div className="px-2 w">
                                    <div className="fw-bold full-name py-1">{student.FirstName} {student.LastName}</div>
                                    <div>City: {student.City}</div>
                                    <div>State: {student.State}</div>
                                    <div>Gender: {student.Gender}</div>
                                    <div>Status: {student.StudentStatus}</div>
                                    <div>Major: {student.Major}</div>
                                    <div>Country: {student.Country}</div>
                                    <div>Age: {student.Age}</div>
                                    <div>SAT: {student.SAT}</div>
                                    <div>Grade: {student.Grade}</div>
                                    <div>Height: {student.Height}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )}
        </>
    )
}

export default TableView