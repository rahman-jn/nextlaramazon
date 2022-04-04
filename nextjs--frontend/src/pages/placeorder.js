import React, { useContext, useEffect } from 'react'
import AppLayout from '@/components/Layouts/AppLayout'
import axios from '@/lib/axios'
import {
    Grid,
    Table,
    TableHead,
    Typography,
    Link,
    TableContainer,
    TableRow,
    TableCell,
    TableBody,
    Select,
    MenuItem,
    Button,
    List,
    ListItem,
} from '@mui/material'
import NextLink from 'next/link'
import dynamic from 'next/dynamic'
import { Store } from '../utils/Store'
import Image from 'next/image'
import config from '@/../config/main'
import { Card } from '@material-ui/core'
import { useRouter } from 'next/router'
import { useAuth } from '@/hooks/auth'
import CheckoutWizard from '@/components/checkoutWizard'
import { headers } from '@/../next.config'

function PlaceOrder() {
    const { state, dispatch } = useContext(Store)
    const router = useRouter()
    const {
        cart: { cartItems, shippingAddress, paymentMethod },
    } = state

    const round2 = num => Math.round(num * 100 + Number.EPSILON) / 100 // 123.456 => 123.46

    const itemsPrice = round2(cartItems.reduce((a, c) => a + c.price, 0))

    const taxPrice = round2(itemsPrice * 0.15)

    const shippingPrice = itemsPrice > 200 ? 0 : 15

    const totalPrice = itemsPrice + taxPrice + shippingPrice

    const handleSubmit = async () => {
        const address = await axios.post(
            'http://localhost:8000/api/address',
            shippingAddress,
        )

        const addressId = address.data

        const orderData = {
            addressId,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
            cartItems,
        }
        console.log(orderData)
        const OrderId = await axios.post(
            'http://localhost:8000/api/orders',
            orderData,
        )

        // const order = { itemsPrice, taxPrice, shippingPrice, totalPrice }
        // const response = axios.post(config.backendUrl + 'api/order')
    }

    useEffect(() => {
        if (!state.cart.paymentMethod) router.push('/paymentMethod')
    }, [])

    //Cookies.remove('cartItems')
    return (
        <AppLayout title="Shopping Cart">
            <CheckoutWizard activeStep={3} alternativeLabel="Shipping" />
            <Typography component="h1" variant="h1">
                Place Order
            </Typography>

            <Grid container spacing={1}>
                <Grid item md={9} xs={12}>
                    <List>
                        <Card>
                            <ListItem>
                                <Typography component="h2" variant="h2">
                                    Shipping Address
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography>
                                    {shippingAddress.fullName},{' '}
                                    {shippingAddress.address},{' '}
                                    {shippingAddress.city},{' '}
                                    {shippingAddress.country}
                                </Typography>
                            </ListItem>
                        </Card>
                    </List>
                    <List>
                        <Card>
                            <ListItem>
                                <Typography component="h2" variant="h2">
                                    Payment Method
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography>{paymentMethod}</Typography>
                            </ListItem>
                        </Card>
                    </List>

                    <List>
                        <Card>
                            <ListItem>
                                <Typography component="h2" variant="h2">
                                    Order Items
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <TableContainer>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Image</TableCell>
                                                <TableCell>Name</TableCell>
                                                <TableCell>Quantity</TableCell>
                                                <TableCell>Price</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {cartItems.map(item => (
                                                <TableRow key={item.id}>
                                                    <TableCell>
                                                        <NextLink
                                                            href={`/product/${item.slug}`}
                                                            passHref>
                                                            <Link>
                                                                <Image
                                                                    src={
                                                                        config.backendUrl +
                                                                        item.image
                                                                    }
                                                                    width={50}
                                                                    height={50}
                                                                />
                                                            </Link>
                                                        </NextLink>
                                                    </TableCell>
                                                    <TableCell>
                                                        {item.name}
                                                    </TableCell>
                                                    <TableCell>
                                                        {item.quantity}
                                                    </TableCell>
                                                    <TableCell>
                                                        {item.price}
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </ListItem>
                        </Card>
                    </List>
                </Grid>
                <Grid item md={3} xs={12}>
                    <Card>
                        <List>
                            <ListItem>
                                <Typography component="h2" variant="h2">
                                    Order Summary
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Grid container>
                                    <Grid items xs={6}>
                                        Items :
                                    </Grid>
                                    <Grid items xs={6} align="right">
                                        ${itemsPrice}
                                    </Grid>
                                    <Grid items xs={6}>
                                        Tax :
                                    </Grid>
                                    <Grid items xs={6} align="right">
                                        ${taxPrice}
                                    </Grid>
                                    <Grid items xs={6}>
                                        Shipping :
                                    </Grid>
                                    <Grid items xs={6} align="right">
                                        ${shippingPrice}
                                    </Grid>
                                    <Grid items xs={6}>
                                        <strong>Total :</strong>
                                    </Grid>
                                    <Grid items xs={6} align="right">
                                        <strong>${totalPrice}</strong>
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <ListItem>
                                <Button
                                    variant="contained"
                                    fullwidth
                                    color="primary"
                                    onClick={handleSubmit}>
                                    <Typography>Place Order</Typography>
                                </Button>
                            </ListItem>
                        </List>
                    </Card>
                </Grid>
            </Grid>
        </AppLayout>
    )
}

export default dynamic(() => Promise.resolve(PlaceOrder), { ssr: false })
