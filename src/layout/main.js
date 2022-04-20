import * as React from 'react';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import axios from "axios";

const theme = createTheme();

export default function Main() {

    const [dbProducts, setdbProducts] = useState([]);



    useEffect(() => {
        fetch('http://localhost:5000/api/products')
            .then(dbGetData => dbGetData.json())
            .then(dbGetData => setdbProducts(dbGetData.result))
            .catch(<Alert severity="warning">This is a warning alert — check it out!</Alert>);
    }, []);

    // function ClickAlert() {
    //     alert('Veri Göndere tıkladınız')
    // }

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/products")
            .then(response => console.log("Axios Then", response))
            .then(dbGetData => dbGetData.json())
            .then(dbGetData => setdbProducts(dbGetData.result))

    }, []);

    const postDelete = (id) => {
        axios.delete(`http://localhost:5000/api/products/${id}`)
        console.log(id)
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />

            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: 'white',
                        pt: 2,
                        pb: 2,
                    }}
                >
                    <Container maxWidth="sm">

                    </Container>
                </Box>

                <Container sx={{ py: 1 }} maxWidth="lg">

                    <Grid container spacing={4}>
                        {dbProducts.map((p, index) => (
                            <Grid item key={index} xs={12} sm={6} md={3} >
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#82b1ff' }}
                                >
                                    {<CardMedia
                                        component="img"
                                        image="https://source.unsplash.com/random?query=robot"
                                    />}
                                    <CardContent sx={{ flexGrow: 3 }}>

                                        <Typography variant="h5" component="h2" sx={{ color: '#890b44' }}>
                                            {p.name}
                                        </Typography>

                                        <Typography component="h1">
                                            {"index: " + index}
                                        </Typography>

                                        <Typography>
                                            {"id: " + p._id}
                                        </Typography>

                                        <Typography>
                                            {"Fiyat: " + p.price}
                                        </Typography>

                                        <Typography>
                                            {"Tag: " + p.tag}
                                        </Typography>

                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" sx={{ color: 'black' }}>PUT</Button>
                                        <Button size="small" sx={{ color: 'black' }} onClick={() => postDelete(p._id)}>DELETE</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>

        </ThemeProvider>
    );
}