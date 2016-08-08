using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SampleProjects.Startup))]
namespace SampleProjects
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
