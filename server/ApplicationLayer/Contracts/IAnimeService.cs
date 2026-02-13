using ApplicationLayer.DTOs;

    public interface IAnimeService
    {
        Task<List<MovieDto>> GetTopAnimeAsync();
    }