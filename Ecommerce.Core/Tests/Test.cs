using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ecommerce.Core.Tests
{
    public class Test : IEntityBase
    {
        public Guid Id { get; set; }
        public int RollNo { get; set; }
        public string FirstName { get; set; }
        public string LatName { get; set; }
        public string Email { get; set; }
        public string? CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string? ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public string? DeletedBy { get; set; }
        public DateTime? DeleteDate { get; set; }

    }
}
