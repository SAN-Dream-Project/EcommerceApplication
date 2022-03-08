using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ecommerce.Application.Shared.Authentications
{
   public interface IJwtAuth
   {
      string Authentication(string username, string password);
   }
}
