using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccessLayer.Entites
{
    public class Movies
    {
        public Guid Id { get; set; }
        public int TMDBId { get; set; }
        public string? Title { get; set; }
        public string? posterPath { get; set; }
        public string? MediaType { get; set; }
    }
}
