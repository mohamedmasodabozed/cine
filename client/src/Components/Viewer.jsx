import { Card, Typography, CardMedia } from "@mui/material";
import { Box } from "@mui/system";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';

export default function Viewer({ data, label }) {
    if (!data || data.length === 0) {
        return null;
    }

    return (
        <Box sx={{ mt: 4 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 4, mb: 2 }}>
                <Typography variant="h5" sx={{ color: 'white', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 1 }}>
                    {label} <span style={{ fontSize: '1.2rem' }}>🔥</span>
                </Typography>
                <Typography sx={{ color: '#00d9ff', fontSize: '0.9rem', cursor: 'pointer' }}>
                    See All &gt;
                </Typography>
            </Box>
            <Box sx={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
                gap: 3, 
                px: 4, 
                pb: 2 
            }}>
                {data.map((movie) => (
                    <Card
                        key={movie.tmdbId || movie.id}
                        sx={{
                            width: '100%',
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
                                    {Math.round((movie.ratings || 0) * 10)}% Match
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
                ))}
            </Box>
        </Box>
    );
}