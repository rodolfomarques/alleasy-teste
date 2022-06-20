import * as React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Button } from '@mui/material';
import {AddShoppingCart} from '@mui/icons-material/';

const CardProduto = ({produto}) => {
    return (
        <Card sx={{ maxWidth: 345, flex: 1, flexBasis: '270px' }}>
            <Box sx={{height: '100%',  display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                <CardContent sx={{}}>
                    <Typography variant="subtitle2">{produto.codigo}</Typography>
                    <CardMedia
                        component="img"
                        height="140"
                        image={produto.image}
                        alt={produto.titulo}
                    />
                </CardContent>
                <CardContent sx={{pt:0, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                    <Typography variant="body2" color="text.secondary">
                        {produto.titulo}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h5" sx={{fontWeight: '500', mt:1}}>
                        {produto.valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
                    </Typography>
                    <Button variant='contained' sx={{backgroundColor: '#64b5f6'}}><AddShoppingCart fontSize='small' /> Carrinho</Button>
                </CardContent>
            </Box>
        </Card>
    );
}


export default CardProduto;