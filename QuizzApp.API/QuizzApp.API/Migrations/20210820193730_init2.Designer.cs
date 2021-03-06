// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using QuizzApp.API.DataContext;

namespace QuizzApp.API.Migrations
{
    [DbContext(typeof(QuizzAppDbContext))]
    [Migration("20210820193730_init2")]
    partial class init2
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.9")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("QuizzApp.API.Models.Quote", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("OptionA")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("OptionB")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("OptionC")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("QuoteOwner")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("QuoteText")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("RandomOwner")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Type")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("Quotes");
                });

            modelBuilder.Entity("QuizzApp.API.Models.QuoteAnswer", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("QuoteId")
                        .HasColumnType("int");

                    b.Property<string>("UserAnswered")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("UserId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("QuoteId");

                    b.HasIndex("UserId");

                    b.ToTable("QuoteAnswers");
                });

            modelBuilder.Entity("QuizzApp.API.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Password")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Username")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("QuizzApp.API.Models.QuoteAnswer", b =>
                {
                    b.HasOne("QuizzApp.API.Models.Quote", "Quote")
                        .WithMany()
                        .HasForeignKey("QuoteId");

                    b.HasOne("QuizzApp.API.Models.User", null)
                        .WithMany("QuoteAnswers")
                        .HasForeignKey("UserId");

                    b.Navigation("Quote");
                });

            modelBuilder.Entity("QuizzApp.API.Models.User", b =>
                {
                    b.Navigation("QuoteAnswers");
                });
#pragma warning restore 612, 618
        }
    }
}
