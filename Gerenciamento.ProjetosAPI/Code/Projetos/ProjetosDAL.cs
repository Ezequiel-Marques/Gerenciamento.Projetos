using Gerenciamento.ProjetosAPI.Helpers;
using MySql.Data.MySqlClient;
using System.Data;
using Gerenciamento.ProjetosAPI.Models.ProjetosModel;
using Gerenciamento.ProjetosAPI.Utils;

namespace Gerenciamento.ProjetosAPI.Code.Projetos
{
    public class ProjetosDAL : IDisposable
    {
        protected MySqlCommand _command;
        protected MySqlConnection _connection;

        public ProjetosDAL()
        {
            _connection = new(Constants.ConnectionString);
            _connection.Open();

            _command = new()
            {
                Connection = _connection
            };

            _connection.ChangeDatabase(Constants.DatabaseName);
        }

        public ProjetosDAL(ProjetosDAL projetosDAL)
        {
            _connection = projetosDAL._connection;
            _command = projetosDAL._command;
        }

        public MySqlTransaction InitTransaction()
        {
            return _connection.BeginTransaction();
        }

        public void Dispose()
        {
            GC.SuppressFinalize(this);
            if (_connection.State == ConnectionState.Open) _connection.Close();
            _connection.Dispose();
            _command.Dispose();
        }

        public List<ConsultaProjeto> ConsultaProjeto(int? Id)
        {
            List<ConsultaProjeto> saida = new();

            try
            {
                _command.CommandText = ProjetosDALSQL.ConsultaProjeto(Id);
                _command.Parameters.Clear();

                _command.Parameters.AddWithValue("Id", Id);

                using (var reader = _command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        saida.Add(new ConsultaProjeto()
                        {
                            Id = DBConvert.ConvertFromDBVal<int>(reader.GetValue(0)),
                            NomeProjeto = DBConvert.ConvertFromDBVal(reader.GetValue(1)),
                            DescricaoProjeto = DBConvert.ConvertFromDBVal(reader.GetValue(2)),
                            dhCriacao = DBConvert.ConvertFromDBVal<DateTime>(reader.GetValue(3)),
                            xStatus = DBConvert.ConvertFromDBVal(reader.GetValue(4)),
                            linkProjeto = DBConvert.ConvertFromDBVal(reader.GetValue(5)),
                            Quantidade = DBConvert.ConvertFromDBVal<int>(reader.GetValue(6))
                        });
                    }
                }
            }
            catch (Exception)
            {
                throw;
            }
            return saida;
        }

        public int InsereProjeto(string NomeProjeto, string DescricaoProjeto, string linkProjeto, string xStatus)
        {
            int saida = 0;
            var dataInicio = DateTime.Now;

            try
            {
                _command.CommandText = ProjetosDALSQL.InsereProjeto();
                _command.Parameters.Clear();

                _command.Parameters.AddWithValue("NomeProjeto", NomeProjeto);
                _command.Parameters.AddWithValue("DescricaoProjeto", DescricaoProjeto);
                _command.Parameters.AddWithValue("linkProjeto", linkProjeto);
                _command.Parameters.AddWithValue("dhCriacao", dataInicio);
                _command.Parameters.AddWithValue("xStatus", xStatus);

                saida += _command.ExecuteNonQuery();
            }
            catch (Exception)
            {
                throw;
            }
            return saida;
        }

        public int AlteraProjeto(AlteraProjetoRequest req)
        {
            int saida = 0;

            try
            {
                _command.CommandText = ProjetosDALSQL.AlteraProjeto();
                _command.Parameters.Clear();

                _command.Parameters.AddWithValue("Id", req.Id);
                _command.Parameters.AddWithValue("NomeProjeto", req.NomeProjeto);
                _command.Parameters.AddWithValue("DescricaoProjeto", req.DescricaoProjeto);
                _command.Parameters.AddWithValue("linkProjeto", req.linkProjeto);
                _command.Parameters.AddWithValue("xStatus", req.xStatus);

                saida += _command.ExecuteNonQuery();
            }
            catch (Exception)
            {
                throw;
            }
            return saida;
        }

        public int DeletaProjeto(int Id)
        {
            int saida = 0;

            try
            {
                _command.CommandText = ProjetosDALSQL.DeletaProjeto();
                _command.Parameters.Clear();

                _command.Parameters.AddWithValue("Id", Id);

                saida += _command.ExecuteNonQuery();
            }
            catch (Exception)
            {
                throw;
            }
            return saida;
        }
    }
}
