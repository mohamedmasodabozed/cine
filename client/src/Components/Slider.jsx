import React, { useState } from 'react';
import { Box, Typography, Card, CardMedia, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
export default function Slider({data , label})
{
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsPerPage = 5;
      const visibleMovies = data.slice(currentIndex, currentIndex + cardsPerPage);
    const handlePrev = () => {
        setCurrentIndex(prev => Math.max(0, prev - cardsPerPage));
    };
    
    const handleNext = () => {
        setCurrentIndex(prev => Math.min(data.length - cardsPerPage, prev + cardsPerPage));
    };

    return (
        <>
         <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 4, mt: 4 }}>
                <Typography variant="h5" sx={{ color: 'white', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
                     {label}  <span style={{ fontSize: '1.2rem' }}>🔥</span>
                </Typography>
                <Typography sx={{ color: '#00d9ff', fontSize: '0.9rem', cursor: 'pointer' }}>
                    See All &gt;
                </Typography>
            </Box>
        <Box sx={{ position: 'relative', px: 4, mt: 3, pb: 4 }}>
            {/* Left Arrow */}
            <IconButton
                onClick={handlePrev}
                disabled={currentIndex === 0}
                sx={{
                    position: 'absolute',
                    left: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 10,
                    bgcolor: 'rgba(0,0,0,0.7)',
                    color: 'white',
                    '&:hover': { bgcolor: 'rgba(0,0,0,0.9)' },
                    '&:disabled': { opacity: 0.3 }
                }}
            >
                <ChevronLeftIcon sx={{ fontSize: '2rem' }} />
            </IconButton>
            
            {/* Right Arrow */}
            <IconButton
                onClick={handleNext}
                disabled={currentIndex >= data.length - cardsPerPage}
                sx={{
                    position: 'absolute',
                    right: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 10,
                    bgcolor: 'rgba(0,0,0,0.7)',
                    color: 'white',
                    '&:hover': { bgcolor: 'rgba(0,0,0,0.9)' },
                    '&:disabled': { opacity: 0.3 }
                }}
            >
                <ChevronRightIcon sx={{ fontSize: '2rem' }} />
            </IconButton>
            
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', overflow: 'hidden' }}>
            {
                visibleMovies.map((movie)=>{
                    return(
                        <Card 
                            key={movie.tmdbId} 
                            sx={{ 
                                minWidth: 220,
                                maxWidth: 220,
                                height: 330, 
                                borderRadius: '12px',
                                overflow: 'hidden',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                position: 'relative',
                                bgcolor: '#1a1a1a',
                                border: 'none',
                                boxShadow: 'none',
                                '&:hover': { 
                                    transform: 'scale(1.05)',
                                    '& .card-overlay': { opacity: 1 }
                                }
                            }}
                        >
                            <CardMedia
                                component="img"
                                image={movie.posterUrl}
                                alt={movie.title}
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                            />
                            <Box
                                className="card-overlay"
                                sx={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)',
                                    p: 2,
                                    opacity: 0,
                                    transition: 'opacity 0.3s ease'
                                }}
                            >
                                <Typography sx={{ color: 'white', fontWeight: 600, fontSize: '1rem', mb: 0.5 }}>
                                    {movie.title}
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                    <Typography sx={{ color: '#46d369', fontSize: '0.8rem', fontWeight: 600 }}>
                                        {Math.round(movie.ratings * 10)}% Match
                                    </Typography>
                                    <Typography sx={{ color: '#aaa', fontSize: '0.8rem' }}>
                                        {movie.releaseDate?.split('-')[0]}
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', gap: 1 }}>
                                    <Box
                                        sx={{
                                            width: 32,
                                            height: 32,
                                            borderRadius: '50%',
                                            bgcolor: 'white',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <PlayArrowIcon sx={{ color: 'black', fontSize: '1.2rem' }} />
                                    </Box>
                                    <Box
                                        sx={{
                                            width: 32,
                                            height: 32,
                                            borderRadius: '50%',
                                            bgcolor: 'rgba(255,255,255,0.2)',
                                            border: '1px solid rgba(255,255,255,0.4)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <AddIcon sx={{ color: 'white', fontSize: '1rem' }} />
                                    </Box>
                                </Box>
                            </Box>
                        </Card>
                    )
                })
            }
        </Box>
        </Box>
        </>
    );
}