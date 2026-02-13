using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ApplicationLayer.Services;
using Microsoft.AspNetCore.Http.HttpResults;
using ApplicationLayer.Contracts;
namespace cine.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AnimeController : ControllerBase
    {
        private readonly IAnimeService _animeService;
        public AnimeController(IAnimeService animeService)
        {
            _animeService = animeService;
        }
        [HttpGet] 
        public async Task<IActionResult> GetAnime()
        {
            var TopAnime = await _animeService.GetTopAnimeAsync();
            if (TopAnime == null)
            {
                return StatusCode(500 , "API didn't return data") ;
            }
            return Ok(TopAnime);
        }
    }
}
