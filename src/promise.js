import Axios from 'axios';

export const getDataFromApi = url => {
    return Axios.get(url)
        .then(({ data }) => {
            return data;
        });
}