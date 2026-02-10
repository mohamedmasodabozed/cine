using DataAccessLayer.Entites;
using System;
using System.Collections.Generic;
using System.Text;

namespace DataAccessLayer.Contracts
{
    public interface IUnitOfWork
    {
        IRepository<AppList,int> AppListRepository { get;  }
        IRepository<MovieListItem,int> MovieListItemRepository { get;  }
        IRepository<Movies,int> MoviesRepository { get; }
        IRepository<User,int> UserRepository { get; }
        void SaveChanges();
    }
}
