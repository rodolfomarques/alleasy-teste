import React from 'react';
import { Box } from '@mui/system';
import { Calendar, CustomProvider } from 'rsuite';
import 'rsuite/dist/rsuite.min.css'
import {ptBR} from 'rsuite/locales';

const Calendario = () => {

    return (
        <CustomProvider locale={ptBR}>
            <Box sx={{flex: 1, flexBasis: '50px', backgroundColor: '#FFF' }}>
                <Calendar compact bordered  />
            </Box>
        </CustomProvider>
    );

}

export default Calendario;