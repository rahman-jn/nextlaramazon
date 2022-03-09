import React, { useContext, useState } from 'react'
import AppLayout from '@/components/Layouts/AppLayout'
import {
    Typography,
    FormControl,
    FormControlLabel,
    Radio,
    RadioGroup,
} from '@mui/material'
import { Store } from '@/utils/Store'
import { useForm } from 'react-hook-form'

export default function Payment() {
    const [paymentMethod, setPaymentMethod] = useState('')
    const { handleSubmit } = useForm()
    const submitHandler = () => {}

    return (
        <AppLayout>
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
                </FormControl>
            </form>
        </AppLayout>
    )
}
