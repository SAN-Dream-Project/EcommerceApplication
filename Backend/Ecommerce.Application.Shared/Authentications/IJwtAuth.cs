using Ecommerce.Application.Shared.Authentications.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ecommerce.Application.Shared.Authentications
{
   public interface IJwtAuth
   {
        TokenOutputDto Authentication(string username, string password);
   }
}
