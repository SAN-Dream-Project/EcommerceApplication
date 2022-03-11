using Ecommerce.Application.Shared.UserAndRoles.Users.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ecommerce.Application.Shared.UserAndRoles.Users
{
    public interface IUserAppService
    {
        Task CreateOrUpdateUser(UserInputDto userInputDto);
        Task DeleteRole(Guid userId);
        Task<UserDto> GetUser(Guid userId);
        Task<List<UserDto>> GetAllUsers();
    }
}
