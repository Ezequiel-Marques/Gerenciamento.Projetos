using Gerenciamento.ProjetosAPI.Models.TarefasModel;
using Gerenciamento.ProjetosAPI.Models;

namespace TechMind.ProjetosAPI.Code.Tarefas
{
    public class TarefasBLL
    {
        public Response<List<ConsultaTarefa>> ConsultaTarefa(int? IdProjeto)
        {
            using var dal = new TarefasDAL();

            try
            {
                var ConsultaTarefa = dal.ConsultaTarefa(IdProjeto);

                if (ConsultaTarefa.Count > 0)
                {
                    return new(true, ConsultaTarefa, "Ok");
                }
                else
                {
                    return new(false, ConsultaTarefa, "Tarefa(s) não encontrada(s)!");
                }
            }
            catch (Exception ex)
            {
                return new(false, null, ex.Message);
            }
        }

        public Response<int> InsereTarefa(int IdProjeto, string NomeUsuario, string Titulo, string Importancia, string xStatus, string DescricaoTarefa)
        {
            using var dal = new TarefasDAL();

            try
            {
                var InsereTarefa = dal.InsereTarefa(IdProjeto, NomeUsuario, Titulo, Importancia, xStatus, DescricaoTarefa);

                if (InsereTarefa > 0)
                {
                    return new(true, InsereTarefa, "Ok");
                }
                else
                {
                    return new(false, InsereTarefa, "Tarefa(s) não encontrada(s)!");
                }
            }
            catch (Exception ex)
            {
                return new(false, 0, ex.Message);
            }
        }

        public Response<int> AlteraTarefa(AlteraTarefaRequest req)
        {
            using var dal = new TarefasDAL();

            try
            {
                var AlteraTarefa = dal.AlteraTarefa(req);

                if (AlteraTarefa > 0)
                {
                    return new(true, AlteraTarefa, "Ok");
                }
                else
                {
                    return new(false, AlteraTarefa, "Tarefa(s) não encontrada(s)!");
                }
            }
            catch (Exception ex)
            {
                return new(false, 0, ex.Message);
            }
        }

        public Response<int> DeletaTarefa(int IdTarefa)
        {
            using var dal = new TarefasDAL();

            try
            {
                var DeletaTarefa = dal.DeletaTarefa(IdTarefa);

                if (DeletaTarefa > 0)
                {
                    return new(true, DeletaTarefa, "Ok");
                }
                else
                {
                    return new(false, DeletaTarefa, "Tarefa(s) não encontrada(s)!");
                }
            }
            catch (Exception ex)
            {
                return new(false, 0, ex.Message);
            }
        }
    }
}