export const API_OPTIONS={
    Method:"GET",
    headers:{
        "Content-Type":"application/JSON",
        "Authorization":"Bearer "+process.env.REACT_APP_TMDB_KEY
    }
}

export const IMG_CDN="https://image.tmdb.org/t/p/w780"

export const OPENAI_KEY=process.env.REACT_APP_OPENAI_KEY