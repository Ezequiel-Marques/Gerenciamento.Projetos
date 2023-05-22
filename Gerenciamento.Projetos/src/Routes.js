import { createBrowserRouter } from "react-router-dom";
import Projetos from "./Projetos/Projetos";
import AddTarefa from "./Tarefas/AddTarefa";
import App from "./App";
import { TarefaLoader, ProjetoLoader, ProjetoActions } from "./Uteis/Action";
import AddProjeto from "./Projetos/AddProjeto";
import AlteraProjeto from "./Projetos/AlteraProjeto";
import Tarefas from "./Tarefas/Tarefas";
import { TarefaActions } from "./Uteis/Action";
import AlteraTarefa from "./Tarefas/AlteraTarefa";
import Error from "./Uteis/Error";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Projetos />,
                loader: ProjetoLoader,
                action: ProjetoActions,
            },
            {
                path: "/projetos/addprojeto",
                element: <AddProjeto />,
                action: ProjetoActions,
            },
            {
                path: "/projetos/:id/alteraprojeto",
                element: <AlteraProjeto />,
                action: ProjetoActions,
            },
            {
                path: "/projetos/:id",
                element: <Tarefas />,
                loader: TarefaLoader,
            },
            {
                path: "/projetos/:id/addtarefa",
                element: <AddTarefa />,
                action: TarefaActions,
            },
            {
                path: "/projetos/:id/:idTarefa/alteratarefa",
                element: <AlteraTarefa />,
                action: TarefaActions,
            }
        ]
    }
]);