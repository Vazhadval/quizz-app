using AutoMapper;
using Microsoft.EntityFrameworkCore;
using QuizzApp.API.Contracts.Request.Dtos;
using QuizzApp.API.Contracts.Response;
using QuizzApp.API.DataContext;
using QuizzApp.API.Interfaces;
using QuizzApp.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizzApp.API.Services
{
    public class QuoteService : IQuoteService
    {
        private readonly QuizzAppDbContext _context;
        private readonly IMapper _mapper;

        public QuoteService(QuizzAppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }
        public async Task<BaseResponse<QuoteDto>> Create(Quote q)
        {
            if(await _context.Quotes.AnyAsync(x=>x.QuoteText==q.QuoteText))
            {
                return new BaseResponse<QuoteDto>
                {
                    Data = null,
                    Success = false,
                    Error = "quote already exists"
                };
            }

            await _context.Quotes.AddAsync(q);
            await _context.SaveChangesAsync();

            return new BaseResponse<QuoteDto>
            {
                Data = _mapper.Map<QuoteDto>(q),
                Success = true,
                Error = null
            };
        }

        public  BaseResponse<IEnumerable<QuoteDto>> Get(int limit = 10)
        {
            return new BaseResponse<IEnumerable<QuoteDto>>
            {
                Data = _context.Quotes.Take(limit).Select(x => _mapper.Map<QuoteDto>(x)),
                Success = true,
                Error = null
            };
        }
    }
}
