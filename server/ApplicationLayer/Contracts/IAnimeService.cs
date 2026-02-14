using ApplicationLayer.DTOs;

    public interface IAnimeService
    {
        Task<List<MovieDto>> GetTopAnimeAsync();
        Task<List<MovieDto>> SearchAnimeAsync(string query, int page = 1, int limit = 20);

    }