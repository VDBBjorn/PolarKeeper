using System.Data.Entity.Migrations;

namespace PolarkeeperV4.API.Migrations
{
    public partial class polarProperties : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.AspNetUsers", "PolarUserName", c => c.String());
            AddColumn("dbo.AspNetUsers", "PolarPassword", c => c.String());
            AddColumn("dbo.AspNetUsers", "Discriminator", c => c.String(nullable: false, maxLength: 128));
        }
        
        public override void Down()
        {
            DropColumn("dbo.AspNetUsers", "Discriminator");
            DropColumn("dbo.AspNetUsers", "PolarPassword");
            DropColumn("dbo.AspNetUsers", "PolarUserName");
        }
    }
}
