import {Row, Col, Card, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

function Destaques() {
    return (
        <Row className='mt-2'>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/7058/7058236.png"  />
                    <Card.Body>
                        <Card.Title>Liste seus kins!</Card.Title>
                        <Card.Text>
                            O Kinlist é muito fácil de usar. Você pode adicionar seus kins e definir o quanto você se identifica com eles!
                        </Card.Text>
                        <LinkContainer to="/">
                            <Button variant="warning">Acessar o Kinlist App</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/4148/4148250.png" />
                    <Card.Body>
                        <Card.Title>Compartilhe com seus amigos!</Card.Title>
                        <Card.Text>
                            No Kinlist é possível você compartilhar sua lista com seus amigos e fazer eles entenderem um pouquinho mais sobre você! 
                        </Card.Text>
                        <LinkContainer to="">
                            <Button variant="warning">Ver mais</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/3246/3246923.png" />
                    <Card.Body>
                        <Card.Title>Suporte personalizado</Card.Title>
                        <Card.Text>
                            O Kinlist oferece suporte personalizado para você. Entre em contato conosco e tire suas dúvidas.
                        </Card.Text>
                        <LinkContainer to="/contato">
                        <Button variant="warning">Entre em contato</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/9878/9878915.png" />
                    <Card.Body>
                        <Card.Title>Favoritos</Card.Title>
                        <Card.Text>
                            Com o Kinlist é possível visualizar os kins favoritos entre a galera!
                        </Card.Text>
                        <LinkContainer to="/funcionalidades">
                        <Button variant="warning">Clique aqui para ver mais!</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>                        
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/599/599928.png" />
                    <Card.Body>
                        <Card.Title>Colaborativo</Card.Title>
                        <Card.Text>
                            O Kinlist é um projeto open-source com repositório no GitHub. Lá, qualquer desenvolvedor pode nos ajudar a aprimorar nosso site.
                        </Card.Text>
                        <LinkContainer to="">
                        <Button variant="warning">Github</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>
            <Col className='mt-2' sm="12" md="4">
                <Card>
                    <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/1424/1424424.png" />
                    <Card.Body>
                        <Card.Title>Doações</Card.Title>
                        <Card.Text>
                            O Kinlist e seus desenvolvedores são grandes apoiadores de inovação e tecnologia. Visando isso, nossas arrecadações financeiras são direcionadas à projetos técnológicos para comunidades carentes.
                        </Card.Text>
                        <LinkContainer to="/">
                        <Button variant="warning">Doe aqui!</Button>
                        </LinkContainer>
                    </Card.Body>
                </Card>
            </Col>                                                
        </Row>
    );
}

export default Destaques;