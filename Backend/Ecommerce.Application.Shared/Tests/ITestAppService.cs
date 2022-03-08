using Ecommerce.Application.Shared.Tests.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ecommerce.Application.Shared.Tests
{
   public interface ITestAppService
   {
      Task<List<TestDto>> GetAllTests();
      Task<TestDto> GetTestById(Guid id);
      Task CreateOrUpdate(TestInputDto testInputDto);
      Task Delete(Guid id);
   }
}
