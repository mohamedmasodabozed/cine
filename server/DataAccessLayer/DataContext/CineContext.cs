using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
namespace DataAccessLayer.DataContext
{
    public class CineContext : DbContext
    {
        public CineContext(

        DbContextOptions<CineContext> options) : base(options) { }
        public DbSet<Entites.AppList> AppLists { get; set; }
        public DbSet<Entites.Movies> Movies { get; set; }
        public DbSet<Entites.MovieListItem> MovieListItems { get; set; }
        public DbSet<Entites.User> Users { get; set; }

    }
}
