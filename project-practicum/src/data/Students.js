import axios from 'axios';

const Students = async (firstName, age, gender) => {
    const result = await axios(`http://localhost:8080/students?firstName=${firstName}&age=${age}&gender${gender}`)
    return result;
}

export default Students