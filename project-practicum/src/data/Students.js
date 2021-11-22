import axios from 'axios';

const Students = async (firstName, age, status) => {
    const result = await axios(`http://localhost:8080/students?firstName=${firstName}&age=${age}&status=${status}`)
    return result;
}

export default Students