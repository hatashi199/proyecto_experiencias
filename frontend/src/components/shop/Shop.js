import StyledShop from './StyledShop';
import Button from '../button/Button';
import ItemShop from './ItemShop';
import { Form } from 'react-bootstrap';
import { useLocation, useParams } from 'react-router-dom';
import { useLocalStorageCart } from '../../Hooks/useLocaleStorageCart';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext';
function Shop() {
  const expInfo = useLocation();
  const { token, tokenContent, userInfo, setCartExperience, cartExperience } =
    useContext(UserContext);
  console.log(cartExperience);
  useEffect(() => {
    if (cartExperience === []) {
      setCartExperience(expInfo.data);
    } else {
      const item = [...cartExperience, expInfo.data];
      setCartExperience(item);
    }
  }, [expInfo.data, setCartExperience]);

  console.log('shop', expInfo.data);

  return (
    <StyledShop>
      <section className="bookingInfo">
        <ItemShop />
      </section>

      <section className="searchShop">
        <h4>Por favor seleccione el metodo de envio:</h4>
        <Form className="sendType">
          <Form.Group className="checkboxForm">
            <Form.Check type="radio" name="envio" id="email" />
            <Form.Label htmlFor="email">Vía Email</Form.Label>
          </Form.Group>
          <Form.Group className="checkboxForm">
            <Form.Check type="radio" name="envio" id="post" />
            <Form.Label htmlFor="post">Vía Postal</Form.Label>
          </Form.Group>
          <Form.Group className="checkboxForm">
            <Form.Check type="radio" name="envio" id="present" />
            <Form.Label htmlFor="present">Para Regalo</Form.Label>
          </Form.Group>
          <div className="buttonsShop">
            <Button blue>Comprar</Button>
            <Button>Seguir comprando</Button>
          </div>
        </Form>
      </section>
    </StyledShop>
  );
}

export default Shop;
