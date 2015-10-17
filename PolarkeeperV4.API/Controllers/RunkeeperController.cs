using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Security.Claims;
using System.Web;
using System.Web.Http;
using System.Web.Http.Results;
using System.Web.Security;
using Microsoft.AspNet.Identity;
using Microsoft.Owin.Security;
using PolarkeeperV4.API.HealthGraph;
using PolarkeeperV4.API.Models.PolarLib;

namespace PolarkeeperV4.API.Controllers
{
    [Authorize]
    [RoutePrefix("api/Runkeeper")]
    public class RunkeeperController : ApiController
    {
        private AuthRepository _repo = null;

        private IAuthenticationManager Authentication
        {
            get { return Request.GetOwinContext().Authentication; }
        }

        public RunkeeperController()
        {
            _repo = new AuthRepository();
        }

        [HttpPost]
        [Route("addactivity")]
        public IHttpActionResult AddActivity([FromBody] PPTExercise model)
        {
            var userName = User.Identity.Name;
            try
            {
                var db = new PetaPoco.Database("AuthContext");
                var id = db.SingleOrDefault<string>("SELECT Id from AspNetUsers where Username=@0", userName);
                var key = db.SingleOrDefault<string>("SELECT ProviderKey from AspNetUserLogins where UserId=@0", id);
                var result = HealthGraphInteractions.AddActivity(model, key);
                if (result)
                {
                    var user = _repo.FindByUsername(userName);
                    user.CompletedExercises.Add(new PPTExerciseViewModel(model));
                    _repo.SaveChanges();
                    return Ok();
                }
                return InternalServerError();
            }
            catch (Exception e)
            {
                Elmah.ErrorLog.GetDefault(HttpContext.Current).Log(new Elmah.Error(e));
                return null;
            }
        }
    }
}