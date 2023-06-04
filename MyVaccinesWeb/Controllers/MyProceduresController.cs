using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyVaccinesWeb.Services.MyProceduresService;

namespace MyVaccinesWeb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MyProceduresController : ControllerBase
    {
        private readonly IMyProceduresService _myProceduresService;

        public MyProceduresController(IMyProceduresService myProceduresService)
        {
            _myProceduresService = myProceduresService;
        }

        [HttpGet]
        public async Task<List<MyProcedure>?> GetAllProceduresAsync(int userId)
        {
            return await _myProceduresService.GetAllProceduresAsync(userId);
        }
    }
}
