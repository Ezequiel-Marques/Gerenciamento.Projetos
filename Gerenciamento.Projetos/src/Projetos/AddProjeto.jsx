import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Form, useActionData } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { MySwal } from '../Uteis/SweetAlertImpl';

function AddProjeto() {

    const data = useActionData();

    useEffect(() => {
        if (data) {
            if (data.success) {
                MySwal.fire("Adicionar Projeto", "Sucesso", 'success');
            } else {
                MySwal.fire("Adicionar Projeto", "Erro", 'error');
            }
        }
    }, [data]);

    return (
        <>
            <Form action="#" method='post'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Link to={-1} className='btn btn-secondary btn-sm my-4'>
                                Voltar <FontAwesomeIcon icon={faLeftLong} />
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h1>Adicionar Projeto</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-4">
                            <strong><label className='mt-2'>Nome do Projeto:</label> <br /></strong>
                            <input type="text" className='form-control' name='nomeProjeto' required></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-4">
                            <strong><label className='mb-0 mt-3'>Link do Projeto: (GitHub, GitLab, ...)</label> <br /></strong>
                            <input type="link" className='form-control' name='linkProjeto'></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-5 d-flex flex-column">
                            <label htmlFor="" className='mb-0 mt-3'><strong>Descrição do Projeto:</strong></label>
                            <textarea style={{resize: "none", height: "130px"}} className="form-control" name='descricaoProjeto'></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4 mt-3 mb-0">
                            <label htmlFor=""><strong>Status:</strong></label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" id='f4' name="xStatus" value="A iniciar" required></input>
                                <label className="form-check-label" htmlFor="f4">A iniciar</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" id='f5' name="xStatus" value="Em andamento" required></input>
                                <label className="form-check-label" htmlFor="f5">Em andamento</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" id='f6' name="xStatus" value="Finalizado" required></input>
                                <label className="form-check-label" htmlFor="f6">Finalizado</label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <button type='submit' className='btn btn-success btn-sm mt-3'>Adicionar Projeto <FontAwesomeIcon icon={faPlus} /></button>
                        </div>
                    </div>
                </div>
            </Form>
        </>
    );
}

export default AddProjeto;