import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeftLong, faPencil } from '@fortawesome/free-solid-svg-icons';
import { Form, useLocation, useActionData } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { MySwal } from '../Uteis/SweetAlertImpl';

function AlteraProjeto(){

    const location = useLocation();
    const data = useActionData();

    useEffect(() => {
        if (data) {
            if (data.success) {
                MySwal.fire("Alterar Projeto", "Sucesso", 'success');
            } else {
                MySwal.fire("Alterar Projeto", "Erro", 'error');
            }
        }
    }, [data]);

    return (
        <>
            <Form action="#" method='put'>
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
                            <h1>Editar Projeto</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-sm-12">
                            <strong><label className='mt-2'>Código do Projeto:</label> <br /></strong>
                            <input type="number" className='form-control' name='Id' defaultValue={location.state?.id} required readOnly></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-sm-12">
                            <strong><label className='mt-2'>Nome do Projeto:</label> <br /></strong>
                            <input type="text" className='form-control' name='nomeProjeto' defaultValue={location.state?.nomeProjeto} required></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-sm-12">
                            <strong><label className='mb-0 mt-3'>Link do Projeto: (GitHub, GitLab, ...)</label> <br /></strong>
                            <input type="text" className='form-control' name='linkProjeto' defaultValue={location.state?.linkProjeto}></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8 col-sm-10">
                            <label htmlFor="" className='mb-0 mt-3'><strong>Descrição do Projeto:</strong></label>
                            <textarea style={{resize: "none", height: "110px"}} className="form-control" name='descricaoProjeto' defaultValue={location.state?.descricaoProjeto}></textarea>
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
                                <input className="form-check-input" type="radio" id='f4' name="xStatus" value="A iniciar" defaultChecked={location.state?.xStatus === "A iniciar"}></input>
                                <label className="form-check-label" htmlFor="f4">A iniciar</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" id='f5' name="xStatus" value="Em andamento" defaultChecked={location.state?.xStatus === "Em andamento"}></input>
                                <label className="form-check-label" htmlFor="f5">Em andamento</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" id='f6' name="xStatus" value="Finalizado" defaultChecked={location.state?.xStatus === "Finalizado"}></input>
                                <label className="form-check-label" htmlFor="f6">Finalizado</label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-sm-12 mb-2">
                            <button type='submit' className='btn btn-warning btn-sm mt-3'>Editar Projeto <FontAwesomeIcon icon={faPencil} /></button>
                        </div>
                    </div>
                </div>
            </Form>
        </>
    );
}

export default AlteraProjeto;