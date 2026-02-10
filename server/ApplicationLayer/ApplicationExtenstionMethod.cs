using ApplicationLayer.Contracts;
using ApplicationLayer.Services;
using Microsoft.Extensions.DependencyInjection;

namespace ApplicationLayer
{
    public static class ApplicationExtenstionMethod
    {
        public static IServiceCollection RegisterServices(this IServiceCollection services)
        {
            services.AddScoped<IMoviesService , MoviesServices>();
            return services;
        }
    }
}
