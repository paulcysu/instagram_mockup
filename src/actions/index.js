import axios from 'axios';

export function getPhotos() {
    return (dispatch) => {
        axios.get('http://localhost:3000/data')
        .then(response => {
            console.log(response);
            dispatch({
                type: "GET_PHOTOS",
                payload: response.data
            })
        })
        .catch(err => console.log(err))
    }
}