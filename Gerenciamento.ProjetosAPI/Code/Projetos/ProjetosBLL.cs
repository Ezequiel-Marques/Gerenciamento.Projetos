using Gerenciamento.ProjetosAPI.Models.ProjetosModel;
using Gerenciamento.ProjetosAPI.Models;

namespace Gerenciamento.ProjetosAPI.Code.Projetos
{
    public class ProjetosBLL
    {
        public Response<List<ConsultaProjeto>> ConsultaProjeto(int? Id)
        {
            using var dal = new ProjetosDAL();

            try
            {
                var ConsultaProjeto = dal.ConsultaProjeto(Id);

                if (ConsultaProjeto.Count > 0)
                {
                    return new(true, ConsultaProjeto, "Ok");
                }
                else
                {
                    return new(false, ConsultaProjeto, "Projeto(s) não encontrado(s)!");
                }
            }
            catch (Exception ex)
            {
                return new(false, null, ex.Message);
            }
        }

        public Response<int> InsereProjeto(string NomeProjeto, string DescricaoProjeto, string linkProjeto, string xStatus)
        {
            using var dal = new ProjetosDAL();

            try
            {
                var InsereProjeto = dal.InsereProjeto(NomeProjeto, DescricaoProjeto, linkProjeto, xStatus);

                if (InsereProjeto > 0)
                {
                    return new(true, InsereProjeto, "Ok");
                }
                else
                {
                    return new(false, InsereProjeto, "Projeto(s) não encontrado(s)!");
                }
            }
            catch (Exception ex)
            {
                return new(false, 0, ex.Message);
            }
        }

        public Response<int> AlteraProjeto(AlteraProjetoRequest req)
        {
            using var dal = new ProjetosDAL();

            try
            {
                var AlteraProjeto = dal.AlteraProjeto(req);

                if (AlteraProjeto > 0)
                {
                    return new(true, AlteraProjeto, "Ok");
                }
                else
                {
                    return new(false, AlteraProjeto, "Projeto(s) não encontrado(s)!");
                }
            }
            catch (Exception ex)
            {
                return new(false, 0, ex.Message);
            }
        }

        public Response<int> DeletaProjeto(int Id)
        {
            using var dal = new ProjetosDAL();

            try
            {
                var DeletaProjeto = dal.DeletaProjeto(Id);

                if (DeletaProjeto > 0)
                {
                    return new(true, DeletaProjeto, "Ok");
                }
                else
                {
                    return new(false, DeletaProjeto, "Projeto(s) não encontrado(s)!");
                }
            }
            catch (Exception ex)
            {
                return new(false, 0, ex.Message);
            }
        }
    }
}
