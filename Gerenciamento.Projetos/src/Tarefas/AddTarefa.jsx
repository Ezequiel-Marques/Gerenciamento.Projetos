import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Form, Link, useActionData } from 'react-router-dom';
import { MySwal } from '../Uteis/SweetAlertImpl';

function AddTarefa() {

    const data = useActionData();

    useEffect(() => {
        if (data) {
            if (data.success) {
                MySwal.fire("Adicionar Tarefa", "Sucesso", 'success');
            } else {
                MySwal.fire("Adicionar Tarefa", "Erro", 'error');
            }
        }
    }, [data]);

    return (
        <>
            <Form action="#" method='post'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-0">
                            <Link to={-1} className='btn btn-secondary btn-sm mt-4 mb-3'>
                                Voltar <FontAwesomeIcon icon={faLeftLong} />
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h1>Adicionar Tarefa</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-5">
                            <strong><label className='mt-2'>Nome da Tarefa:</label> <br /></strong>
                            <input type="text" className='form-control' name='titulo' required></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-5">
                            <strong><label className='mb-0 mt-3'>Nome do Usuário:</label> <br /></strong>
                            <input type="text" className='form-control' name='nomeUsuario' required></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-5 d-flex flex-column">
                            <label htmlFor="" className='mb-0 mt-3'><strong>Descrição da Tarefa:</strong></label>
                            <textarea style={{resize: "none", height: "130px"}} className="form-control" name='descricaoTarefa'></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4 mt-3 mb-0">
                            <label htmlFor=""><strong>Importância:</strong></label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-1">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" id='f1' name="importancia" value="Baixa" required></input>
                                <label className="form-check-label" htmlFor="f1">Baixa</label>
                            </div>
                        </div>
                        <div className="col-12 col-lg-1">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" id='f2' name="importancia" value="Normal" required></input>
                                <label className="form-check-label" htmlFor="f2">Normal</label>
                            </div>
                        </div>
                        <div className="col-12 col-lg-1">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" id='f3' name="importancia" value="Urgente" required></input>
                                <label className="form-check-label" htmlFor="f3">Urgente</label>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-4 mt-3 mb-0">
                            <label htmlFor=""><strong>Status:</strong></label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-1 pr-lg-0 mr-lg-0">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" id='f4' name="xStatus" value="A iniciar" required></input>
                                <label className="form-check-label" htmlFor="f4">A iniciar</label>
                            </div>
                        </div>
                        <div className="col-12 col-lg-2 pl-lg-4 pr-lg-0">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" id='f5' name="xStatus" value="Em andamento" required></input>
                                <label className="form-check-label" htmlFor="f5">Em andamento</label>
                            </div>
                        </div>
                        <div className="col-12 col-lg-1 pl-lg-0 mr-lg-0">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" id='f6' name="xStatus" value="Finalizado" required></input>
                                <label className="form-check-label" htmlFor="f6">Finalizado</label>
                            </div>
                        </div>
                    </div>
                        
                    <div className="row">
                        <div className="col-3">
                            <button type='submit' className='btn btn-success btn-sm mt-3'>Adicionar Tarefa <FontAwesomeIcon icon={faPlus} /></button>
                        </div>
                    </div>
                </div>
            </Form>
        </>
    );
}

export default AddTarefa;