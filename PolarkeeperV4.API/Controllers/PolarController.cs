using System;
using System.Linq;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using Microsoft.Owin.Security;
using PolarkeeperV4.API.Models.PolarLib;
using System.Collections.Generic;

namespace PolarkeeperV4.API.Controllers
{
    [Authorize]
    [RoutePrefix("api/Polar")]
    public class PolarController : ApiController
    {
        private AuthRepository _repo = null;

        private IAuthenticationManager Authentication
        {
            get { return Request.GetOwinContext().Authentication; }
        }

        public PolarController()
        {
            _repo = new AuthRepository();
        }

        // GET api/polar/exercises
        [Route("exercises")]
        public IHttpActionResult Get(int limit = 1000, int offset = 0)
        {
            var userName = User.Identity.Name;
            try
            {
                var user = _repo.FindByUsername(userName);
                var email = user.PolarUserName;
                var pass = user.PolarPassword;
                var x =
                    new PPTExport(email, pass).downloadSessions(DateTime.Now.AddMonths(-6), DateTime.Now);
                var y = PPTExtract.convertXmlToExercises(x);
                var exercises = new List<PPTExercise>();
                foreach (var exercise in y.OrderByDescending(t => t.time).Take(limit).Skip(offset))
                {
                    foreach (var userex in user.CompletedExercises)
                    {
                        if (userex.distance == exercise.distance && userex.time == exercise.time &&
                            userex.duration == exercise.duration)
                        {
                            exercise.Uploaded = true;
                        }
                    }
                    exercises.Add(exercise);
                }
                return Ok(exercises);
            }
            catch (Exception e)
            {
                Elmah.ErrorLog.GetDefault(HttpContext.Current).Log(new Elmah.Error(e));
                return BadRequest(e.Message);
            }
        }

    }
}