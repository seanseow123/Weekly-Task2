import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const AddCard = (props) => {
    const { formData } = props;
    const dataList = formData.map(info => {

        return (
            <Grid container
            justify="center"
            alignItems="center"
            direction="column"
            mt={5} mb={3}
            key={info.contact}
            >
            <React.Fragment>
            <Box sx={{ boxShadow: 3 }} ><Card style={{backgroundColor: "#F9F9F9"}}>
            <Card>
                <CardContent>
                    <Typography sx={{ fontSize: 17 }} color="text.secondary">
                        <label>Name: {info.name}</label>
                    </Typography>
                    <Typography sx={{ fontSize: 17 }} color="text.secondary">
                        <label>Date of birth: {info.DOB}</label>
                    </Typography>
                    <Typography sx={{ fontSize: 17 }} color="text.secondary">
                        <label>Email: {info.email}</label>
                    </Typography>
                    <Typography sx={{ fontSize: 17 }} color="text.secondary">
                        <label>Contact: {info.contact}</label>
                    </Typography>
                    <Typography sx={{ fontSize: 17 }} color="text.secondary">
                        <label>About me: {info.tell}</label>
                    </Typography>
                </CardContent>
                </Card>
            </Card>
            </Box>
            </React.Fragment>
            </Grid>
        )
    }
    )

    return (
        <div>
            {dataList}
        </div>
    )
}
export default AddCard;


