using AutoMapper;

namespace Ecommerce.Application
{
    public class AutoMapperConfiguration
    {
        public static void Configure()
        {
            Mapper.Initialize(x =>
            {
                x.AddProfile<ModelMappingProfile>();
            });
        }
    }
}
