using MySql.Data.MySqlClient;
using System.Data;
using Gerenciamento.ProjetosAPI.Utils;
using Gerenciamento.ProjetosAPI.Helpers;
using Gerenciamento.ProjetosAPI.Models.TarefasModel;

namespace TechMind.ProjetosAPI.Code.Tarefas
{
    public class TarefasDAL : IDisposable
    {
        protected MySqlCommand _command;
        protected MySqlConnection _connection;

        public TarefasDAL()
        {
            _connection = new(Constants.ConnectionString);
            _connection.Open();

            _command = new()
            {
                Connection = _connection
            };

            _connection.ChangeDatabase(Constants.DatabaseName);
        }

        public TarefasDAL(TarefasDAL tarefasDAL)
        {
            _connection = tarefasDAL._connection;
            _command = tarefasDAL._command;
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

        public List<ConsultaTarefa> ConsultaTarefa(int? IdProjeto)
        {
            List<ConsultaTarefa> saida = new();

            try
            {
                _command.CommandText = TarefasDALSQL.ConsultaTarefa(IdProjeto);
                _command.Parameters.Clear();

                _command.Parameters.AddWithValue("IdProjeto", IdProjeto);

                using (var reader = _command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        saida.Add(new ConsultaTarefa()
                        {
                            IdTarefa = DBConvert.ConvertFromDBVal<int>(reader.GetValue(0)),
                            IdProjeto = DBConvert.ConvertFromDBVal<int>(reader.GetValue(1)),
                            NomeUsuario = DBConvert.ConvertFromDBVal<string>(reader.GetValue(2)),
                            Titulo = DBConvert.ConvertFromDBVal<string>(reader.GetValue(3)),
                            dhCriacao = DBConvert.ConvertFromDBVal<DateTime>(reader.GetValue(4)),
                            Importancia = DBConvert.ConvertFromDBVal<string>(reader.GetValue(5)),
                            xStatus = DBConvert.ConvertFromDBVal<string>(reader.GetValue(6)),
                            ultimaAlteracao = DBConvert.ConvertFromDBVal<DateTime>(reader.GetValue(7)),
                            DescricaoTarefa = DBConvert.ConvertFromDBVal<string>(reader.GetValue(8)),
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

        public int InsereTarefa(int IdProjeto, string NomeUsuario, string Titulo, string Importancia, string xStatus, string DescricaoTarefa)
        {
            int saida = 0;
            var dataInicio = DateTime.Now;

            try
            {
                _command.CommandText = TarefasDALSQL.InsereTarefa();
                _command.Parameters.Clear();

                _command.Parameters.AddWithValue("IdProjeto", IdProjeto);
                _command.Parameters.AddWithValue("NomeUsuario", NomeUsuario);
                _command.Parameters.AddWithValue("Titulo", Titulo);
                _command.Parameters.AddWithValue("dhCriacao", dataInicio);
                _command.Parameters.AddWithValue("Importancia", Importancia);
                _command.Parameters.AddWithValue("xStatus", xStatus);
                _command.Parameters.AddWithValue("ultimaAlteracao", dataInicio);
                _command.Parameters.AddWithValue("DescricaoTarefa", DescricaoTarefa);

                saida += _command.ExecuteNonQuery();
            }
            catch (Exception)
            {
                throw;
            }
            return saida;
        }

        public int AlteraTarefa(AlteraTarefaRequest req)
        {
            int saida = 0;
            var dataAlt = DateTime.Now;

            try
            {
                _command.CommandText = TarefasDALSQL.AteraTarefa();
                _command.Parameters.Clear();

                _command.Parameters.AddWithValue("NomeUsuario", req.NomeUsuario);
                _command.Parameters.AddWithValue("Titulo", req.Titulo);
                _command.Parameters.AddWithValue("Importancia", req.Importancia);
                _command.Parameters.AddWithValue("xStatus", req.xStatus);
                _command.Parameters.AddWithValue("ultimaAlteracao", dataAlt);
                _command.Parameters.AddWithValue("DescricaoTarefa", req.DescricaoTarefa);
                _command.Parameters.AddWithValue("IdTarefa", req.IdTarefa);
                _command.Parameters.AddWithValue("IdProjeto", req.IdProjeto);

                saida += _command.ExecuteNonQuery();
            }
            catch (Exception)
            {
                throw;
            }
            return saida;
        }

        public int DeletaTarefa(int IdTarefa)
        {
            int saida = 0;

            try
            {
                _command.CommandText = TarefasDALSQL.DeletaTarefa();
                _command.Parameters.Clear();

                _command.Parameters.AddWithValue("IdTarefa", IdTarefa);

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
