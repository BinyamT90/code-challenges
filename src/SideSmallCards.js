import React from 'react'
import {Grid} from "@material-ui/core";
import moment from "moment";
class SideSmallCards extends React.Component {

    render() {
        return (
            <div className={'inclinedBottomRightBorder sharpBorder'}>
                <Grid container direction={"column"} justify={'space-around'} className={'oneUnitGrids'} style={{
                    backgroundImage: `linear-gradient(to top, ${this.props.color.gradientLightColour}, ${this.props.color.secondaryColour} 90%)`,
                    padding:'10px'}}>

                    <Grid item>
                        <Grid container className="detailRow " alignItems={'center'} direction={'row'}>
                            <Grid item sm={6} className=" just">
                                <Grid container direction={'row'}>
                                    <Grid item>
                                        <div>
                                            <i className='fa fa-vector-square'></i>&nbsp;</div>
                                    </Grid>
                                    <Grid item>
                                        <span>GLA</span> <br/>
                                        <span id="first">{this.props.data.gla}</span> m<sup>2</sup>
                                    </Grid>
                                </Grid>


                            </Grid>
                            <Grid item sm={6}>
                                <Grid container direction={'row'}>

                                    <Grid item>
                                        <span>Availability</span> <br/>
                                        <span id="first">{moment(this.props.data.availableFrom).format('DD MMM YYYY')}</span>
                                        {/*<span id="first">{this.props.data.availableFrom}</span>*/}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item>
                        <Grid container className="detailRow row" alignItems={'center'}>

                            <Grid item sm={6} className=" just">
                                <Grid container direction={'row'}>
                                    <Grid item>
                                        <i className="fa fa-coins" aria-hidden="true"></i>&nbsp;
                                    </Grid>
                                    <Grid item>
                                        <div>Asking Gross</div>
                                        R<span id="level31">{this.props.data.gmr}</span>/m<sup>2</sup>
                                    </Grid>
                                </Grid>


                            </Grid>
                            <Grid item sm={6} className=" just">
                                <Grid container direction={'row'}>

                                    <Grid item>
                                        <span>Asking Net</span> <br/>
                                        R<span id="level32">{this.props.data.netAskingRental}</span>/m<sup>2</sup>
                                    </Grid>
                                </Grid>


                            </Grid>
                            <Grid sm={6} item className="just col-sm-6">


                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container className=" detailRow" alignItems={'center'}>
                            <Grid item sm={6} className="just col-sm-6">
                                <Grid container direction={'row'}>
                                    <Grid item>
                                      {/*  {this.props.data.category === 'office'}*/}
                                      {/*for populating the icons dynamically we need the list of categorys*/}
                                       {/* <i className="fa fa-industry" aria-hidden="true"></i>*/}
                                        <i className="fa fa-building" aria-hidden="true"></i>
                                        &nbsp;
                                    </Grid>
                                    <Grid item>
                                        <div>Category</div>
                                        <span id="level41">{this.props.data.category}</span>
                                    </Grid>
                                </Grid>

                            </Grid>
                            <Grid item sm={6} className="just col-sm-6">

                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container className="detailRow" alignItems={'center'}>
                            <Grid item sm={6} className="just col-sm-6">
                                <Grid container direction={'row'}>
                                    <Grid item sm={2}>
                                        <i className="fa fa-home" aria-hidden="true"></i>
                                        &nbsp;
                                    </Grid>
                                    <Grid item>
                                        {/*the logic below works only if there is no more than 100 floor on a unit.*/}
                                        <div>Floor <br/>{!this.props.data.floors[7] ? this.props.data.floors[6] : this.props.data.floors[6] + this.props.data.floors[7]}<sup>{!this.props.data.floors[7] ? this.props.data.floors[6] === 1 ? 'st' : 'nd' : 'th'}</sup>
                                        </div>
                                        <span id="level41"></span>
                                    </Grid>
                                </Grid>

                            </Grid>
                            <Grid item sm={6} className="just col-sm-6">

                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container className="detailRow" alignItems={'center'}>
                            <Grid item sm={6} className="just col-sm-6">
                                <Grid container direction={'row'}>
                                    <Grid item>
                                        <i className="fa fa-divide" aria-hidden="true"></i>
                                        &nbsp;
                                    </Grid>
                                    <Grid item>
                                        <div>Subdivisible </div>
                                        <span id="level41">{this.props.data.subDivisible?<span>Y</span> :<span>N</span>}</span>
                                    </Grid>
                                </Grid>

                            </Grid>
                            <Grid item sm={6} className="just col-sm-6">
                                
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container className="lastDetailRow" alignItems={'center'}>
                            <Grid item sm={6} className="just col-sm-6">
                                <Grid container direction={'row'}>
                                    <Grid item>
                                        <i className="fa fa-compress" aria-hidden="true"></i>
                                        &nbsp;
                                    </Grid>
                                    <Grid item>
                                        <div>Combinable </div>
                                        <span id="level41">{this.props.data.combinable?<span>Y</span> :<span>N</span>}</span>
                                    </Grid>
                                </Grid>

                            </Grid>
                            <Grid item sm={6} className="just col-sm-6">

                            </Grid>
                        </Grid>
                    </Grid>


                </Grid>
                {/* <div className="mainContainerHeader">
                    <span>Unit 354</span>
                    <span>+ more</span>
                </div>
                <div className=" mainContainer2"
                     style={{height: '400px', marginLeft: 'auto'}}>

                    <Grid className="just ">
                        <div className="col-sm-6">fist</div>
                        <div className="col-sm-6">''</div>
                    </Grid>
                    <div className="just ">
                        <div className="col-sm-6">fist</div>
                        <div className="col-sm-6">''</div>
                    </div>
                    <div className="just ">
                        <div className="col-sm-6">fist</div>
                        <div className="col-sm-6">second</div>
                    </div>
                    <div className="just ">
                        <div className="col-sm-6">fist</div>
                        <div className="col-sm-6">second</div>
                    </div>
                    <div className="just ">
                        <div className="col-sm-6">fist</div>
                        <div className="col-sm-6 " id="telMe">second</div>
                    </div>


                </div>*/}
            </div>
        );
    }

}

export default SideSmallCards;