import { Modal, Form } from 'react-bootstrap';
import { useState } from 'react';
import Button from '../button/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import StyledForm from '../RegisterUser/StyledForm';

function LoginUser() {
  const [formActivate, setFormActivate] = useState(false);

    return (
        < >
            <Button blue barra onClickButton={() => setFormActivate(!formActivate)}>INICIAR SESIÓN</Button>

            <Modal show={formActivate} onHide={() => setFormActivate(!formActivate)}>
                <StyledForm>
                    <Modal.Header closeButton>
                        <Modal.Title>Inicio de Sesión</Modal.Title>
                    </Modal.Header>
                    <Form className='modalBody'>
                        <Form.Group className='formElement'>
                            <Form.Label>
                                Nombre de Usuario
                                <Form.Control type='text' placeholder='Nombre de Usuario' />
                            </Form.Label>
                        </Form.Group>
                        <Form.Group className='formElement'>
                            <Form.Label>
                                Contraseña
                                <Form.Control type='password' />
                            </Form.Label>
                        </Form.Group>
                        <Button>Iniciar Sesión</Button>
                    </Form>
                </StyledForm>
            </Modal>
        </>
    )

}

export default LoginUser;