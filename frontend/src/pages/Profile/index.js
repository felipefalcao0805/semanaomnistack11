import React, { useState, useEffect} from 'react';
import { Link, useHistory} from 'react-router-dom'
import {FiPower, FiTrash2} from 'react-icons/fi'
import api from '../../services/api';

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Profile(){
    const [incidents, setincidents] = useState([]);
    const history = useHistory();
    const  ongId = localStorage.getItem('ongId');
    const  ongName = localStorage.getItem('ongName');

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId,
            }
        }).then(response => {
            setincidents(response.data);
        })
    }, [ongId]);

    async function handleDelete(id){
        try {
            await api.delete(`incidents/${id}`,{
                headers: {
                    Authorization: ongId,
                }            
            });
            setincidents(incidents.filter(incident => incident.id !== id));
        } catch (error) {
            alert('Erro ao Deletar, Tente novamente.');
        }
    }

    function handleLogout(){
        localStorage.clear();

        history.push('/');
    }


    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the Hero"/>
                <span>Seja bem vindos, {ongName}</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button onClick={handleLogout} tyoe="button">
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>
            <h1>Casos Cadastrados</h1>

            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>Caso:</strong>
                        <p>{incident.titulo}</p>

                        <strong>Descrição:</strong>
                        <p>{incident.description}</p>

                        <strong>valor:</strong>
                        <p>{Intl.NumberFormat('pt-BR',{ style: 'currency', currency: 'BRL'})
                            .format(incident.value)}
                        </p>

                        <button onClick={() => handleDelete(incident.id)} type="button">
                            <FiTrash2 size={20} color="#a8a8b3"/>
                        </button>
                     </li>
                ))}

            </ul>
        </div>


    );
}