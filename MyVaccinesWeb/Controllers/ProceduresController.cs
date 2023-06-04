using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyVaccinesWeb.Services.ProceduresService;
using System.Collections;

namespace MyVaccinesWeb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProceduresController : ControllerBase
    {
        private readonly IProceduresService _proceduresService;

        public ProceduresController(IProceduresService proceduresService)
        {
            _proceduresService = proceduresService;
        }

        [HttpGet]
        public async Task<List<MyProcedure>?> GetAllProceduresAsync()
        {
            return await _proceduresService.GetAllProceduresAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<MyProcedure>?> GetSingleProcedureAsync(int id)
        {
            var result = await _proceduresService.GetSingleProcedureAsync(id);
            if (result is null)
                return BadRequest();
            return Ok(result);
        }
    }
}
