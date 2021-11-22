import Students from "../../data/Students"
import React, { useState, useEffect } from "react"

const ListView = ({ firstName, age, status }) => {

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
                    <div className="d-flex py-1">
                        <div className="px-3 flex-grow-1">
                            <div className="d-flex align-items-start justify-content-between">
                                <div>
                                    <span className="fw-bold full-name">{student.FirstName} {student.LastName}</span>
                                </div>
                                <div>
                                    <span>{student.Gender}</span>
                                </div>
                            </div>
                            <div className="student-overview pt-3">Student, age {student.Age}, living in {student.City}, {student.Country}. <br></br> Currently is {student.StudentStatus} {student.StudentStatus === 'Graduate' ? <>in</> : <>studying</>} {student.Major} with average grade of {student.Grade} out of 100.</div>
                        </div>
                    </div>
                    <hr className="my-1 mb-1"></hr>
                </React.Fragment>
            )}
        </>
    )
}

export default ListView