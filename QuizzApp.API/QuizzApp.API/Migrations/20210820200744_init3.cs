using Microsoft.EntityFrameworkCore.Migrations;

namespace QuizzApp.API.Migrations
{
    public partial class init3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_QuoteAnswers_Quotes_QuoteId",
                table: "QuoteAnswers");

            migrationBuilder.DropForeignKey(
                name: "FK_QuoteAnswers_Users_UserId",
                table: "QuoteAnswers");

            migrationBuilder.RenameColumn(
                name: "RandomOwner",
                table: "Quotes",
                newName: "RealQuoteOwner");

            migrationBuilder.RenameColumn(
                name: "QuoteOwner",
                table: "Quotes",
                newName: "RandomQuoteOwner");

            migrationBuilder.RenameColumn(
                name: "OptionC",
                table: "Quotes",
                newName: "QuoteOwnerC");

            migrationBuilder.RenameColumn(
                name: "OptionB",
                table: "Quotes",
                newName: "QuoteOwnerB");

            migrationBuilder.RenameColumn(
                name: "OptionA",
                table: "Quotes",
                newName: "QuoteOwnerA");

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "QuoteAnswers",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "QuoteId",
                table: "QuoteAnswers",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_QuoteAnswers_Quotes_QuoteId",
                table: "QuoteAnswers",
                column: "QuoteId",
                principalTable: "Quotes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_QuoteAnswers_Users_UserId",
                table: "QuoteAnswers",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_QuoteAnswers_Quotes_QuoteId",
                table: "QuoteAnswers");

            migrationBuilder.DropForeignKey(
                name: "FK_QuoteAnswers_Users_UserId",
                table: "QuoteAnswers");

            migrationBuilder.RenameColumn(
                name: "RealQuoteOwner",
                table: "Quotes",
                newName: "RandomOwner");

            migrationBuilder.RenameColumn(
                name: "RandomQuoteOwner",
                table: "Quotes",
                newName: "QuoteOwner");

            migrationBuilder.RenameColumn(
                name: "QuoteOwnerC",
                table: "Quotes",
                newName: "OptionC");

            migrationBuilder.RenameColumn(
                name: "QuoteOwnerB",
                table: "Quotes",
                newName: "OptionB");

            migrationBuilder.RenameColumn(
                name: "QuoteOwnerA",
                table: "Quotes",
                newName: "OptionA");

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "QuoteAnswers",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "QuoteId",
                table: "QuoteAnswers",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_QuoteAnswers_Quotes_QuoteId",
                table: "QuoteAnswers",
                column: "QuoteId",
                principalTable: "Quotes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_QuoteAnswers_Users_UserId",
                table: "QuoteAnswers",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
