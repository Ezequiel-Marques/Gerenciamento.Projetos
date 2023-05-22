import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faPlus, faLeftLong, faX, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { Link, useRevalidator } from 'react-router-dom';
import { Table, Col } from 'react-iterative-table';
import { useLoaderData } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { MySwal } from '../Uteis/SweetAlertImpl';
import axios from 'axios';
import { formatDateTime } from '../Uteis/Formater';

function Tarefas() {

    const data = useLoaderData();
    const location = useLocation();

    const revalidator = useRevalidator();

    const [table, setTable] = useState([]);
    const [fTable, setFTable] = useState([]);

    useEffect(() => {
        setTable(data.output);
        setFTable(data.output);
    }, [data]);


    const teste = (event) => {
        let teste2 = event.target.value;
        let filtered = table.filter(x => x.titulo?.startsWith(teste2)) || [];
        setFTable(filtered);
    }

        const deletaTarefa = async (event) => {
        event.preventDefault();
        let form = new FormData(event.target);
        let result = await axios.delete('/api/Tarefas/DeletaTarefa', {params: {"idTarefa": form.get('idTarefa')}}).then(ret => ret.data);
        
        if (result.success) {
            MySwal.fire("Projetos", "Tarefa excluída com sucesso!", "success");
            revalidator.revalidate();
        } else {
            MySwal.fire("Projetos", "Erro!", 'error');
        }
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Link to={-1} className='btn btn-secondary btn-sm my-4'>
                            Voltar <FontAwesomeIcon icon={faLeftLong} />
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mb-3">
                        <h1>Tarefas de <strong>{location.state?.nomeProjeto}</strong></h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-5 col-md-4 col-lg-3 mt-1">
                        <input className="form-control" name="nomeProjeto" type="text" onChange={teste}
                        placeholder="Título da Tarefa"></input>
                    </div>
                    <div className="col-sm-5 col-md-4 col-lg-3 mt-1">
                        <Link to='./addtarefa' className='btn btn-success'>
                            Adicionar Tarefa <FontAwesomeIcon icon={faPlus} />
                        </Link>
                    </div>
                </div>

                <div className="table-responsive-sm">
                    <Table it={fTable.length} className='table table-striped table-bordered table-md mt-4'>
                        <Col func={i => fTable[i].idTarefa}>Código Tarefa</Col>
                        <Col func={i => fTable[i].titulo}>Projeto</Col>
                        {/* <Col func={i => fTable[i].descricaoTarefa}>Descrição</Col> */}
                        <Col func={i => formatDateTime(fTable[i].dhCriacao)}>Adicionado em</Col>
                        <Col func={i => formatDateTime(fTable[i].ultimaAlteracao)}>Última Alteração</Col>
                        <Col func={i => fTable[i].nomeUsuario}>Usuário</Col>
                        <Col func={i => fTable[i].importancia}>Importância</Col>
                        <Col func={i => fTable[i].xStatus}>Status</Col>
                        <Col func={i =>
                            <>
                                <Link className='btn btn-warning btn-sm mr-2 mb-0 mb-sm-1' to={`./${fTable[i].idTarefa}/alteratarefa`} state={{...fTable[i], ...fTable[i].idProjeto}}>
                                    <FontAwesomeIcon icon={faPencil} fixedWidth />
                                </Link>

                                <button type='button' className='btn btn-success btn-sm mr-2 mb-0 mb-sm-1' onClick={(e) => {
                                    e.preventDefault();
                                    MySwal.fire("Descrição - Tarefa", fTable[i].descricaoTarefa ? fTable[i].descricaoTarefa : "Sem Descrição!");
                                }}><FontAwesomeIcon icon={faCircleInfo} fixedWidth /></button>
                                    
                                <form className='d-inline' onSubmit={deletaTarefa}>
                                    <button type='submit' className='btn btn-danger btn-sm mb-0 mb-sm-1' >
                                        <FontAwesomeIcon icon={faX} fixedWidth />
                                    </button>
                                    <input type='hidden' name='idTarefa' value={fTable[i].idTarefa}/>
                                </form>
                            </>
                            } >Ação</Col>
                    </Table>
                </div>
            </div>
        </>
    );
}

export default Tarefas;