import { Box, Grid } from "@mui/material";
import React, { Component } from "react";
import ResponsiveAppBar from "./NavMenu";
import MultiActionAreaCard from "./Card";

class HomePage extends Component {
    render(){
        const array = [1,2,3,4,5,6,1,2,3,4,5];
        return(
            <Box style={{background: 'black', minHeight: '25vh', width: '100vw'}}>
                <Grid style={{ width: '100%', height: '20%'}}>
                  <ResponsiveAppBar/>
                </Grid>
                <Grid style={{width: '100%', maxHeight: '80%', display: 'flex', gap: '1em', padding: '10px', flexWrap: 'wrap', alignContent: 'center', justifyContent: 'center'}}>
                    {
                        array.map((item, index) =>{
                          return (
                            <Grid className="animation-class" style={{display: 'flex'}}>
                              <MultiActionAreaCard />
                           </Grid>
                          )
                        })
                    }
                </Grid>
            </Box>
        )
    }
}

export default HomePage;