import React, { FormEvent, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {LinearProgress, Snackbar} from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { FundsRequest, FundsResponse, requestFunds } from '../services/requestFunds';


const Alert = (props: any) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const FaucetForm = () => {
    const [address, setAddress] = useState("");
    const [fundsResponse, setFundsResponse] = useState({} as FundsResponse);
    const [inProgress, setInProgress] = useState(false);
    const [openErr, setOpenErr] = React.useState(false);
    const [openFunded, setOpenFunded] = React.useState(false);
    const [error, setError] = React.useState(undefined);

    const handleSubmit = (e: FormEvent) => doRequestFunds(e);
    const doRequestFunds = async (e: FormEvent) => {
        e.preventDefault();
        try {
            setInProgress(true);
            const res = await requestFunds({
                walletAddress: address,
                
            } as FundsRequest)
            setFundsResponse(res);
            setOpenFunded(true);
            setInProgress(false);
        } catch (err) {
            if (err.response && err.response.data && err.response.data.message) {
                setOpenErr(true);
                setError(err.response.data.message);
            } else {
                setError(err);
            }
            setInProgress(false);
        }
    };
    return (
        <>
            { inProgress && <LinearProgress color="secondary" /> }
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div>
                    <Typography component="h1" variant="h5">
                        {
                            inProgress ? 'Requesting...' : 'Request Faucet Funds'
                        }
                    </Typography>
                    {
                        fundsResponse.transactionHash &&
                        <div>
                            <a href={`https://goerli.etherscan.io/tx/${fundsResponse.transactionHash}`}>
                                View Transaction on Etherscan
                            </a>
                        </div>
                    }
                    <form noValidate onSubmit={handleSubmit}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="address"
                            label="ETH Address"
                            name="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            autoFocus
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            disabled={inProgress}
                            
                        >
                            Request PCM
                        </Button>
                    </form>
                </div>
            </Container>
            <Snackbar open={openFunded} autoHideDuration={3000}>
                <Alert severity="success">
                    Funded with {fundsResponse.amount}
                </Alert>
            </Snackbar>
            <Snackbar open={openErr} autoHideDuration={3000}>
                <Alert severity="error">
                    ERROR: {error}
                </Alert>
            </Snackbar>
        </>
    );
};

export default FaucetForm;