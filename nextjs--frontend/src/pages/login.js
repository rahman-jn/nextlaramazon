import ApplicationLogo from '@/components/ApplicationLogo'
import AuthCard from '@/components/AuthCard'
import AuthSessionStatus from '@/components/AuthSessionStatus'
import AuthValidationErrors from '@/components/AuthValidationErrors'
import Button from '@/components/Button'
import GuestLayout from '@/components/Layouts/GuestLayout'
import { useForm, Controller } from 'react-hook-form'
import Label from '@/components/Label'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { TextField, ListItem } from '@mui/material'

const Login = () => {
    const router = useRouter()

    const { login } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/',
    })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    useEffect(() => {
        if (router.query.reset?.length > 0 && errors.length === 0) {
            setStatus(atob(router.query.reset))
        } else {
            setStatus(null)
        }
    })

    const submitForm = async event => {
        event.preventDefault()

        login({ email, password, setErrors, setStatus })
    }

    return (
        <GuestLayout>
            <AuthCard
                logo={
                    <Link href="/">
                        <a>
                            <ApplicationLogo className="w-20 h-20 text-gray-500 fill-current" />
                        </a>
                    </Link>
                }>
                {/* Session Status */}
                <AuthSessionStatus className="mb-4" status={status} />

                {/* Validation Errors */}
                <AuthValidationErrors className="mb-4" errors={errors} />

                <form onSubmit={submitForm}>
                    {/* Email Address */}
                    <List>
                        <ListItem>
                            <Controller
                                name="email"
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: true,
                                    pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                }}
                                render={field => (
                                    <TextField
                                        id="email"
                                        type="email"
                                        label="email"
                                        value={email}
                                        className="block w-full mt-1"
                                        inputProps={{ type: 'email' }}
                                        error={Boolean(errors.email)}
                                        helperText={
                                            errors.email
                                                ? errors.email.type ===
                                                  'pattern'
                                                    ? 'Email i not valid'
                                                    : 'Email is required'
                                                : ''
                                        }
                                        onChange={event =>
                                            setEmail(event.target.value)
                                        }
                                        required
                                        autoFocus>
                                        {...field}
                                    </TextField>
                                )}
                            />
                        </ListItem>
                    </List>

                    {/* Password */}
                    <TextField
                        id="password"
                        type="password"
                        value={password}
                        className="block w-full mt-1"
                        onChange={event => setPassword(event.target.value)}
                        required
                        autoComplete="current-password"
                    />

                    {/* Remember Me */}
                    <div className="block mt-4">
                        <label
                            htmlFor="remember_me"
                            className="inline-flex items-center">
                            <input
                                id="remember_me"
                                type="checkbox"
                                name="remember"
                                className="text-indigo-600 border-gray-300 rounded shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />

                            <span className="ml-2 text-sm text-gray-600">
                                Remember me
                            </span>
                        </label>
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <Link href="/forgot-password">
                            <a className="text-sm text-gray-600 underline hover:text-gray-900">
                                Forgot your password?
                            </a>
                        </Link>

                        <Button className="ml-3">Login</Button>
                    </div>
                </form>
            </AuthCard>
        </GuestLayout>
    )
}

export default Login
