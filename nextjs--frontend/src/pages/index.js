import React, { useContext } from 'react'
import AppLayout from '../components/Layouts/AppLayout'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import {
    Grid,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
    Link,
} from '@mui/material'
import config from '../../config/main'
import { Store } from '@/utils/Store'

export default function Home({ products }) {
    const { state, dispatch } = useContext(Store)
    const router = useRouter()
    const addToCartHandler = product => {
        const currentItem = state.cart.cartItems.find(
            item => item.id === product.id,
        )
        const quantity = currentItem ? currentItem.quantity + 1 : 1
        dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity } })
        router.push('/cart')
    }
    return (
        <AppLayout>
            <div>
                <h1>Products</h1>
                <Grid container spacing={3}>
                    {products.map(product => (
                        // eslint-disable-next-line react/jsx-key
                        <Grid item md={4} key={product.slug}>
                            <Card>
                                <NextLink
                                    href={`/product/${product.slug}`}
                                    passHref>
                                    <Link>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                image={
                                                    config.backendUrl +
                                                    product.image
                                                }
                                                title={product.name}
                                            />
                                            <CardContent>
                                                <Typography>
                                                    {product.name}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Link>
                                </NextLink>
                                <CardActions>
                                    <Typography>${product.price}</Typography>
                                    <Button
                                        size="small"
                                        color="primary"
                                        onClick={() =>
                                            addToCartHandler(product)
                                        }>
                                        <Typography>Add to cart</Typography>
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </AppLayout>
    )
}

// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`${config.backendUrl}api/products`)
    const products = await res.json()
    // Pass data to the page via props
    return { props: { products } }
}
