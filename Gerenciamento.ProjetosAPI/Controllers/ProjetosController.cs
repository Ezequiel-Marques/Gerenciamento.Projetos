using Microsoft.AspNetCore.Mvc;
using Gerenciamento.ProjetosAPI.Code.Projetos;
using Gerenciamento.ProjetosAPI.Models.ProjetosModel;
using Gerenciamento.ProjetosAPI.Models;
using Microsoft.AspNetCore.Authorization;

namespace Gerenciamento.ProjetosAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class ProjetosController : Controller
    {
        [HttpGet("ConsultaProjeto")]
        public Response<List<ConsultaProjeto>> ConsultaProjeto([FromQuery] int? Id)
        {
            return new ProjetosBLL().ConsultaProjeto(Id);
        }

        [HttpPost("InsereProjeto")]
        public Response<int> InsereProjeto([FromBody] InsereProjetoRequest req)
        {
            return new ProjetosBLL().InsereProjeto(req.NomeProjeto, req.DescricaoProjeto, req.linkProjeto, req.xStatus);
        }

        [HttpPut("AlteraProjeto")]
        public Response<int> AlteraProjeto([FromBody] AlteraProjetoRequest req)
        {
            return new ProjetosBLL().AlteraProjeto(req);
        }

        [HttpDelete("DeletaProjeto")]
        public Response<int> DeletaProjeto([FromQuery] int Id)
        {
            return new ProjetosBLL().DeletaProjeto(Id);
        }
    }
}
