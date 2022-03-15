using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ecommerce.Application.Shared.Authentications.Dto
{
    public class TokenOutputDto
    {
        public string Token { get; set; }
        public DateTime? ExpireTime { get; set; }
    }
}
