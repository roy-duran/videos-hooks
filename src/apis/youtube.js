import axios from 'axios'

const KEY = 'AIzaSyBOLJ30zrC7P9a2aaxf080S5OmvEzboGkQ'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    }
})