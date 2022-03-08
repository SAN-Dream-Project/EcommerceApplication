using AutoMapper;
using Ecommerce.Application.Shared.Tests.Dto;
using Ecommerce.Core.Tests;

namespace Ecommerce.Application
{
   public class ModelMappingProfile : Profile
    {
        public ModelMappingProfile()
        {
         CreateMap<Test, TestDto>().ReverseMap();
         CreateMap<Test, TestInputDto>().ReverseMap();
         CreateMap<List<Test>, List<TestDto>>().ReverseMap();
      }
    }
}
