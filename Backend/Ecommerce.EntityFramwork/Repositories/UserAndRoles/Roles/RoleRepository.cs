using Ecommerce.Core.Users.Roles;
using Ecommerce.EntityFramwork.Abstract.UserAndRoles.Roles;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ecommerce.EntityFramwork.Repositories.UserAndRoles.Roles
{
    public class RoleRepository : EntityBaseRepository<Role>, IRoleRepository
    {
        public RoleRepository(EcommerceContext context)
            : base(context)
        { }
    }
}
