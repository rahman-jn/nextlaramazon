import React, { useContext } from 'react'
import Head from 'next/head'
import NextLink from 'next/link'
import {
    Container,
    AppBar,
    Toolbar,
    Typography,
    Link,
    ThemeProvider,
    CssBaseline,
    Switch,
} from '@mui/material'
import { createTheme } from '@mui/material/styles'
import useStyles from '../../utils/styles'
import { Store } from '../../utils/Store'
import Cookies from 'js-cookie'
//import {db} from '../pages/api/connect'

export default function AppLayout({ children, title, description }) {
    const classes = useStyles()
    console.log(classes)
    const { state, dispatch } = useContext(Store)
    const { darkMode } = state
    //console.log(db);

    const darkModeChangeHandler = () => {
        dispatch({ type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON' })
        const newDarkMode = !darkMode
        Cookies.set('darkMode', newDarkMode ? 'ON' : 'OFF')
    }
    const theme = createTheme({
        typography: {
            h1: {
                fontSize: '1.6rem',
                fontWeight: 400,
                margin: '1rem, 0',
            },
            h2: {
                fontSize: '1.4rem',
                fontWeight: 400,
                margin: '1rem, 0',
            },

        },
        palette: {
            mode: darkMode ? 'dark' : 'light',
            primary: {
                main: '#f0c000',
            },
            secondary: {
                main: '#208080',
            },
        },
    })
    return (
        <div>
            <Head>
                <title>
                    {title ? title + ' Rhman Amazona' : 'Rhman Next Amazonas'}
                </title>
                {description && (
                    <meta name="description" content={description} />
                )}
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppBar position="static">
                    <Toolbar className={classes.navbar}>
                        <NextLink href="/" passHref>
                            <Link>
                                <Typography className={classes.brand}>
                                    Rhman
                                </Typography>
                            </Link>
                        </NextLink>
                        <div className={classes.grow}></div>
                        <div>
                            <Switch onChange={darkModeChangeHandler}></Switch>
                            <NextLink href="/profile" passHtref>
                                <Link>Login</Link>
                            </NextLink>
                            <NextLink href="/cart" passHref>
                                <Link>Cart</Link>
                            </NextLink>
                        </div>
                    </Toolbar>
                </AppBar>
                <Container className={classes.main}>{children}</Container>
                <footer className={classes.footer}>
                    Rhman- allrights reserved
                </footer>
            </ThemeProvider>
        </div>
    )
}
