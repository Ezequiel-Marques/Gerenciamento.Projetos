namespace Gerenciamento.ProjetosAPI.Models.TarefasModel
{
    public class InsereTarefaRequest
    {
        public int IdProjeto { get; set; }
        public string NomeUsuario { get; set; }
        public string Titulo { get; set; }
        public string Importancia { get; set; }
        public string xStatus { get; set; }
        public string DescricaoTarefa { get; set; }
    }
}
