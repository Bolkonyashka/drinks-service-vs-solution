using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.SpaServices.Webpack;
using DrinksServiceApi.Models;
using Microsoft.EntityFrameworkCore;
using System.IO;
using Microsoft.Extensions.Configuration;

namespace drinks_service_vs
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            var builder = new ConfigurationBuilder();
            builder.SetBasePath(Directory.GetCurrentDirectory());
            builder.AddJsonFile("appsettings.json");
            var config = builder.Build();
            string con = config.GetConnectionString("DefaultConnection");//"Server=.\\SQLEXPRESS;AttachDbFilename=D:\\Angular + WEB.API\\drinks-service-vs-solution\\drinks-service-vs\\App_Data\\DrinksApp.mdf;Trusted_Connection=True;MultipleActiveResultSets=true";
            if (con.Contains("%CONTENTROOTPATH%"))
            {
                con = con.Replace("%CONTENTROOTPATH%", Directory.GetCurrentDirectory());
            }
            services.AddDbContext<VendingContext>(options => options.UseSqlServer(con));

            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();

                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
                {
                    HotModuleReplacement = true
                });

                app.UseDefaultFiles();
                app.UseStaticFiles();
                app.UseMvc();

                app.Run(async (context) =>
                {
                    context.Response.ContentType = "text/html";
                    await context.Response.SendFileAsync(Path.Combine(env.WebRootPath, "index.html"));
                });
            }
        }
    }
}
