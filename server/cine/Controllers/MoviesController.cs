using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ApplicationLayer.Services;
using Microsoft.AspNetCore.Http.HttpResults;
using ApplicationLayer.Contracts;
namespace cine.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MoviesController : ControllerBase
    {
        private readonly IMoviesService _movieService;
        public MoviesController(IMoviesService movieService)
        {
            _movieService = movieService;
        }
        [HttpGet] 
        public async Task<IActionResult> GetMovies()
        {
            var TopMovies = await _movieService.getTopMovies();
            if (TopMovies == null)
            {
                return StatusCode(500 , "API didn't return data") ;
            }
            return Ok(TopMovies);
        }
        [HttpGet("shows")]
        public async Task<IActionResult> GetShows()
        {
           var TopShows = await _movieService.DiscoverTVshows();
            if (TopShows == null)
            {
                return StatusCode(500 , "API didn't return data") ;
            }
            return Ok(TopShows);

        }

    }
}
