import { useEffect, useState } from "react";
import Viewer from "../Components/Viewer";
import { getTvShows } from "../Services/ContentService";
export default function TvShows()
{
    const [shows , setShows]  = useState([]);
    useEffect(()=>{
        const fetchTvShows = async ()=>{
            const data = await getTvShows();
            setShows(data);
        }
        fetchTvShows();
    }, [])
    return(
        <div>
            <Viewer data={shows} label="Top TV Shows" />
        </div>
    )
}