import axios from 'axios'

const UNSPLASH_KEY=import.meta.env.VITE_UNSPLASH_APIKEY
const PEXELS_KEY = import.meta.env.VITE_PEXEL_APIKEY
const TENOR_KEY = import.meta.env.VITE_TENOR_APIKEY
export const FetchPhotos= async(query,page=1,per_page=15)=>{
    if(!query) query='nature'
    let response=await axios.get('https://api.unsplash.com/search/photos',{
        params:{query,page,per_page},
        headers:{Authorization:`Client-ID ${UNSPLASH_KEY} `}
    })
    // console.log(response.data.results)
  
    // normalization of api data
     return response.data.results.map((elem,index)=>({
        id: elem.id,
        type:elem.asset_type || 'Photos',
        tittle:elem.alt_description,
        thumbnail:elem.urls.thumb,
        src:elem.urls.full,
        url:elem.links.html,
     }));
}


export const FetchVideos= async(query,per_page=15)=>{
    if(!query) query='nature'
    const response=await axios.get('https://api.pexels.com/videos/search',{
        params:{query,per_page},
        headers:{Authorization: PEXELS_KEY}
    })
    // console.log(response.data.videos)
    return response.data.videos.map((elem,index)=>({
        id:elem.id,
        type:'Video',
        tittle:elem.user.name,
        thumbnail:elem.image,
        src:elem.video_files[2].link,
        url:elem.url,
     }));
}

export const FetchGif= async(query,limit=20)=>{
    if(!query) query='nature'
    let response = await axios.get('https://tenor.googleapis.com/v2/search',{
        params:{q:query,key:TENOR_KEY}
    })
    // console.log(response.data.results)
    return response=response.data.results.map((elem,index)=>({
        id:elem.id,
        type:'Gif',
        tittle:elem.content_description,
        thumbnail:elem.itemurl,
        src:elem.media_formats.gif.url,
        url:elem.url,
     }));

}