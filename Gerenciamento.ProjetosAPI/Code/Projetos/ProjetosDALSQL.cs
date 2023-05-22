using System.Text.RegularExpressions;

namespace Gerenciamento.ProjetosAPI.Code.Projetos
{
    public class ProjetosDALSQL
    {
        public static string ConsultaProjeto(int? Id)
        {
            return @$"
                SELECT A.*, (SELECT count(*) FROM tarefas as B WHERE B.IdProjeto = A.Id) as QTD FROM projetos as A
                {(Id != null ? "WHERE Id = @Id" : string.Empty)}
                ORDER BY Id;
            ";
        }

        public static string InsereProjeto()
        {
            return @"
                INSERT INTO 
                  projetos (
                    `Id`, 
                    `NomeProjeto`, 
                    `DescricaoProjeto`, 
                    `dhCriacao`, 
                    `xStatus`,  
                    `linkProjeto`
                  )
                VALUES
                  (
                    Id, 
                    @NomeProjeto,  
                    @DescricaoProjeto,  
                    @dhCriacao, 
                    @xStatus, 
                    @linkProjeto
                  );
            ";
        }

        public static string AlteraProjeto()
        {
            return @"
                UPDATE 
                    projetos 
                SET 
                    NomeProjeto = @NomeProjeto,
                    DescricaoProjeto = @DescricaoProjeto,
                    linkProjeto = @linkProjeto,
                    xStatus = @xStatus
                WHERE 
                    Id = @Id;
            ";
        }

        public static string DeletaProjeto()
        {
            return $@"
                DELETE FROM 
                  projetos 
                WHERE 
                  `Id` = @Id;
            ";
        }
    }
}
