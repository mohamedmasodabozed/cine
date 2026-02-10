using DataAccessLayer.Contracts;
using DataAccessLayer.DataContext;
using DataAccessLayer.Repo;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Protocols;
using System;
using System.Collections.Generic;
using System.Text;
namespace DataAccessLayer
{
    public static class DataAcessExtenstionMethod
    {
        public static IServiceCollection AddDataAccessServices(this IServiceCollection services , IConfiguration config)
        {
            services.AddDbContext<CineContext>(options =>
            {
                options.UseSqlServer(config.GetConnectionString("DefaultConnection"));
            });
            services.AddScoped<IUnitOfWork, UnitOfWork>();
            return services;
        }
    }   
}
