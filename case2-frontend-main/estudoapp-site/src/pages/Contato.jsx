import {Container, Button, Form} from 'react-bootstrap'
import Depoimentos from '../components/Depoimentos'

function Contato() {

    const handleSubmit = (event) => {
        event.preventDefault()
        alert('Mensagem enviada com sucesso!')
        event.target.reset()
    }

    return (
        <Container className='conteudo-margin'>
            <h1>Contato</h1>
            <p>Para entrar em contato com o suporte, preencha os campos abaixo: </p>
            <br></br>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="Nome">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text" placeholder="Digite seu nome completo" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Email">
                    <br></br>
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email" placeholder="Digite seu e-mail" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="Mensagem">
                    <br></br>
                    <Form.Label>Mensagem</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <br></br>
                <Button variant="primary" type="submit">
                    Enviar!
                </Button>
            </Form>

            <br></br>
            <br></br>
            <br></br>
            <h3>Outras formas de contato:</h3>
            <br></br>
            <h5>Email: kinlist.oficial@resilia.com</h5>
            <h5>Números: (21) 965278595 / (21) 9517629743 / (21) 9628438746</h5>
            <br></br>
            <br></br>
            <h3>Mais informações:</h3>
            <br></br>
            <h5>Endereço: Rua Barcelos Domingos, 500 - Rio de Janeiro, RJ</h5>
            <h5>Horário de atendimento: Segunda à Sexta - 8h às 19h</h5>

        </Container>
    );
}

export default Contato;