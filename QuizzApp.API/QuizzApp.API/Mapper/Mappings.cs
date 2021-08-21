using AutoMapper;
using QuizzApp.API.Contracts.Request.Dtos;
using QuizzApp.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizzApp.API.Mapper
{
    public class Mappings:Profile
    {
        public Mappings()
        {
            CreateMap<QuoteDto, Quote>().ReverseMap();
        }
    }
}
