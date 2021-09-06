import axios from 'axios'
function searchYoutube(key) {
    return axios.get(`${process.env.VUE_APP_BASE_URL}/youtube/v3/search?part=snippet&maxResults=25&q=${key}&key=${process.env.VUE_APP_API_KEY}`
    );

}
export const searchService = {
    searchYoutube
}