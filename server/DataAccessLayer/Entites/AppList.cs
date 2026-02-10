namespace DataAccessLayer.Entites
{   
    public enum ListType
    {
        Favorites,
        Watchlist
    }
    public class AppList
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public ListType ListType { get; set; }
        public Guid UserId { get; set; }
        public User User { get; set; }
    }
}