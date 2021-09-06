import axios from 'axios'
function getChannel(key) {
    return axios.get(`${process.env.VUE_APP_BASE_URL}/youtube/v3/channels?part=snippet&part=contentDetails&part=statistics&part=id&id=${key}&key=${process.env.VUE_APP_API_KEY}`
    );

}
function getChannelPlayList(key) {
    return axios.get(`${process.env.VUE_APP_BASE_URL}/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=${key}&maxResults=25&key=${process.env.VUE_APP_API_KEY}`
    );

}
export const chanelService = {
    getChannel, getChannelPlayList
}
