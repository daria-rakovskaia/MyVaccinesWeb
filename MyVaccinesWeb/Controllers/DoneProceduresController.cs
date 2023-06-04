using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyVaccinesWeb.Services.DoneProceduresService;
using MyVaccinesWeb.Services.MyProceduresService;

namespace MyVaccinesWeb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoneProceduresController : ControllerBase
    {
        private readonly IDoneProceduresService _doneProceduresService;

        public DoneProceduresController(IDoneProceduresService doneProceduresService)
        {
            _doneProceduresService = doneProceduresService;
        }

        [HttpGet]
        public async Task<List<MyProcedure>?> GetAllDoneProceduresAsync(int userId)
        {
            return await _doneProceduresService.GetAllDoneProceduresAsync(userId);
        }
    }
}
