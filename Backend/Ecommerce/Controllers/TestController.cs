using Ecommerce.Application.Shared.Tests;
using Ecommerce.Application.Shared.Tests.Dto;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Ecommerce.Host.Controllers
{
   [Authorize]
   [Route("api/[controller]")]
   [ApiController]
   public class TestController : ControllerBase
   {
      private readonly ITestAppService _testAppService;
      private readonly ILogger<TestController> _logger;
      public TestController(ITestAppService testAppService, ILogger<TestController> logger)
      {
         _testAppService = testAppService;
         _logger = logger;
      }
      //Add Person  
      [HttpPost("AddTest")]
      public async Task AddTest([FromBody] TestInputDto input)
      {
         try
         {
            await _testAppService.CreateOrUpdate(input);
         }
         catch (Exception ex)
         {
            _logger.LogInformation(ex.Message);
            _logger.LogInformation(ex.StackTrace);
         }
      }
      //Delete Person  
      [HttpDelete("DeleteTest")]
      public async Task DeleteTest(Guid id)
      {
         try
         {
            await _testAppService.Delete(id);
         }
         catch (Exception ex)
         {
            _logger.LogInformation(ex.Message);
            _logger.LogInformation(ex.StackTrace);
         }
      }
      //Delete Person  
      [HttpPut("UpdateTest")]
      public async Task UpdateTest(TestInputDto input)
      {
         try
         {
            await _testAppService.CreateOrUpdate(input);
         }
         catch (Exception ex)
         {
            _logger.LogInformation(ex.Message);
            _logger.LogInformation(ex.StackTrace);
         }
      }
      //GET All Person by Name  
      [HttpGet("GetAllTest")]
      public async Task<List<TestDto>> GetAllTest()
      {
         try
         {
            return await _testAppService.GetAllTests();
         }
         catch (Exception ex)
         {
            _logger.LogInformation(ex.Message);
            _logger.LogInformation(ex.StackTrace);
            return new List<TestDto>();
         }
      }
      //GET All Person by Name  
      [HttpGet("GetById")]
      public async Task<TestDto> GetById(Guid id)
      {
         try
         {
            return await _testAppService.GetTestById(id);
         }
         catch (Exception ex)
         {
            _logger.LogInformation(ex.Message);
            _logger.LogInformation(ex.StackTrace);
            return null;
         }
      }
   }
}
