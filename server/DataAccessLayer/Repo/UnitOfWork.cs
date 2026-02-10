using DataAccessLayer.Contracts;
using DataAccessLayer.DataContext;
using DataAccessLayer.Entites;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccessLayer.Repo
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly CineContext _context;

        private readonly Lazy<IRepository<AppList, int>> _appListRepository;
        private readonly Lazy<IRepository<MovieListItem, int>> _movieListItemRepository;
        private readonly Lazy<IRepository<Movies, int>> _moviesRepository;
        private readonly Lazy<IRepository<User, int>> _userRepository;

        public UnitOfWork(CineContext context)
        {
            _context = context;

            _appListRepository = new Lazy<IRepository<AppList, int>>(() =>
                new Repository<AppList, int>(_context));

            _movieListItemRepository = new Lazy<IRepository<MovieListItem, int>>(() =>
                new Repository<MovieListItem, int>(_context));

            _moviesRepository = new Lazy<IRepository<Movies, int>>(() =>
                new Repository<Movies, int>(_context));

            _userRepository = new Lazy<IRepository<User, int>>(() =>
                new Repository<User, int>(_context));
        }

        public IRepository<AppList, int> AppListRepository => _appListRepository.Value;

        public IRepository<MovieListItem, int> MovieListItemRepository => _movieListItemRepository.Value;

        public IRepository<Movies, int> MoviesRepository => _moviesRepository.Value;

        public IRepository<User, int> UserRepository => _userRepository.Value;

        public void SaveChanges()
        {
            _context.SaveChanges();
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
 