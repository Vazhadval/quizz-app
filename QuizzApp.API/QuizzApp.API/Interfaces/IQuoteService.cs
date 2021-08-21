using QuizzApp.API.Contracts.Request.Dtos;
using QuizzApp.API.Contracts.Response;
using QuizzApp.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizzApp.API.Interfaces
{
    public interface IQuoteService
    {
        Task<BaseResponse<QuoteDto>> Create(Quote q);
        BaseResponse<IEnumerable<QuoteDto>> Get(int limit = 10);
    }
}
