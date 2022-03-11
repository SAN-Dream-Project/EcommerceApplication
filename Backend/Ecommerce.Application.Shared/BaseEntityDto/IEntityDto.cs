using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ecommerce.Application.Shared.BaseEntityDto
{
    public interface IEntityDto
    {
        Guid Id { get; set; }
    }
}
