using System;
using System.Net;

namespace PolarkeeperV4.API.Models.PolarLib
{
    public class PPTException : Exception
    {
        public HttpStatusCode HttpStatusCode { get; set; }

        public PPTException(string message, HttpStatusCode statusCode)
            : base(message)
        {
            this.HttpStatusCode = statusCode;
        }

        public PPTException(string message)
            : base(message)
        {
        }
    }
}