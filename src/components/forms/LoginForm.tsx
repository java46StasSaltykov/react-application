import { Box, Button, Container, createTheme, CssBaseline, TextField, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import LoginData from "../../models/LoginData";

type Props = {
    submitFn: (loginData: LoginData) => void;
}
const theme = createTheme();

let inputEmail: any;
let inputPassword: any;
const LoginForm: React.FC<Props> = ({ submitFn }) => {
    function onLogin() {
        const loginEmail: string = inputEmail.value;
        const loginPassword: string = inputPassword.value;
        const loginTokens: string[] = [loginEmail, loginPassword];
        submitFn({ email: loginTokens[0], password: loginTokens[1] });
    }
    React.useEffect(() => {
        inputEmail = document.getElementById("email");
        inputPassword = document.getElementById("password");
    })

    return <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography component="h1" variant="h5">Sign in</Typography>
                <Box component="form" onSubmit={onLogin} sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Sign In</Button>
                </Box>
            </Box>
        </Container>
    </ThemeProvider>
}
export default LoginForm