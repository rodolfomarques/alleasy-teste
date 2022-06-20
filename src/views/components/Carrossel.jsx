import React from 'react';
import Slider from "react-slick";
import { Box, Typography } from '@mui/material';



const Carrossel = ({listaDeImagens}) => {
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
    };
    

    return (
        <Box sx={{maxWidth: {xm: '200px', sm: '600px', lg:'800px'}, flex: 1, flexBasis: '200px'}}>
            <Slider {...settings}>
                {
                    listaDeImagens.map((slide, i) => {
                        return (
                            <Box key={`slide-${i}`} sx={{display: 'grid', gridTemplateRows: '1fr .2fr', gridTemplateColumns: '1fr'}}>
                                <img src={slide.image} alt={slide.titulo} style={{gridRow: '1/3', gridColumn: '1'}} />
                                <Box sx={{p: 1, backgroundColor: '#000000CC', gridRow: '2/3', gridColumn: '1'}}>
                                    <Typography variant='h5' sx={{color: '#fff'}}>{slide.titulo}</Typography>
                                </Box>
                            </Box>
                        )
                    })
                }
            </Slider>
        </Box>
    )
};

export default Carrossel;