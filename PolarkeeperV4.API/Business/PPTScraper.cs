using System;
using System.Net;
using System.Text.RegularExpressions;
using System.Web;

namespace PolarkeeperV4.API.Business
{
    public static class PPTScraper
    {
        public static bool Login(string email, string password)
        {
            using (var wb = new WebClient())
            {
                wb.Headers[HttpRequestHeader.ContentType] = "application/x-www-form-urlencoded";
                var parameters = "email=" + HttpUtility.UrlEncode(email) + "&password=" +
                                 HttpUtility.UrlEncode(password) + "&.action=login&tz=-120";
                try
                {
                    var response = wb.UploadString("https://www.polarpersonaltrainer.com/index.ftl", parameters);
                    var pattern = ".*(Incorrect username or password. Please try again).*";
                    if (Regex.IsMatch(response, pattern))
                    {
                        return false;
                    }
                    return true;
                }
                catch (Exception e)
                {
                    Elmah.ErrorLog.GetDefault(HttpContext.Current).Log(new Elmah.Error(e));
                    return false;
                }
            }
        }

    }
}