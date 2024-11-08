import { useState } from 'react';
import './Informations.css';
import Form from '../Form/Form';

export default function Informations({ className }) {
    const [showForm, setShowForm] = useState(false)

    // Função para abrir o formulário
    const handleFormButton = () => {
        return (
            setShowForm(true)
        )
    }

    // Função para fechar o formulário
    const closeForm = () => {
        return (
            setShowForm(false)
            )
    }

    return (
        <div className={`content-container ${className}`}>
            <figure>
                <img src="/logo.png" alt="logo" />
            </figure>
            <div className="content">
                <h3>🔧 Encanadores Mario & Luigi 🔧<br />
                    Resolvendo Seus Problemas Hidráulicos Com Estilo!
                </h3>
                <p>
                    Você já se encontrou em uma situação de emergência com encanamento? Vazamentos inesperados, canos entupidos ou torneiras que não param de pingar? Não se preocupe, porque estamos aqui para salvar o dia! Apresentamos a vocês os encanadores mais famosos do Reino dos Cogumelos - Mario e Luigi!
                </p>
                <button type="button" onClick={handleFormButton} className="contact-button">
                    Entre em contato
                </button>

                {showForm && <Form onClose={closeForm} />}
            </div>
        </div>
    );
}