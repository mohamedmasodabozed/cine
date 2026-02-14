using ApplicationLayer.DTOs;
using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationLayer.Contracts
{
    public interface IMoviesService
    {
            Task<IEnumerable<MovieDto>> getTopMovies();
            Task<IEnumerable<MovieDto>> DiscoverTVshows();
            Task<MovieDto> GetMovieByIdAsync(int id);
            Task AddMovieAsync(MovieDto movie);
            Task UpdateMovieAsync(MovieDto movie);
            Task DeleteMovieAsync(int id);
            Task<IEnumerable<MovieDto>> SearchMoviesAsync(string query);

    }
}
