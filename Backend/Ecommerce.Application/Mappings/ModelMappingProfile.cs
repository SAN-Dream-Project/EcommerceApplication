using AutoMapper;
using Ecommerce.Application.Shared.UserAndRoles.Roles.Dto;
using Ecommerce.Application.Shared.UserAndRoles.Users.Dto;
using Ecommerce.Core.UserAndRoles.Users;
using Ecommerce.Core.Users.Roles;

namespace Ecommerce.Application
{
   public class ModelMappingProfile : Profile
    {
        public ModelMappingProfile()
        {
            CreateMap<Role, RoleDto>().ReverseMap();
            CreateMap<Role, RoleInputDto>().ReverseMap();
            CreateMap<User, UserDto>().ReverseMap();
            CreateMap<User, UserInputDto>().ReverseMap();
        }
    }
}
