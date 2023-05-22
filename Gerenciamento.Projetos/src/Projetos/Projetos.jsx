import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faPlus, faTasks, faX } from '@fortawesome/free-solid-svg-icons';
import { Link, useRevalidator } from 'react-router-dom';
import { Table, Col } from 'react-iterative-table';
import { useLoaderData } from 'react-router-dom';
import { MySwal } from '../Uteis/SweetAlertImpl';
import axios from 'axios';
import { faCircleInfo } from '../../node_modules/@fortawesome/free-solid-svg-icons/index';
import { formatDateTime } from '../Uteis/Formater';


function Projetos() {

    const data = useLoaderData();
    const revalidator = useRevalidator();

    const [table, setTable] = useState([]);
    const [fTable, setFTable] = useState([]);

    useEffect(() => {
        setTable(data.output);
        setFTable(data.output);
    }, [data]);


    const teste = (event) => {
        let teste2 = event.target.value;
        let filtered = table.filter(x => x.nomeProjeto?.startsWith(teste2)) || [];
        setFTable(filtered);
    }

    const deletaProjeto = async (event) => {
        event.preventDefault();
        let form = new FormData(event.target);
        let result = await axios.delete('/api/Projetos/DeletaProjeto', {params: {"Id": form.get('id')}}).then(ret => ret.data);
        
        if (result.success) {
            MySwal.fire("Projetos", "Projeto excluído com sucesso!", "success");
            revalidator.revalidate();
        } else {
            MySwal.fire("Projetos", "Erro!", 'error');
        }
    }

    return (
        <>
            <div className="d-flex justify-content-center">
                <h1 className='my-4'>Página Inicial - Projetos</h1>
            </div>
            <div className="row">
                <div className="col-sm-7 col-md-4 offset-md-3 mb-2">
                    <input className="form-control" name="nomeProjeto" type="text" onChange={teste} placeholder="Título do Projeto"></input>
                </div>
                <div className="col-sm-5 col-md-4 col-lg-3">
                    {/* <div className="row d-flex flex-row justify-content-between"> */}
                        <Link to='/projetos/addprojeto' className='btn btn-block btn-success'>
                            Adicionar Projeto <FontAwesomeIcon icon={faPlus} />
                        </Link>
                    {/* </div> */}
                </div>
            </div>

            <div className="table-responsive-sm">
                <Table it={fTable.length} className='table table-striped table-bordered table-md mt-4'>
                    <Col func={i => fTable[i].id}>Código</Col>
                    <Col func={i => fTable[i].nomeProjeto}>Nome do Projeto</Col>
                    <Col func={i => formatDateTime(fTable[i].dhCriacao)}>Adicionado em</Col>
                    <Col func={i => fTable[i].quantidade}>Qtd. Tarefas</Col> 
                    <Col func={i => fTable[i].xStatus}>Status</Col>
                    <Col className='col-12 col-md-3' func={i =>
                        <>
                            <Link to={`/projetos/${fTable[i].id}`} className='btn btn-primary btn-sm mr-2 mb-sm-2'  state={{...fTable[i]}}>
                                <FontAwesomeIcon icon={faTasks} fixedWidth />
                            </Link>

                            <Link className='btn btn-warning btn-sm mr-2 mb-sm-2' to={`/projetos/${fTable[i].id}/alteraprojeto`} state={{...fTable[i]}}
                                ><FontAwesomeIcon icon={faPencil} fixedWidth />
                            </Link>

                            <button type='button' className='btn btn-success btn-sm mr-2 mb-sm-2' onClick={(e) => {
                                e.preventDefault();
                                MySwal.fire("Descrição - Projeto", fTable[i].descricaoProjeto ? fTable[i].descricaoProjeto : "Sem Descrição!");
                            }}><FontAwesomeIcon icon={faCircleInfo} fixedWidth /></button>

                            <form className='d-inline' onSubmit={deletaProjeto}>
                                <button type='submit' className='btn btn-danger btn-sm mr-2 mb-sm-2'>
                                    <FontAwesomeIcon icon={faX} fixedWidth />
                                </button>
                                <input type='hidden' name='id' value={fTable[i].id}/>
                            </form>
                        </>
                        }>Ação</Col>
                </Table>
            </div>
        </>
    );
}

export default Projetos;