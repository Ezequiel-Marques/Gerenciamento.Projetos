namespace Gerenciamento.ProjetosAPI.Models
{
    public class Response<T>
    {
        public bool Success { get; set; }
        public T Output { get; set; }
        public string Message { get; set; }
        public Response(bool success, T output, string message)
        {
            this.Message = message;
            this.Success = success;
            this.Output = output;
        }
    }
}
