import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Slider from "./Slider";
import { search } from "../Services/ContentService";
export default function SearchCard({ data })
{
    return (
        <div>
        {data.length > 0 && <Slider data={data} label={"Search Results"} />}
        </div>
    )
}