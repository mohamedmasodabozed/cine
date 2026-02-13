import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { getMovies , getTvShows } from '../Services/ContentService';
import { useState , useEffect} from 'react';
import Slider from '../Components/Slider'; 
import { getAnime } from '../Services/ContentService';
export default function Landing()
{
    const [movies, setMovies] = useState([]);
    const [shows , setShows]  = useState([]);
    const [anime , setAnime] = useState([]);
    
    useEffect(() => {
        const fetchMovies = async () => {
            const data = await getMovies();
            setMovies(data);
            const showsData = await getTvShows();
            setShows(showsData);
            const animeData = await getAnime();
            setAnime(animeData);
        };
        fetchMovies();
    }, []);
    console.log(anime);
    const featuredMovie = movies[0];
  
    return (
        <Box sx={{ width: '100%', bgcolor: '#141414', overflowX: 'hidden' }}>
        <Box sx={{ width: '100%', height: '80vh', position: 'relative' }}>
            <Card 
                sx={{ 
                    width: '100%', 
                    height: '100%', 
                    position: 'relative',
                    borderRadius: 0,
                    boxShadow: 'none',
                    border: 'none'
                }}
            >
                <CardMedia
                    component="img"
                    image={featuredMovie?.posterUrl}
                    alt={featuredMovie?.title}
                    sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        position: 'absolute',
                        top: 0,
                        left: 0
                    }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(to right, rgba(20, 20, 20, 0.95) 0%, rgba(20, 20, 20, 0.7) 40%, rgba(20, 20, 20, 0.2) 100%)'
                    }}
                />
                <CardContent
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        left: 0,
                        padding: '0 4rem',
                        maxWidth: '50%',
                        zIndex: 1
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                        <Box
                            sx={{
                                bgcolor: '#e50914',
                                color: 'white',
                                px: 1.5,
                                py: 0.5,
                                borderRadius: '4px',
                                fontSize: '0.75rem',
                                fontWeight: 600,
                                textTransform: 'uppercase'
                            }}
                        >
                            FEATURED
                        </Box>
                        <Typography sx={{ color: '#f5c518', fontSize: '0.9rem', fontWeight: 500 }}>
                            ★ {featuredMovie?.ratings} Rating
                        </Typography>
                    </Box>
                    
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: '4rem',
                            fontWeight: 800,
                            color: 'white',
                            lineHeight: 1,
                            textTransform: 'uppercase',
                            m: 0
                        }}
                    >
                        {featuredMovie?.title?.split(' ').slice(0, 1).join(' ')}
                    </Typography>
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: '4rem',
                            fontWeight: 800,
                            color: '#e50914',
                            lineHeight: 1,
                            textTransform: 'uppercase',
                            mb: 2
                        }}
                    >
                        {featuredMovie?.title?.split(' ').slice(1).join(' ')}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#ccc', fontSize: '0.95rem', mb: 3 }}>
                        <span>{featuredMovie?.releaseDate?.split('-')[0]}</span>
                        <span style={{ color: '#666' }}>•</span>
                        <span>{featuredMovie?.genre || 'Sci-Fi, Adventure'}</span>
                        <span style={{ color: '#666' }}>•</span>
                        <span>2h 46m</span>
                        <Box
                            component="span"
                            sx={{
                                border: '1px solid #666',
                                px: 0.75,
                                py: 0.25,
                                borderRadius: '3px',
                                fontSize: '0.75rem',
                                ml: 1
                            }}
                        >
                            4K
                        </Box>
                    </Box>
                    
                    <Typography sx={{ color: '#ddd', fontSize: '1rem', lineHeight: 1.6, mb: 4, maxWidth: '500px' }}>
                        {featuredMovie?.description?.substring(0, 120)}....
                    </Typography>
                    
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Button
                            variant="contained"
                            startIcon={<PlayArrowIcon />}
                            sx={{
                                bgcolor: '#e50914',
                                color: 'white',
                                px: 3,
                                py: 1,
                                borderRadius: '4px',
                                fontWeight: 600,
                                textTransform: 'none',
                                '&:hover': { bgcolor: '#f40612' }
                            }}
                        >
                            Play Now
                        </Button>
                        <Button
                            variant="outlined"
                            startIcon={<AddIcon />}
                            sx={{
                                bgcolor: 'rgba(255, 255, 255, 0.1)',
                                color: 'white',
                                borderColor: 'rgba(255, 255, 255, 0.3)',
                                px: 3,
                                py: 1,
                                borderRadius: '4px',
                                fontWeight: 600,
                                textTransform: 'none',
                                '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.2)', borderColor: 'rgba(255, 255, 255, 0.3)' }
                            }}
                        >
                            My List
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
            <Slider data={movies} label="Trending Movies" />
            <Slider data={shows} label="Trending TV Shows" />
            <Slider data={anime} label="Top Rated Anime" />
        </Box>
    );
}
