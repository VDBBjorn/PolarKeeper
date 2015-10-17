using Microsoft.Owin;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.Provider;

namespace PolarkeeperV4.API.HealthGraph.Provider
{
    public class HealthGraphReturnEndpointContext : ReturnEndpointContext
    {
        public HealthGraphReturnEndpointContext(IOwinContext context,
            AuthenticationTicket ticket)
            : base(context, ticket)
        {
        }
    }
}