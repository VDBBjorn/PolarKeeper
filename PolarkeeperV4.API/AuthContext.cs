using System.Data.Entity;
using Microsoft.AspNet.Identity.EntityFramework;
using PolarkeeperV4.API.Entities;
using PolarkeeperV4.API.Models;

namespace PolarkeeperV4.API
{
    public class AuthContext : IdentityDbContext<IdentityUser>
    {
        public AuthContext()
            : base("AuthContext")
        {
     
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<ApplicationUser>().HasMany(t => t.CompletedExercises).WithRequired(s=>s.User).HasForeignKey(x => x.UserId).WillCascadeOnDelete();
        }

        public DbSet<Client> Clients { get; set; }
        public DbSet<RefreshToken> RefreshTokens { get; set; }
    }

}