import React, { useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '@/hooks/auth'
import AppLayout from '@/components/Layouts/AppLayout'
import { Controller, useForm } from 'react-hook-form'
import { Typography, List, ListItem, TextField } from '@mui/material'
import Button from '@/components/Button'
import CheckoutWizard from '@/components/checkoutWizard'
import Cookies from 'js-cookie'
import { Store } from '@/utils/Store'

export default function shipping() {
    const router = useRouter()
    const { user } = useAuth()
    const { state, dispatch } = useContext(Store)
    const {
        handleSubmit,
        control,
        formState: { errors },
        setValue,
    } = useForm()

    const submitHandler = ({
        fullName,
        address,
        city,
        postalCode,
        country,
    }) => {
        dispatch({
            type: 'ADD_SHIPPING_ADDRESS',
            payload: { fullName, address, city, postalCode, country },
        })


        //router.push('/payment')
    }
    useEffect(() => {
        //if (!user) router.push('/auth/login')
        const {
            cart: { shippingAddress },
        } = state
        setValue('fullName', shippingAddress.fullName)
        setValue('address', shippingAddress.address)
        setValue('postalCode', shippingAddress.postalCode)
        setValue('city', shippingAddress.city)
        setValue('country', shippingAddress.country)
    }, [])

    return (
        <AppLayout title="Shipping Address">
            <Typography> Shipping Address</Typography>
            <CheckoutWizard activeStep={1} alternativeLabel="Shipping" />
            <form onSubmit={handleSubmit(submitHandler)}>
                <List>
                    <ListItem>
                        <Controller
                            name="fullName"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: true,
                                minLength: 2,
                            }}
                            render={({ field }) => (
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    id="fullName"
                                    label="Full Name"
                                    error={Boolean(errors.fullName)}
                                    helperText={
                                        errors.fullName
                                            ? errors.fullName.type ===
                                              'minLength'
                                                ? 'Full Name length should be more than 2'
                                                : 'Full name is required'
                                            : ''
                                    }
                                    {...field}
                                />
                            )}
                        />
                    </ListItem>
                    <ListItem>
                        <Controller
                            name="address"
                            control={control}
                            defaultValue=""
                            rules={{ required: true, minLength: 5 }}
                            render={({ field }) => (
                                <TextField
                                    id="address"
                                    fullWidth
                                    variant="outlined"
                                    label="Address"
                                    error={Boolean(errors.address)}
                                    helperText={
                                        errors.address
                                            ? errors.address.type ===
                                              'minLength'
                                                ? 'Address length is less than 5'
                                                : 'Address is required'
                                            : ''
                                    }
                                    {...field}
                                />
                            )}
                        />
                    </ListItem>
                    <ListItem>
                        <Controller
                            name="city"
                            control={control}
                            defaultValue=""
                            rules={{ required: true, minLength: 5 }}
                            render={({ field }) => (
                                <TextField
                                    id="city"
                                    fullWidth
                                    error={Boolean(errors.city)}
                                    label="City"
                                    helperText={
                                        errors.city
                                            ? errors.city.type === 'minLength'
                                                ? 'City length is less thn 5'
                                                : 'City is required'
                                            : ''
                                    }
                                    {...field}
                                />
                            )}
                        />
                    </ListItem>
                    <ListItem>
                        <Controller
                            name="postalCode"
                            defaultValue=""
                            control={control}
                            rules={{ required: true, minLength: 2 }}
                            render={({ field }) => (
                                <TextField
                                    id="postalCode"
                                    fullWidth
                                    error={Boolean(errors.postalCode)}
                                    label="PostalCode"
                                    helperText={
                                        errors.postalCode
                                            ? errors.postalCode.type ===
                                              'minLength'
                                                ? 'Postal Code length is ;ess than 2'
                                                : 'Postal code is required'
                                            : ''
                                    }
                                    {...field}
                                />
                            )}
                        />
                    </ListItem>
                    <ListItem>
                        <Controller
                            name="country"
                            defaultValue=""
                            control={control}
                            rules={{ required: true, minLength: 2 }}
                            render={({ field }) => (
                                <TextField
                                    id="country"
                                    fullWidth
                                    error={Boolean(errors.postalCode)}
                                    label="Country"
                                    helperText={
                                        errors.postalCode
                                            ? errors.country.type ===
                                              'minLength'
                                                ? 'Country Code length is ;ess than 2'
                                                : 'Country code is required'
                                            : ''
                                    }
                                    {...field}
                                />
                            )}
                        />
                    </ListItem>
                    <ListItem>
                        <Button
                            type="submit"
                            variant="contained"
                            coloe="primary">
                            Continue
                        </Button>
                    </ListItem>
                </List>
            </form>
        </AppLayout>
    )
}
