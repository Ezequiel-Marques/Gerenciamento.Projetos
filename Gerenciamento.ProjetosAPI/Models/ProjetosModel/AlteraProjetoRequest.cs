namespace Gerenciamento.ProjetosAPI.Models.ProjetosModel
{
    public class AlteraProjetoRequest
    {
        public int Id { get; set; }
        public string NomeProjeto { get; set; }
        public string DescricaoProjeto { get; set; }
        public string linkProjeto { get; set; }
        public string xStatus { get; set; }
    }
}
