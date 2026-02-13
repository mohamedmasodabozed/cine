import { useEffect, useState } from "react";
import { getMovies } from "../Services/ContentService";
import Viewer from "../Components/Viewer";
export default  function Movie()
{
    const [movies, setMovies] = useState([]);
    useEffect(()=>{
        const fetchMovies = async ()=>{
            const data = await getMovies();
            setMovies(data);
        }
        fetchMovies();
    } ,[]) 
    return(
        <div>
            <Viewer data={movies} label="Top Movies" />
        </div>
    )
}