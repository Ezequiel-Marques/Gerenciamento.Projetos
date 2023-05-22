using Gerenciamento.ProjetosAPI.Models.TarefasModel;
using Microsoft.AspNetCore.Mvc;
using TechMind.ProjetosAPI.Code.Tarefas;

namespace TechMind.ProjetosAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class TarefasController : Controller
    {
        [HttpGet("ConsultaTarefa")]
        public ActionResult ConsultaTarefa(int? IdProjeto)
        {
            var result = new TarefasBLL().ConsultaTarefa(IdProjeto);
            return Ok(result);
        }

        [HttpPost("InsereTarefa")]
        public ActionResult InsereTarefa([FromBody] InsereTarefaRequest req)
        {
            var result = new TarefasBLL().InsereTarefa(req.IdProjeto, req.NomeUsuario, req.Titulo, req.Importancia, req.xStatus, req.DescricaoTarefa);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        [HttpPut("AlteraTarefa")]
        public ActionResult AlteraTarefa([FromBody] AlteraTarefaRequest req)
        {
            var result = new TarefasBLL().AlteraTarefa(req);
            return result.Success ? Ok(result) : BadRequest(result);
        }

        [HttpDelete("DeletaTarefa")]
        public ActionResult DeletaTarefa([FromQuery] int IdTarefa)
        {
            var result = new TarefasBLL().DeletaTarefa(IdTarefa);
            return result.Success ? Ok(result) : BadRequest(result);
        }
    }
}
