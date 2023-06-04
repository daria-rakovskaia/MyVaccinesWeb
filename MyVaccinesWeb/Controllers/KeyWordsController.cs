using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MyVaccinesWeb.Services.CountriesService;
using MyVaccinesWeb.Services.KeyWordsService;

namespace MyVaccinesWeb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class KeyWordsController : ControllerBase
    {
        private readonly IKeyWordsService _keyWordsService;

        public KeyWordsController(IKeyWordsService keyWordsService)
        {
            _keyWordsService = keyWordsService;
        }

        [HttpGet]
        public async Task<List<KeyWord>?> GetAllKeyWordsAsync()
        {
            return await _keyWordsService.GetAllKeyWordsAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<KeyWord>?> GetSingleKeyWordAsync(int id)
        {
            var result = await _keyWordsService.GetSingleKeyWordAsync(id);
            if (result is null)
                return BadRequest();
            return Ok(result);
        }

        [HttpPost]
        public async Task<ActionResult<bool>> AddKeyWordAsync(KeyWord keyWord)
        {
            bool result = await _keyWordsService.AddKeyWordAsync(keyWord);
            if (result is false)
                return BadRequest();
            return Ok(result);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<bool>> DeleteKeyWordAsync(int id)
        {
            bool result = await _keyWordsService.DeleteKeyWordAsync(id);
            if (result is false)
                return BadRequest();
            return Ok(result);
        }
    }
}
