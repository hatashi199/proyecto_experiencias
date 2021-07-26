import { Modal, Form } from 'react-bootstrap';
import { useState } from 'react';
import Button from '../button/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import StyledForm from './StyledForm';

function RegisterUser() {
  const [formActivate, setFormActivate] = useState(false);

    return (
        < >
            <Button onClickButton={() => setFormActivate(!formActivate)}>REGISTRARSE</Button>

            <Modal show={formActivate} onHide={() => setFormActivate(!formActivate)}>
                <StyledForm>
                    <Modal.Header closeButton>
                        <Modal.Title>Registro de Usuario</Modal.Title>
                    </Modal.Header>
                    <Form className='modalBody'>
                        <Form.Group className='formElement'>
                            <Form.Label>
                                Nombre
                                <Form.Control type='text' placeholder='Nombre' />
                            </Form.Label>
                        </Form.Group>
                        <Form.Group className='formElement'>
                            <Form.Label>
                                Apellidos
                                <Form.Control type='text' placeholder='Apellidos' />
                            </Form.Label>
                        </Form.Group>
                        <Form.Group className='formElement'>
                            <Form.Label>
                                Nombre de Usuario
                                <Form.Control type='text' placeholder='Nombre de Usuario' />
                            </Form.Label>
                        </Form.Group>
                        <Form.Group className='formElement'>
                            <Form.Label>
                                Email
                                <Form.Control type='email' placeholder='Email' />
                            </Form.Label>
                        </Form.Group>
                        <Form.Group className='formElement'>
                            <Form.Label>
                                Contraseña
                                <Form.Control type='password' />
                            </Form.Label>
                        </Form.Group>
                        <Form.Group className='formElement'>
                            <Form.Label>
                                Confirmar Contraseña
                                <Form.Control type='password' />
                            </Form.Label>
                        </Form.Group>
                        <Form.Group className='formElement checkboxForm'>
                            <Form.Check type='checkbox' />
                            <Form.Label>Aceptar condiciones de uso</Form.Label>
                        </Form.Group>
                        <Button>ENVIAR</Button>
                    </Form>
                </StyledForm>
            </Modal>
        </>
    )
}

export default RegisterUser;