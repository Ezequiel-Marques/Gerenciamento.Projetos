namespace Gerenciamento.ProjetosAPI.Models.TarefasModel
{
    public class ConsultaTarefa
    {
        public int IdTarefa { get; set; }
        public int IdProjeto { get; set; }
        public string NomeUsuario { get; set; }
        public string Titulo { get; set; }
        public DateTime dhCriacao { get; set; }
        public string Importancia { get; set; }
        public string xStatus { get; set; }
        public DateTime ultimaAlteracao { get; set; }
        public string DescricaoTarefa { get; set; }
    }
}
