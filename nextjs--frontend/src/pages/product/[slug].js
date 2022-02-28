import React from 'react'
import NextLink from 'next/link'
import Image from 'next/image'
import {
    Typography,
    Link,
    Grid,
    List,
    ListItem,
    Card,
    Button,
} from '@mui/material'
import config from '../../../config/main'
import AppLayout from '../../components/Layouts/AppLayout'
import useStyles from '../../utils/styles'

export default function Product({ product }) {
    const classes = useStyles()
    //const router = useRouter()
    //const { slug } = router.query
    //const product = product.find(item => item.slug === slug)
    if (!product) return 'Page Not found'
    return (
        <AppLayout title={product.name} description={product.description}>
            <NextLink href="/" passHref>
                <Link>
                    <Typography className={classes.section}>
                        back to products
                    </Typography>
                </Link>
            </NextLink>
            <Grid container spacing={1}>
                <Grid item md={6} xs={12}>
                    <Image
                        src={config.backendUrl + product.image}
                        alt={product.name}
                        width={640}
                        height={640}
                        layout="responsive"
                    />
                </Grid>
                <Grid item md={3} xs={12}>
                    <List>
                        <ListItem>
                            <Typography component="h1">
                                {product.name}
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography>
                                Category : {product.category}
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography>Brand : {product.brand}</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography>
                                Rating : {product.rating} ( {product.numReviews}{' '}
                                )
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography>
                                Description: {product.description}{' '}
                            </Typography>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item md={3} xs={12}>
                    <Card>
                        <List>
                            <ListItem className={classes.section}>
                                <Grid container>
                                    <Grid item md={6}>
                                        <Typography>Price:</Typography>
                                    </Grid>
                                    <Grid item md={6}>
                                        <Typography>
                                            ${product.price}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <ListItem className={classes.section}>
                                <Grid container>
                                    <Grid item md={6}>
                                        <Typography>Status:</Typography>
                                    </Grid>
                                    <Grid item md={6}>
                                        <Typography>
                                            {product.countInStock === 0
                                                ? 'Not available'
                                                : 'In Stock'}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <ListItem className={classes.section}>
                                <Grid container>
                                    <Grid item md={12}>
                                        <Button
                                            fullWidth
                                            variant="contained"
                                            color="primary">
                                            <Typography>Add to cart</Typography>
                                        </Button>
                                    </Grid>
                                </Grid>
                            </ListItem>
                        </List>
                    </Card>
                </Grid>
            </Grid>
        </AppLayout>
    )
}

export async function getServerSideProps({ query }) {
    const slug = query.slug
    // Fetch data from external API
    const res = await fetch(`${config.backendUrl}api/product/${slug}`)
    const product = await res.json()
    // Pass data to the page via props
    return { props: { product } }
}
