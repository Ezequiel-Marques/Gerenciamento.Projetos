using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System.Text;
using Gerenciamento.ProjetosAPI.Utils;

namespace Gerenciamento.ProjetosAPI
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            builder.Services.AddCors();

            // Add services to the container.
            builder.Services.AddControllers();

            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen(x =>
            {
                x.SwaggerDoc("v1", new OpenApiInfo { Title = "Gerenciamento.ProjetosAPI", Version = "v1", Description = "API de Gerencimento" +
                    " de Projetos / Autor: Ezequiel Marques de Oliveira"});
            });

            Utils.Constants.ConnectionString = builder.Configuration.GetConnectionString("MySqlConnection");
            Utils.Constants.DatabaseName = builder.Configuration["DatabaseName"];
            Utils.Constants.JwtSecret = builder.Configuration["JwtSecret"];

            builder.Services.AddSingleton(new JwtManager(Utils.Constants.JwtSecret));

            builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options =>
            {
                options.RequireHttpsMetadata = false;
                options.TokenValidationParameters = new()
                {
                    ValidateIssuerSigningKey = true,
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Utils.Constants.JwtSecret)),
                };
            });

            builder.Services.AddAuthorization(auth =>
            {
                auth.DefaultPolicy = new AuthorizationPolicyBuilder()
                    .AddAuthenticationSchemes(JwtBearerDefaults.AuthenticationScheme)
                    .RequireAuthenticatedUser()
                    .Build();
            });

            var app = builder.Build();

            app.UseSwagger();
            app.UseSwaggerUI();

            app.UseCors(c =>
            {
                c.AllowAnyMethod().AllowAnyHeader().AllowAnyOrigin();
            });

            app.UseAuthorization();
            app.UseAuthentication();

            app.MapControllers();

            app.Run();
        }
    }
}
