import 'tailwindcss/tailwind.css'
import { StoreProvider } from '@/utils/Store'
import { SnackbarProvider } from 'notistack'

const App = ({ Component, pageProps }) => (
    <SnackbarProvider anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <StoreProvider>
            <Component {...pageProps} />
        </StoreProvider>
    </SnackbarProvider>
)

export default App
