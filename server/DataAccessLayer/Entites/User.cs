using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;
using System.Text.Json.Serialization;

namespace DataAccessLayer.Entites
{
    public class User
    {
         [Key]  
         public Guid Id { get; set; }
         [Required]
         [MaxLength(100)]
         public string Name { get; set; }
        [Required]
        [EmailAddress]
         public string Email { get; set; }
        [Required]
        [JsonIgnore]
        public string HashedPassword { get; set; }
        public string RefreshToken { get; set; }
        public DateTime? RefreshTokenExpiryTime { get; set; }

        public ICollection<AppList> Lists { get; set; } = new List<AppList>();
    }
}
