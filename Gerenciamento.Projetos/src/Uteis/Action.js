import { redirect } from "react-router-dom";
import api from "./Api";
import { MySwal } from "./SweetAlertImpl";

// ----- Projetos -----

export async function ProjetoLoader(){
    return api.get('/api/Projetos/ConsultaProjeto').then(ret => ret.data);
}

export async function ProjetoActions({ request, params }) {
    if (request.method === "POST") {
        let formData = await request.formData();
        let object = {};
        formData.forEach((value, key) => object[key] = value);
        return api.post('/api/Projetos/InsereProjeto', object).then(ret => ret.data);

    } else if (request.method === "PUT") {
        let formData = await request.formData();
        let object = {};
        formData.forEach((value, key) => object[key] = value);
        return api.put('/api/Projetos/AlteraProjeto', object).then(ret => ret.data);

    }
}

// ----- Tarefas -----

export async function TarefaLoader({ request, params }) {
    return api.get('/api/Tarefas/ConsultaTarefa', {params: { idProjeto: params.id }}).then(ret => ret.data);
}

export async function TarefaActions({ request, params }) {
    if (request.method === "POST") {
        let formData = await request.formData();
        var object = {};
        formData.forEach((value, key) => object[key] = value);
        object["idProjeto"] = params.id;
        return api.post('/api/Tarefas/InsereTarefa', object).then(ret => ret.data);
    } else if (request.method === "PUT") {
        let formData = await request.formData();
        let object = {};
        formData.forEach((value, key) => object[key] = value);
        return api.put('/api/Tarefas/AlteraTarefa', object).then(ret => ret.data);

    }
}