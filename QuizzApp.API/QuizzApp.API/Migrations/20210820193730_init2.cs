using Microsoft.EntityFrameworkCore.Migrations;

namespace QuizzApp.API.Migrations
{
    public partial class init2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Answer",
                table: "QuoteAnswers",
                newName: "UserAnswered");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "UserAnswered",
                table: "QuoteAnswers",
                newName: "Answer");
        }
    }
}
