import { useEffect, useState } from "react";
import { getAnime } from "../Services/ContentService";
import Viewer from "../Components/Viewer";
export default function Anime()
{
    const [anime, setAnime] = useState([]);
    useEffect(()=>{
        const fetchAnime = async ()=>{
            const data = await getAnime();
            setAnime(data);
        }
        fetchAnime();
    } , [])
    console.log(anime);
    return(
        <div>
            <Viewer data={anime} label="Top Anime" />
        </div>
    )
}