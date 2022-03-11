using Ecommerce.Core.UserAndRoles.Users;
using Ecommerce.EntityFramwork.Abstract.UserAndRoles.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ecommerce.EntityFramwork.Repositories.UserAndRoles.Users
{
    public class UserRepository : EntityBaseRepository<User>, IUserRepository
    {
        public UserRepository(EcommerceContext context)
            : base(context)
        { }
    }
}
