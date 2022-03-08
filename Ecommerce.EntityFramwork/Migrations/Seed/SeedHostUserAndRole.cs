using Ecommerce.Core.Users.Roles;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ecommerce.EntityFramwork.Migrations.Seed
{
    public static class SeedHostUserAndRole
    {
        public static void SeedRole(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Role>().HasData(
               new Role() { Id = Guid.NewGuid(), RoleName = "Admin" }
               );
        }
    }
}
