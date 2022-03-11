using Ecommerce.Application.Shared.Authentications;
using Ecommerce.Application.Shared.Authentications.Dto;
using Ecommerce.EntityFramwork.Abstract.UserAndRoles.Users;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Ecommerce.Host.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class TokenAuthenticationController : ControllerBase
    {
        private readonly IJwtAuth jwtAuth;
        private readonly IUserRepository _userRepository;
        private readonly List<User> lstMember = new List<User>()
        {
            new User{Id=1, Name="nitin" },
            new User {Id=2, Name="Ashu" },
            new User{Id=3, Name="sachin"}
        };
        //For every request we need to pass this in header ---> Key - authorized, and value -token
        public TokenAuthenticationController(IJwtAuth jwtAuth, IUserRepository userRepository)
        {
            this.jwtAuth = jwtAuth;
            _userRepository = userRepository;
        }
        // GET: api/<MembersController>
        [HttpGet]
        public IEnumerable<User> AllMembers()
        {
            return lstMember;
        }

        // GET api/<MembersController>/5
        [HttpGet("{id}")]
        public User MemberByid(int id)
        {
            return lstMember.Find(x => x.Id == id);
        }

        [AllowAnonymous]
        // POST api/<MembersController>
        [HttpPost("authentication")]
        public IActionResult Authentication([FromBody] UserCredential userCredential)
        {
            var result =  _userRepository.FindBy(x=>x.UserName== userCredential .UserName && x.Password == userCredential.Password).ToList();
            if (result.Count!=0)
            {
                var token = jwtAuth.Authentication(userCredential.UserName, userCredential.Password);
                return Ok(token);
            }
            //var token = jwtAuth.Authentication(userCredential.UserName, userCredential.Password);
            //if (token == null)
            return Unauthorized();
            //return Ok(token);
        }
        [HttpGet(nameof(Get))]
        public async Task<IEnumerable<string>> Get()
        {
            var accessToken = await HttpContext.GetTokenAsync("access_token");

            return new string[] { accessToken };
        }
    }
}
