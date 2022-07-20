import { useState } from 'react';

const Register = ({ setStudents }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        const student = {
            name,
            email
        };

        setStudents(
            (oldStudents) => [...oldStudents, student]
        );
    }

    /**
     * @description Esse é apenas um exemplo de como o
     * react altera o estado via callback
     */
    // function setStudents(callback) {
    //     const estadoAtual = 3;

    //     const novoEstado = callback(estadoAtual);
    // }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='nome'
                onChange={event => setName(event.target.value)}
            />
            <input
                type='text'
                placeholder='email'
                onChange={event => setEmail(event.target.value)}
            />
            <button type='submit'>Cadastrar</button>
        </form>
    )
}

export default Register;