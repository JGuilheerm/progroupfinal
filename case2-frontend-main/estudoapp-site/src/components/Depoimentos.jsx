import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Depoimentos() {
    return (
        <>
        <h2 className='mt-3'></h2>
        <br></br>
        <br></br>
        <Row className='mt-3'>
            <Col sm="20" md="2" className='text-center'>
            <img src="https://cdn-icons-png.flaticon.com/512/6571/6571852.png" alt="lista de kin" className='listinha' width={100}/>
            </Col>
            <Col sm="12" md="10">
                <strong>O QUE É UMA KINLIST?</strong>
                <p>
                Uma lista de Kin ou "kinlist" é baseada em fictionkin e é uma lista de personagens com os quais você se relaciona, ou mesmo, acredita ser. <br />
                    Vem de kinning , que está agindo como aquele personagem fictício.
                </p>
            </Col>
        </Row>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Row className='mt-3'>
            <Col sm="12" md="2" className='text-center'>
            <img src="https://cdn-icons-png.flaticon.com/512/4891/4891663.png" alt="lista de kin" className='listinha' width={100}/>  
            </Col>
            <Col sm="12" md="10">
                <strong>COMO FAZER UMA KINLIST?</strong>
                <p>
                Você pode usar o Kinlist App para listar todos os personagens fictícios com os quais você se identifica ou apenas ama.<br />
                    Com o nosso app, você pode salvá-lo em particular ou publicar, compartilhar e até convidar amigos para fazer a mesma lista.
                </p>
            </Col>
        </Row>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Row className='mt-3'>
            <Col sm="12" md="2" className='text-center'>
            <img src="https://cdn-icons-png.flaticon.com/512/3471/3471635.png" alt="lista de kin" className='listinha' width={100}/>  
            </Col>
            <Col sm="12" md="10">
                <strong>EXPLORE, DESCUBRA, COMPARTILHE.</strong>
                <p>
                Socialize com seus amigos e nossos usuarios globalmente, descobrindo novos Kins e explorando suas compatibilidades. <br />
                    Com o nosso app, você pode salvá-lo em particular ou publicar, compartilhar e até convidar amigos para fazer a mesma lista.
                </p>
            </Col>
        </Row>         
        </>
    )
}

export default Depoimentos