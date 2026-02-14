using ApplicationLayer.Contracts;
using ApplicationLayer.DTOs;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Text;
using TMDbLib.Client;
namespace ApplicationLayer.Services
{
    public class MoviesServices : IMoviesService
    {
        private readonly TMDbClient _client;
        public MoviesServices(IConfiguration config)
        {
            string API_KEY = config["TmdbConfig:ApiKey"]; 
            _client = new TMDbClient(API_KEY);
        }

        public Task AddMovieAsync(MovieDto movie)
        {
            throw new NotImplementedException();
        }

        public Task DeleteMovieAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<MovieDto> GetMovieByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<MovieDto>> getTopMovies()
        {
            var TopMovies = await _client.GetTrendingMoviesAsync(TMDbLib.Objects.Trending.TimeWindow.Week);
            var movieDtos = TopMovies.Results.Select(ele => new MovieDto
            {
                TmdbId = ele.Id,
                Title = ele.Title,
                posterUrl = ele.PosterPath != null
            ? $"https://image.tmdb.org/t/p/w500{ele.PosterPath}"
            : null,
                Description = ele.Overview,
                ReleaseDate = (DateTime)ele.ReleaseDate,
                ratings = ele.VoteAverage,
            });
            return movieDtos;
        }
        public async Task<IEnumerable<MovieDto>> DiscoverTVshows()
        {
            var TopShows = await _client.GetTrendingTvAsync(TMDbLib.Objects.Trending.TimeWindow.Week);
            var movieDtos = TopShows.Results.Select(ele => new MovieDto
            {
                TmdbId = ele.Id,
                Title = ele.OriginalName,
                posterUrl = ele.PosterPath != null
            ? $"https://image.tmdb.org/t/p/w500{ele.PosterPath}"
            : null,
                Description = ele.Overview,
                ratings = ele.VoteAverage,
            });
            return movieDtos;
        }
        public async Task<IEnumerable<MovieDto>> SearchMoviesAsync(string query)
        {
            var searchResults = await _client.SearchMovieAsync(query);
            var movieDtos = searchResults.Results.Select(ele => new MovieDto
            {
                TmdbId = ele.Id,
                Title = ele?.Title ?? "",
                posterUrl = ele?.PosterPath != null
            ? $"https://image.tmdb.org/t/p/w500{ele.PosterPath}"
            : null,
                Description = ele?.Overview ?? "",
                ReleaseDate =ele.ReleaseDate.GetValueOrDefault(),
                ratings = ele.VoteAverage 
            });
            return movieDtos;

        }
        public Task UpdateMovieAsync(MovieDto movie)
        {
            throw new NotImplementedException();
        }
    }
}
