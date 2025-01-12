'use client'
import React, {useState} from 'react';
import {
    Box,
    Button,
    Checkbox,
    Container,
    FormControl,
    FormControlLabel,
    InputLabel,
    Link,
    MenuItem,
    Select,
    Tab,
    Tabs,
    TextField,
    Typography
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import "./index.scss"

const LoginPage: React.FC = () => {
    const [tabValue, setTabValue] = useState(0);
    const [gender, setGender] = useState('');

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        console.log(event);
        setTabValue(newValue);
    };

    return (
        <div className="login-page-wrap">
            <div className="content-wrap">
                <div className="login-content">
                    <Box className="item-logo">
                        <img src="/src/assets/icons/svg/lz.svg" alt="Cirkle" style={{width: 100, height: 100}}/>
                    </Box>

                    <Container maxWidth="sm" className="login-form-wrap">
                        <Box sx={{borderBottom: 1, borderColor: 'divider'}} className="nav-tabs">
                            <Tabs
                                value={tabValue}
                                onChange={handleTabChange}
                                aria-label="login registration tabs"
                                orientation="horizontal"
                                sx={{
                                    '& .MuiTab-root': {
                                        backgroundColor: 'white',
                                        '&.Mui-selected': {
                                            backgroundColor: '#5edfff',
                                            color: 'white',
                                        }
                                    }
                                }}
                            >
                                <Tab label="Sign In"/>
                                <Tab label="Registration"/>
                            </Tabs>
                        </Box>

                        <Box className="tab-content">
                            {tabValue === 0 && (
                                <Box>
                                    <Typography variant="h5" component="h3" className="item-title">
                                        Sign Into <Box component="span">Your Account</Box>
                                    </Typography>

                                    <Box className="google-signin">
                                        <Button
                                            variant="outlined"
                                            fullWidth
                                            startIcon={<GoogleIcon/>}
                                        >
                                            Google Sign in
                                        </Button>
                                    </Box>

                                    <Box component="form" sx={{mt: 1}}>
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

                                        <Box className="reset-password">
                                            <Link href="#" variant="body2" color="error">
                                                * Reset Password
                                            </Link>
                                        </Box>

                                        <FormControlLabel
                                            control={<Checkbox value="remember" color="primary"/>}
                                            label="Keep me as signed in"
                                        />

                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            sx={{mt: 3, mb: 2}}
                                        >
                                            Login
                                        </Button>
                                    </Box>
                                </Box>
                            )}

                            {tabValue === 1 && (
                                <Box>
                                    <Typography variant="h5" component="h3" className="item-title">
                                        Sign Up Your Account
                                    </Typography>

                                    <Box component="form" sx={{mt: 3}}>
                                        <Box sx={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, mb: 2}}>
                                            <TextField
                                                required
                                                fullWidth
                                                id="firstName"
                                                label="First Name"
                                                name="firstName"
                                                autoComplete="given-name"
                                            />
                                            <TextField
                                                required
                                                fullWidth
                                                id="lastName"
                                                label="Last Name"
                                                name="lastName"
                                                autoComplete="family-name"
                                            />
                                        </Box>

                                        <TextField
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"
                                            sx={{mb: 2}}
                                        />

                                        <TextField
                                            required
                                            fullWidth
                                            name="password"
                                            label="Password"
                                            type="password"
                                            id="password"
                                            autoComplete="new-password"
                                            sx={{mb: 2}}
                                        />

                                        <TextField
                                            required
                                            fullWidth
                                            id="birthDate"
                                            label="Birth Date"
                                            type="date"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            sx={{mb: 2}}
                                        />

                                        <FormControl fullWidth sx={{mb: 2}}>
                                            <InputLabel id="gender-label">Gender</InputLabel>
                                            <Select
                                                labelId="gender-label"
                                                id="gender"
                                                value={gender}
                                                label="Gender"
                                                onChange={(e) => setGender(e.target.value as string)}
                                            >
                                                <MenuItem value="male">Male</MenuItem>
                                                <MenuItem value="female">Female</MenuItem>
                                                <MenuItem value="other">Other</MenuItem>
                                            </Select>
                                        </FormControl>

                                        <FormControlLabel
                                            control={<Checkbox required value="terms" color="primary"/>}
                                            label={
                                                <Typography variant="body2">
                                                    I accept the Terms and Conditions
                                                </Typography>
                                            }
                                        />

                                        <Button
                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            sx={{mt: 3, mb: 2}}
                                        >
                                            Complete Registration
                                        </Button>
                                    </Box>
                                </Box>
                            )}
                        </Box>
                    </Container>
                </div>

                <div className="map-line">
                    <img
                        src="/src/assets/images/map_line.png"
                        alt="Background"
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            // objectFit: 'cover',
                            opacity: 0.1
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;

