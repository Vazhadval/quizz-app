using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QuizzApp.API.Contracts.Request.Dtos;
using QuizzApp.API.Contracts.Response;
using QuizzApp.API.Interfaces;
using QuizzApp.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizzApp.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuoteController : ControllerBase
    {
        private readonly IQuoteService _quoteService;
        private readonly IMapper _mapper;

        public QuoteController(IQuoteService quoteService, IMapper mapper)
        {
            _quoteService = quoteService;
            _mapper = mapper;
        }
        [HttpPost]
        public async Task<BaseResponse<QuoteDto>> Create(QuoteDto quote)
        {
            return await _quoteService.Create(_mapper.Map<Quote>(quote));
        }

        [HttpGet]
        public BaseResponse<IEnumerable<QuoteDto>> Get(int limit = 10)
        {
            return _quoteService.Get(limit);
        }

        [HttpGet("test")]
        public IActionResult Test()
        {
            return Ok("works");
        }

    }
}
