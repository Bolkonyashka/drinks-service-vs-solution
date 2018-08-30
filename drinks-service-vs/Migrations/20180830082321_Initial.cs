using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace drinksservicevs.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "DrinksList",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    count = table.Column<int>(nullable: false),
                    img = table.Column<string>(nullable: true),
                    name = table.Column<string>(nullable: true),
                    price = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DrinksList", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "VendingModels",
                columns: table => new
                {
                    id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    blocked1 = table.Column<bool>(nullable: false),
                    blocked10 = table.Column<bool>(nullable: false),
                    blocked2 = table.Column<bool>(nullable: false),
                    blocked5 = table.Column<bool>(nullable: false),
                    cash = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VendingModels", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DrinksList");

            migrationBuilder.DropTable(
                name: "VendingModels");
        }
    }
}
