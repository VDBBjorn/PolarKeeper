using System.Threading.Tasks;

namespace PolarkeeperV4.API.HealthGraph.Provider
{
    public interface IHealthGraphAuthenticationProvider
    {
        Task Authenticated(HealthGraphAuthenticatedContext context);

        Task ReturnEndpoint(HealthGraphReturnEndpointContext context);
    }
}