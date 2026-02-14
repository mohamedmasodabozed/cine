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
                return StatusCode(500, "API didn't return data");
            }
            return Ok(TopAnime);
        }
        [HttpGet("search")]
        public async Task<IActionResult> SearchAnime([FromQuery] string q, [FromQuery] int page = 1)
        {
            if (string.IsNullOrWhiteSpace(q))
            {
                return BadRequest("Search query cannot be empty.");
            }

            var results = await _animeService.SearchAnimeAsync(q, page);

            if (results == null || !results.Any())
            {
                return NotFound("No anime found matching your query.");
            }

            return Ok(results);
        }
    }
}
