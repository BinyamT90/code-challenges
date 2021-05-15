import React from 'react'
import {Grid ,withStyles} from '@material-ui/core'
import './styles.css'
import setColorDynamically from './AliceLaneMappedData'

const useStyles = setColor =>({

    root:{
        "&:hover":{
            backgroundColor:setColor.primaryColour,

        },

    }

});
class MainDetailCard extends React.Component {

    render() {

        console.log(this.props);
        const {classes} = this.props;
        return (
            <Grid container direction={"column"} justify={'space-around'}
                   className={classes.root}

            >
                <Grid item >
                    <Grid container alignItems={'center'} justify={'space-between'} direction={'row'}
                          className="detailRow ">
                        <Grid item sm={6} className="just col-sm-6">

                            <span id="level01">{this.props.space.spaceId}</span>{/*<span id="level02">{this.props.space.spaceId}</span>*/}
                        </Grid>
                        <Grid item sm={6} className=" just col-sm-6 " id="level03">
                            <a href={'#'} className={'more'}>+ More</a>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item >
                    <Grid container className="detailRow " alignItems={'center'}>
                        <Grid item sm={6} className=" just">
                            <Grid container direction={'row'}>
                                <Grid item>
                                    <div><i className='fa fa-vector-square'></i>&nbsp;</div>&nbsp;
                                </Grid>
                                <Grid item>
                                    <span>GLA</span> <br/>
                                    <span id="first">{this.props.space.gla}</span> m<sup>2</sup>
                                </Grid>
                            </Grid>


                        </Grid>
                    </Grid>
                </Grid>

                <Grid item >
                    <Grid container className="detailRow row" alignItems={'center'}>

                        <Grid item sm={6} className=" just">
                            <Grid container direction={'row'}>
                                <Grid item>
                                    <i className="fa fa-coins" aria-hidden="true"></i>&nbsp;
                                </Grid>
                                <Grid item>
                                    <div>Asking Gross</div>
                                    R<span id="level31">{this.props.space.grossAskingRental}</span>/m<sup>2</sup>
                                </Grid>
                            </Grid>


                        </Grid>
                        <Grid item sm={6} className=" just">
                            <Grid container direction={'row'}>
                                &nbsp;&nbsp;&nbsp;
                                <Grid item>
                                    <span>Asking Net</span> <br/>
                                    R<span id="level32">{this.props.space.netAskingRental}</span>/m<sup>2</sup>
                                </Grid>
                            </Grid>


                        </Grid>
                        <Grid sm={6} item className="just col-sm-6">


                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container className=" lastDetailRow" alignItems={'center'}>
                        <Grid item sm={8} className="just col-sm-6">
                            <Grid container direction={'row'}>
                                <Grid item>
                                    <i className="fa fa-building" aria-hidden="true"></i>
                                    &nbsp;
                                </Grid>
                                <Grid item>
                                    <div>Category</div>
                                    <span id="level41">{this.props.space.category}</span>
                                </Grid>
                            </Grid>

                        </Grid>
                        <Grid item sm={6} className="just col-sm-6">

                        </Grid>
                    </Grid>
                </Grid>


            </Grid>

        );
    }

}

export default withStyles(useStyles (setColorDynamically))(MainDetailCard) ;