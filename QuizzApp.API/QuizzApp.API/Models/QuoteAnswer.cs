using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizzApp.API.Models
{
    public class QuoteAnswer
    {
        public int Id { get; set; }
        public int QuoteId { get; set; }
        public Quote Quote { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
        public string UserAnswered { get; set; }
    }
}
