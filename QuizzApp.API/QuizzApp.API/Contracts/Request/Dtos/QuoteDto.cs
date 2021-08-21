using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizzApp.API.Contracts.Request.Dtos
{
    public class QuoteDto
    {
        public string QuoteText { get; set; }
        public string RealQuoteOwner { get; set; }
        public string QuoteOwnerA { get; set; }
        public string QuoteOwnerB { get; set; }
        public string QuoteOwnerC { get; set; }
        public string RandomQuoteOwner { get; set; }
        public int Type { get; set; }
    }
}
