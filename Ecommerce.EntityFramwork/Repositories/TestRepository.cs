using Ecommerce.Core.Tests;
using Ecommerce.EntityFramwork.Abstract;
using Scheduler.Data.Abstract;

namespace Ecommerce.EntityFramwork.Repositories
{
   public class TestRepository : EntityBaseRepository<Test>, ITestRepository
    {
        public TestRepository(EcommerceContext context)
            : base(context)
        { }
    }
}
