namespace PolarkeeperV4.API.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class completedexercises : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.PPTExerciseViewModels",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        time = c.DateTime(nullable: false),
                        sport = c.String(),
                        calories = c.Int(nullable: false),
                        duration = c.Time(nullable: false, precision: 7),
                        averageHeartRate = c.Int(nullable: false),
                        maxHeartRate = c.Int(nullable: false),
                        distance = c.Double(nullable: false),
                        UserId = c.String(nullable: false, maxLength: 128),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.AspNetUsers", t => t.UserId, cascadeDelete: true)
                .Index(t => t.UserId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.PPTExerciseViewModels", "UserId", "dbo.AspNetUsers");
            DropIndex("dbo.PPTExerciseViewModels", new[] { "UserId" });
            DropTable("dbo.PPTExerciseViewModels");
        }
    }
}
