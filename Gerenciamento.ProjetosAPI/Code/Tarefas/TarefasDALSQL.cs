namespace TechMind.ProjetosAPI.Code.Tarefas
{
    public class TarefasDALSQL
    {
        public static string ConsultaTarefa(int? IdProjeto)
        {
            return @$"
                SELECT * FROM tarefas
                {(IdProjeto != null ? "WHERE IdProjeto = @IdProjeto" : string.Empty)}
                ORDER BY 'IdTarefa';
            ";
        }

        public static string InsereTarefa()
        {
            return @"
                INSERT INTO 
                    tarefas (
                        `IdProjeto`,  
                        `NomeUsuario`, 
                        `Titulo`, 
                        `dhCriacao`, 
                        `Importancia`, 
                        `xStatus`,
                        `ultimaAlteracao`,
                        `DescricaoTarefa`
                      )
                    VALUES
                      (
                        @IdProjeto,  
                        @NomeUsuario, 
                        @Titulo, 
                        @dhCriacao, 
                        @Importancia, 
                        @xStatus,
                        @ultimaAlteracao,
                        @DescricaoTarefa
                      );
            ";
        }

        public static string AteraTarefa()
        {
            return @"    
                UPDATE 
                    tarefas 
                SET 
                  NomeUsuario = @NomeUsuario,
                  Titulo = @Titulo,
                  Importancia = @Importancia,
                  xStatus = @xStatus,
                  ultimaAlteracao = @ultimaAlteracao,
                  DescricaoTarefa = @DescricaoTarefa
                WHERE 
                  IdTarefa = @IdTarefa
                  and IdProjeto = @IdProjeto;
            ";
        }

        public static string DeletaTarefa()
        {
            return $@"
                DELETE FROM 
                    tarefas 
                WHERE 
                    `IdTarefa` = @IdTarefa;
            ";
        }
    }
}
