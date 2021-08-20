using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace QuizzApp.API.Models
{
    public class Quote
    {
        public int Id { get; set; }
        public string QuoteText { get; set; }
        public string RealQuoteOwner { get; set; }
        public string QuoteOwnerA { get; set; }
        public string QuoteOwnerB { get; set; }
        public string QuoteOwnerC { get; set; }
        // when quizz mode is binary
        public string RandomQuoteOwner { get; set; }
        // binary or multiple choice. 0=binary 1=multiple choice
        public int Type { get; set; }

    }
}
