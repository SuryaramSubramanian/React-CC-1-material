import { Button, Card, CardActions, CardContent, Grid, TextField } from '@mui/material'
import React, { Component } from 'react'

export default class SimpleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
        };
    }

    handleFullname = (e) => {
        this.setState({ fullName: e.target.value });
    }

    handleSubmit = (e) => {
        if (this.state.fullName === ''){
            alert('You must fill full name');
        } else {
            alert('Submission Success');
        }
    }

    render() {
    return (
        <form onSubmit={this.handleSubmit}>
    <Card variant="outlined">
        <CardContent>
        <Grid container spacing={1}>
            <Grid item md={6} xs={12}>
            <TextField name="fullName" value={this.state.fullName} onChange={this.handleFullname} variant="outlined" label="Full Name" type='text'/>
            </Grid>
            <Grid item md={6} xs={12}>
            <TextField variant="outlined" label="Email Id" type='email'/>
            </Grid>
        </Grid>
        <Grid container spacing={1} sx={{ marginTop: '10px' }}>
            <Grid item md={6} xs={12}>
                <TextField variant="outlined" label="Create Password" type='password'/>
                </Grid>
                <Grid item md={6} xs={12}>
                <TextField variant="outlined" label="Re-Enter Password" type='password'/>
                </Grid>
        </Grid>
        </CardContent>
        <CardActions>
            <Button type="submit" size="small">Submit</Button>
        </CardActions>
    </Card>
    </form>
    )
  }
}
