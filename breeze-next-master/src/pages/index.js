import AppLayout from '../components/Layouts/AppLayout'
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
import products from '../utils/data'

export default function Home({ products }) {
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
                                    <Button size="small" color="primary">
                                        Add to cart
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
