import axios from "axios";

export const fetchImages = async () => {
    const {data} = await axios.get('https://pixabay.com/api/key=36050321-b79e46b27631ddd2509fd0134');
    return data;
}