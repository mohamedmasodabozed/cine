using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationLayer.DTOs
{
    public class MovieDto
    {
        public int TmdbId { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
        public string? posterUrl { get; set; }
        public DateTime? ReleaseDate { get; set; }
        public string? Genre { get; set; }
        public double? ratings { get; set; } 

    }
}
