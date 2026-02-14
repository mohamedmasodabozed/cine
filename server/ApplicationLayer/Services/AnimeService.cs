using System.Net.Http.Json;
using ApplicationLayer.Contracts;
using ApplicationLayer.DTOs;
public class AnimeService : IAnimeService
{
    private readonly HttpClient _httpClient;
    private readonly SemaphoreSlim _Limiter = new SemaphoreSlim(1, 1);
    public AnimeService(HttpClient httpClient)
    {
        _httpClient = httpClient;
        _httpClient.BaseAddress = new Uri("https://api.jikan.moe/v4/");
    }
    public async Task<List<MovieDto>> GetTopAnimeAsync()
    {
        var response = await _httpClient.GetFromJsonAsync<JikanResponse>("top/anime");
        var data = response?.Data.Select(ele=>new MovieDto
        {
            TmdbId = ele.MalId,
            Title = ele.Title,
            Description = ele.Synopsis,
            posterUrl = ele.Images?.Jpg?.LargeImageUrl ?? ele.Images?.Jpg?.ImageUrl,
            ratings =(double) ele.Score,
        }).ToList();
        return data;    
    }
    public async Task<List<MovieDto>> SearchAnimeAsync(string query, int page = 1, int limit = 20)
    {
        await _Limiter.WaitAsync();
        try
        {
            await Task.Delay(100); 
            var response = await _httpClient.GetFromJsonAsync<JikanResponse>($"anime?q={query}&page={page}&limit={limit}&sfw=true");
            var data = response?.Data.Select(ele => new MovieDto
            {
                TmdbId = ele.MalId,
                Title = ele.Title,
                Description = ele.Synopsis,
                posterUrl = ele.Images?.Jpg?.LargeImageUrl ?? ele.Images?.Jpg?.ImageUrl,
                ratings = ele.Score,
            }).ToList();
        return data;
        }
        finally
        {
            _Limiter.Release();
        }

    }
}