using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccessLayer.Entites
{
    public class MovieListItem
    {
        public Guid Id { get; set; }
        public Guid MovieId { get; set; }
        public Movies? Movie { get; set; }
        public Guid AppListId { get; set; }
        public AppList? AppList { get; set; }
    }
}
