using Microsoft.EntityFrameworkCore;
using QuizzApp.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuizzApp.API.DataContext
{
    public class QuizzAppDbContext : DbContext
    {
        public QuizzAppDbContext(DbContextOptions<QuizzAppDbContext> options) : base(options)
        {

        }

        public DbSet<Quote> Quotes { get; set; }
        public DbSet<User> Users{ get; set; }
        public DbSet<QuoteAnswer> QuoteAnswers { get; set; }



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Quote>()
               .HasIndex(u => u.QuoteText)
               .IsUnique();
        }
    }
}
