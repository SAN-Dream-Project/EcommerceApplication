using AutoMapper;
using Ecommerce.Application.Shared.Tests;
using Ecommerce.Application.Shared.Tests.Dto;
using Ecommerce.Core.Tests;
using Ecommerce.EntityFramwork.Abstract;
using Microsoft.Extensions.Logging;
using Scheduler.Data.Abstract;

namespace Ecommerce.Application.Tests
{
   public class TestAppService : ITestAppService
   {
      private readonly ITestRepository _testRepository;
      public TestAppService(ITestRepository testRepository)
      {
         _testRepository = testRepository;
      }

      public async Task CreateOrUpdate(TestInputDto testInputDto)
      {
         if(testInputDto.Id == null || testInputDto.Id == Guid.Empty)
            {
               var result = Mapper.Map<TestInputDto,Test>(testInputDto);
                await _testRepository.Add(result);
            }
            else
            {
               var result = Mapper.Map<TestInputDto, Test>(testInputDto);
               await _testRepository.Update(result);
            }
      }

      public async Task Delete(Guid id)
      {
         var result = await _testRepository.GetSingle(id);
         await _testRepository.Delete(result);
      }

      public async Task<List<TestDto>> GetAllTests()
      {
         var result = await _testRepository.GetAll();
         var testResult =  result.ToList();
         var testList = new List<TestDto>();
         foreach (var test in testResult)
         {
            testList.Add(Mapper.Map<Test, TestDto>(test));
         }
         return testList;
      }

      public async Task<TestDto> GetTestById(Guid id)
      {
         var result = await _testRepository.GetSingle(id);
         var returnResult =  Mapper.Map<Test, TestDto>(result);
         return returnResult;
      }
   }
}
