import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { savePaymentMethod } from '../actions/cartActions'
import CheckoutSteps from '../components/CheckoutSteps'

const PaymentScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  if (!shippingAddress) {
    history.push('/shipping')
  }

  const [paymentMethod, setPaymentMethod] = useState('Paypal')

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    history.push('/placeorder')
  }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 size='55%' />
      <h1>Payment</h1>
      <Form onSubmit={submitHandler}>
        <fieldset>
          <div className='form-group'>
            <div className='custom-control custom-radio'>
              <input
                type='radio'
                id='PayPal'
                name='customRadio'
                className='custom-control-input'
                value='PayPal'
                checked='PayPal'
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label className='custom-control-label' for='PayPal'>
                PayPal or Credit Card
              </label>
            </div>
            <div className='custom-control custom-radio'>
              <input
                type='radio'
                id='Stripe'
                name='customRadio'
                className='custom-control-input'
                value='Stripe'
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label className='custom-control-label' for='Stripe'>
                Sripe
              </label>
            </div>
          </div>
          {/* <Form.Group>
            <legend>Select Method</legend>
            <Col>
              <Form.Check
                type='radio'
                label='PayPal or Credit Card'
                id='PayPal'
                name='paymentMethod'
                value='PayPal'
                checked
                onChange={(e) => setPaymentMethod(e.target.value)}
              ></Form.Check>
              <Form.Check
                type='radio'
                label='Stripe'
                id='Stripe'
                name='paymentMethod'
                value='Stripe'
                checked
                onChange={(e) => setPaymentMethod(e.target.value)}
              ></Form.Check>
            </Col>
          </Form.Group> */}
        </fieldset>

        <Button type='submit' variant='primary'>
          Continue
        </Button>
      </Form>
    </FormContainer>
  )
}

export default PaymentScreen
