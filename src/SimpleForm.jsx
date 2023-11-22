import { Button, Card, CardActions, CardContent, Grid, TextField } from '@mui/material'
import React, { Component } from 'react'

export default class SimpleForm extends Component {
    
    render() {
    return (
    <Card variant="outlined">
        <CardContent>
        <Grid container spacing={1}>
            <Grid item md={6} xs={12}>
            <TextField variant="outlined" label="Full Name" type='text'/>
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
    )
  }
}
