import React, { useContext } from 'react'
import AppLayout from '@/components/Layouts/AppLayout'
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
import axios from 'axios'
import dynamic from 'next/dynamic'
import { Store } from '@/utils/Store'
//import Cookies from 'js-cookie'
import Image from 'next/image'
import config from '@/../config/main'
import { Card } from '@material-ui/core'

function Cart() {
    const { state, dispatch } = useContext(Store)
    const {
        cart: { cartItems },
    } = state

    //Update quqntity of selected product in states when user changed the quantity
    const updateQuantityHandler = (item, quantity) => {
        //Sanity check with server
        const product = axios.get(
            config.backendUrl + `api/product/${item.slug}`,
        )
        if (product.countInStock === 0) {
            window.alert('Sorry! this request is ut of stock')
            return
        }
        //Update the state and cookies
        dispatch({ type: 'ADD_TO_CART', payload: { ...item, quantity } })
    }
    //Remove product from cart
    const removeItemHandler = item => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: item })
    }
    //Cookies.remove('cartItems')
    return (
        <AppLayout title="Shopping Cart">
            <Typography component="h1">Shopping cart</Typography>
            {cartItems.length === 0 ? (
                <div>
                    <Typography>Cart is empty</Typography>
                    <NextLink href="/" passHref>
                        <Link>
                            <Typography>Go shopping</Typography>
                        </Link>
                    </NextLink>
                </div>
            ) : (
                <Grid container spacing={1}>
                    <Grid item md={9} xs={12}>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Image</TableCell>
                                        <TableCell>Name</TableCell>
                                        <TableCell>Quantity</TableCell>
                                        <TableCell>Price</TableCell>
                                        <TableCell>Action</TableCell>
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
                                            <TableCell>{item.name}</TableCell>
                                            <TableCell>
                                                <Select
                                                    value={item.quantity}
                                                    onChange={e =>
                                                        updateQuantityHandler(
                                                            item,
                                                            e.target.value,
                                                        )
                                                    }>
                                                    {[
                                                        ...Array(
                                                            item.countInStock,
                                                        ).keys(),
                                                    ].map(x => (
                                                        <MenuItem
                                                            key={x + 1}
                                                            value={x + 1}>
                                                            {x + 1}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </TableCell>
                                            <TableCell>{item.price}</TableCell>
                                            <TableCell>
                                                <Button
                                                    variant="contained"
                                                    color="secondary"
                                                    onClick={() =>
                                                        removeItemHandler(item)
                                                    }>
                                                    x
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <Card>
                            <List>
                                <ListItem>
                                    <Typography variant="h2" component="h2">
                                        Subtotal(
                                        {cartItems.reduce(
                                            (a, c) => a + c.quantity,
                                            0,
                                        )}{' '}
                                        items) : $
                                        {cartItems.reduce(
                                            (a, c) => a + c.quantity * c.price,
                                            0,
                                        )}
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <Button
                                        variant="contained"
                                        fullwidth
                                        color="primary">
                                        <NextLink href="/shipping" passHref>
                                            <Link>Checkout</Link>
                                        </NextLink>
                                    </Button>
                                </ListItem>
                            </List>
                        </Card>
                    </Grid>
                </Grid>
            )}
        </AppLayout>
    )
}

export default dynamic(() => Promise.resolve(Cart), { ssr: false })
