import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const savePost = async (payload) => {
    try {
        const response = await axios.post(`${API_URL}/post`, payload);
        return response.data;
    } catch (error) {
        console.error('Error saving post:', error.message);
        return error.response ? error.response.data : { error: 'Unknown error occurred' };
    }
}

export const getAllPosts = async () => {
    try {
        const response = await axios.get(`${API_URL}/posts`);
        return response.data;
    } catch (error) {
        console.error('Error retrieving posts:', error.message);
        return error.response ? error.response.data : { error: 'Unknown error occurred' };
    }
}
