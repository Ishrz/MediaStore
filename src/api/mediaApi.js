import axios from 'axios'

const UNSPLASH_KEY=import.meta.env.VITE_UNSPLASH_APIKEY
const PEXELS_KEY = import.meta.env.VITE_PEXEL_APIKEY

export const FetchPhotos= async(query,page=1,per_page=15)=>{
    let response=await axios.get('https://api.unsplash.com/search/photos',{
        params:{query,page,per_page},
        headers:{Authorization:`Client-ID ${UNSPLASH_KEY} `}
    })
    return response.data.results;
}


export const FetchVideos= async(query,per_page=15)=>{
    const response=await axios.get('https://api.pexels.com/videos/search',{
        params:{query,per_page},
        headers:{Authorization: PEXELS_KEY}
    })
    // console.log(response)
    return response.data.videos;
}
