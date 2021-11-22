export const sortStudents = (students, category) => {
    const { firstName, age, status } = category
    return students.sort((a, b) => {
        
        const sortByFirstName = firstName === 'true' ? a.FirstName[0].localeCompare(b.FirstName[0]) : 0
        const sortByAge = age === 'true' ? a.Age - b.Age : 0
        const sortByStatus = status === 'true' ? a.StudentStatus.localeCompare(b.StudentStatus) : 0

        return sortByFirstName || sortByAge || sortByStatus
    })
}
