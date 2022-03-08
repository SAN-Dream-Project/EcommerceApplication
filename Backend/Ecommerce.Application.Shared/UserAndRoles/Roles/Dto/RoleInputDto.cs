using Ecommerce.Application.Shared.BaseEntityDto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ecommerce.Application.Shared.UserAndRoles.Roles.Dto
{
    public class RoleInputDto:IEntityDto
    {
        public Guid Id { get; set; }
        public string RoleName { get; set; }
    }
}
