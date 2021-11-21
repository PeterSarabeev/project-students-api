export const sortStudents = (students, category) => {
    const { firstName, age, gender } = category
    return students.sort((a, b) => {
        
        const sortByFirstName = firstName === 'true' ? a.FirstName[0].localeCompare(b.FirstName[0]) : 0
        const sortByGender = gender === 'true' ? a.Gender.localeCompare(b.Gender) : 0
        const sortByAge = age === 'true' ? a.Age - b.Age : 0

        return sortByFirstName || sortByAge || sortByGender
    })
}
