import './Form.css';
import { RiCloseFill } from "react-icons/ri";

export default function Form({ onClose }) {
    return (
        <div className="form-container">
            <div className="formulario">
                {/* Ícone para fechar o formulário */}
                <RiCloseFill className="close-icon" onClick={onClose} />
                <form>
                    <input type="text" placeholder="Seu Nome" />
                    <input type="email" placeholder="Seu Email" />
                    <textarea placeholder="Escreva sua mensagem..."></textarea>
                    <button type="submit">PEDIR ORÇAMENTO</button>
                </form>
            </div>
        </div>
    );
}
