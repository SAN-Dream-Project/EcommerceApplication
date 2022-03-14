using Ecommerce.Application;
using Ecommerce.Application.Authentications;
using Ecommerce.Application.Shared.Authentications;
using Ecommerce.Application.Shared.UserAndRoles.Roles;
using Ecommerce.Application.Shared.UserAndRoles.Users;
using Ecommerce.Application.UserAndRoles.Roles;
using Ecommerce.Application.UserAndRoles.Users;
using Ecommerce.EntityFramwork;
using Ecommerce.EntityFramwork.Abstract;
using Ecommerce.EntityFramwork.Abstract.UserAndRoles.Roles;
using Ecommerce.EntityFramwork.Abstract.UserAndRoles.Users;
using Ecommerce.EntityFramwork.Repositories;
using Ecommerce.EntityFramwork.Repositories.UserAndRoles.Roles;
using Ecommerce.EntityFramwork.Repositories.UserAndRoles.Users;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Scheduler.Data.Abstract;
using System.Text;

namespace Ecommerce.Host
{
    public class Startup
    {
        private readonly IConfiguration _configuration;

        public Startup(IConfiguration configuration)
        {
            _configuration = configuration;
        }


        // This method gets called by the runtime. Use this method to add services to the container.  
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<EcommerceContext>(options => options.UseSqlServer(_configuration.GetConnectionString("DefaultConnection")));
            services.AddControllers();
            services.AddHttpClient();
            // Automapper Configuration
            // Automapper Configuration
            var key = "This is my first Test Key";
            AutoMapperConfiguration.Configure(); services.AddAuthentication(x =>
            {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(x =>
            {
                x.RequireHttpsMetadata = false;
                x.SaveToken = true;
                x.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(key))
                };
            });

            services.AddSingleton<IJwtAuth>(new Auth(key));
            services.AddTransient<IRoleRepository, RoleRepository>();
            services.AddTransient<IRoleAppService, RoleAppService>();
            services.AddTransient<IUserRepository, UserRepository>();
            services.AddTransient<IUserAppService, UserAppService>();
            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "EcommerceAPI", Version = "v1" });
            });
            services.AddCors(options =>
            {
                options.AddPolicy("Policy11",
                builder => builder.AllowAnyOrigin());
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.  
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, ILoggerFactory loggerFactory)
        {
            var path = Directory.GetCurrentDirectory();
            loggerFactory.AddFile($"{path}\\Logs\\Log.txt");

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.  
                app.UseHsts();
            }
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "EcommerceAPI v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthentication();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            app.UseCors();
        }
    }
}
