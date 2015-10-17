using System;
using System.Collections.Generic;
using System.Web.UI.WebControls;
using Microsoft.AspNet.Identity.EntityFramework;
using PolarkeeperV4.API.Models.PolarLib;

namespace PolarkeeperV4.API.Models
{
    public class ApplicationUser : IdentityUser
    {
        public ApplicationUser()
        {
            CompletedExercises = new List<PPTExerciseViewModel>();
        }

        public string PolarUserName { get; set; }
        public string PolarPassword { get; set; }
        public virtual ICollection<PPTExerciseViewModel> CompletedExercises { get; set; } 

    }
}