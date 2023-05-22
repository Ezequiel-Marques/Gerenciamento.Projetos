namespace Gerenciamento.ProjetosAPI.Models.ProjetosModel
{
    public class ConsultaProjeto
    {
        public int Id { get; set; }
        public int Quantidade { get; set; }
        public string NomeProjeto { get; set; }
        public string DescricaoProjeto { get; set; }
        public DateTime dhCriacao { get; set; }
        public string xStatus { get; set; }
        public string linkProjeto { get; set; }
    }
}
