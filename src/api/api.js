import axios from 'axios';

const API_KEY = 'AIzaSyDLHntWDYBbLd6azpv0lRZfiquHbN7qCas'


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        maxResults: 2,
        key: API_KEY
    }
})