using Microsoft.Extensions.Configuration;

public class Key
{
    public string configPath = string.Empty;
    public string configName = string.Empty;
    public string databaseName = string.Empty;
    public string environment { get; set; }

    public Key (IConfiguration configuration)
    {
        this.environment = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");
        this.configPath = configuration.GetValue<string>("configPath");
        this.configName = configuration.GetValue<string>("configName");
        this.databaseName = configuration.GetValue<string>("databaseName");
    }
}