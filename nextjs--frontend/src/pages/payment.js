import React, { useContext, useState, useEffect } from 'react'
import AppLayout from '@/components/Layouts/AppLayout'
import {
    Typography,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
    Button,
} from '@mui/material'
import CheckoutWizard from '@/components/checkoutWizard'
import { Store } from '@/utils/Store'
import { useForm } from 'react-hook-form'
import { useSnackbar } from 'notistack'
import { useRouter } from 'next/router'

export default function Payment() {
    const [paymentMethod, setPaymentMethod] = useState('')
    const { handleSubmit } = useForm()
    const { state, dispatch } = useContext(Store)
    const {
        cart: { shippingAddress },
      } = state;
    const { enqueueSnackbar, closeSnackbar } = useSnackbar()
    const router = useRouter()

    useEffect(() => {
        if (!state.cart.shippingAddress) router.push('/shipping')
    }, [])

    const submitHandler = () => {
        closeSnackbar()
        if (!paymentMethod)
            enqueueSnackbar('Payment method is required', { variant: 'error' })
        else {
            dispatch({ type: 'SAVE_PAYMENT_METHOD', payload: paymentMethod })
            router.push('/placeorder')
        }
    }

    return (
        <AppLayout>
            <CheckoutWizard activeStep={2} alternativeLabel="Shipping" />
            <Typography>Payment</Typography>
            <form onSubmit={handleSubmit(submitHandler)}>
                <FormControl component="fieldset">
                    <RadioGroup
                        aria-label="Payment Method"
                        name="paymentMethod"
                        value={paymentMethod}
                        onChange={e => setPaymentMethod(e.target.value)}>
                        <FormControlLabel
                            label="payPal"
                            value="payPal"
                            control={<Radio />}></FormControlLabel>
                        <FormControlLabel
                            label="stripe"
                            value="stripe"
                            control={<Radio />}></FormControlLabel>
                        <FormControlLabel
                            label="cash"
                            value="cash"
                            control={<Radio />}></FormControlLabel>
                    </RadioGroup>
                    <Button type="submit" variant="contained" coloe="primary">
                        Continue
                    </Button>
                </FormControl>
            </form>
        </AppLayout>
    )
}
