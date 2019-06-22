//https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/page-layout-examples
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

function MadeWithLove() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Built with love by the '}
            <Link color="inherit" href="https://material-ui.com/">
                Material-UI
      </Link>
            {' team.'}
        </Typography>
    );
}

const useStyles = makeStyles(theme => ({
    appBar: {
        position: 'relative',
    },
    toolbarButtons: {
        marginLeft: "auto",
        marginRight: -12
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },    
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
}));

export default function ClientEntry() {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleSave = () => {

        setActiveStep(2);
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography component="h1" variant="h4" align="center">
                        Checkout
          </Typography>                    
                    <React.Fragment>
                        {activeStep === 2 ? (
                            <React.Fragment>
                                <Typography variant="h5" gutterBottom>
                                    Thank you for your order.
                </Typography>
                                <Typography variant="subtitle1">
                                    Your order number is #2001539. We have emailed your order confirmation, and will
                                    send you an update when your order has shipped.
                </Typography>
                            </React.Fragment>
                        ) : (

                                <React.Fragment>
                                    <Typography variant="h6" gutterBottom>
                                        Client Information
                                    </Typography>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                id="firstName"
                                                name="firstName"
                                                label="First name"
                                                fullWidth
                                                autoComplete="fname"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                id="lastName"
                                                name="lastName"
                                                label="Last name"
                                                fullWidth
                                                autoComplete="lname"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                required
                                                id="address1"
                                                name="address1"
                                                label="Address line 1"
                                                fullWidth
                                                autoComplete="billing address-line1"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                id="address2"
                                                name="address2"
                                                label="Address line 2"
                                                fullWidth
                                                autoComplete="billing address-line2"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                id="city"
                                                name="city"
                                                label="City"
                                                fullWidth
                                                autoComplete="billing address-level2"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField id="state" name="state" label="State/Province/Region" fullWidth />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                id="zip"
                                                name="zip"
                                                label="Zip / Postal code"
                                                fullWidth
                                                autoComplete="billing postal-code"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                required
                                                id="country"
                                                name="country"
                                                label="Country"
                                                fullWidth
                                                autoComplete="billing country"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <FormControlLabel
                                                control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                                                label="Use this address for payment details"
                                            />
                                        </Grid>
                                    </Grid>

                                    <div className={classes.buttons}>                                        
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={handleSave}
                                            className={classes.button}
                                        >
                                            Save
                                        </Button>
                                    </div>
                                </React.Fragment>
                            )}
                    </React.Fragment>
                </Paper>
                <MadeWithLove />
            </main>
        </React.Fragment>
    );
}