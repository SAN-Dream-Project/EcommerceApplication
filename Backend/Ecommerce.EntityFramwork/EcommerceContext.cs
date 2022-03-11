using Ecommerce.Core.UserAndRoles.Users;
using Ecommerce.Core.Users.Roles;
using Ecommerce.EntityFramwork.Migrations.Seed;
using Microsoft.EntityFrameworkCore;

namespace Ecommerce.EntityFramwork
{
   public class EcommerceContext : DbContext
   {
      public EcommerceContext(DbContextOptions options) : base(options) { }
      public DbSet<Role> Roles { get; set; }
      public DbSet<User> Users { get; set; }
      protected override void OnModelCreating(ModelBuilder modelBuilder)
      {
        SeedHostUserAndRole.SeedRole(modelBuilder);
      }
   }
}