using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;

namespace RandomUserInfo.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class RandomUserInfoController : ControllerBase
    {
        public RandomUserInfoController()
        {
        }

        [HttpGet]
        public RandomUser Get()
        {
            return new RandomUser { Age = 0, FirstName = "FirstName", LastName = "LastName" };
        }
    }
}
