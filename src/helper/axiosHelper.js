import axios from 'axios'
const apiEp = `http://localhost:8000/user`
// send

export const postUser =async (obj) => {
    try {
        const {data} = await axios.post(apiEp, obj)
        return data;
    } catch (error) {

        return{
            status:"error",
            message: error.message
        }
        
    }
}
//get

//update

//delete