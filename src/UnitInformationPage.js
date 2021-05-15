import React from 'react'
import {Button, Grid} from '@material-ui/core'
import Container from "@material-ui/core/Container";
import './styles.css'
import MainDetailCard from "./MainDetailCard";
import SideSmallCards from "./SideSmallCards";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import moment from 'moment'

class UnitInformationPage extends React.Component {
    state = {numberOfSpaces: 0, indexOfUnit: null};

    componentWillMount = async () => {
        let haveSpace = 0;
        let indexOfUnit = null;
        await this.props.data.units.map((unit, index) => {
            if (unit.spaceBreakdown) {

                if (haveSpace < 1) {
                    haveSpace++;

                    indexOfUnit = index;
                    this.setState({indexOfUnit: index, numberOfSpaces: unit.spaceBreakdown.spaces.length});

                }
            }
        });

    };

    render() {
        let countUnit = 0;
        let countSpaceInUnit = 0;
        return (
            <Container>
                <div
                    style={{
                        overflow:"hidden",
                        backgroundImage: `linear-gradient( to bottom, ${this.props.data.primaryColour},  ${this.props.data.secondaryColour} 90%`}}>
                    <div className="topHeader">
                        <div style={{height: '230px', overflow: 'hidden'}}>
                            <div className={'inclinedBorder'} style={{
                                display: 'inline-block',
                                backgroundImage: `url('${this.props.data.unitsGalleryImages[0].imageUrl}')`
                            }}>
                                {/*<img src={this.props.data.unitsGalleryImages[0].imageUrl} alt="" height={70}/>*/}
                                <div style={{height: '200px', overflow: 'hidden'}}>
                                    <div style={{height: '50px'}}>

                                    </div>
                                    <Box style={{marginLeft: '30px'}}>
                                        <Typography variant={'h3'}><Typography variant={'h3'} style={{
                                            color: this.props.data.secondaryColour,
                                            display: 'inline'
                                        }}>Unit</Typography> information</Typography>
                                        <span style={{display: 'inline-block', marginRight:'5px', }}>
                                        <i className="fa fa-map-marker fa-lg" aria-hidden="true" style={{color:this.props.data.secondaryColour}}></i>
                                    </span>
                                        <div style={{display:'inline-block'}}><Typography variant={'h5'}
                                                       style={{color: this.props.data.secondaryColour}}>

                                            {this.props.data.property.hasName ? this.props.data.property.name : ''}
                                        </Typography>
                                            <Typography variant={'h6'}>
                                                {this.props.data.property.hasStreetAddress ? this.props.data.property.streetAddress : ''}
                                            </Typography></div>
                                        <br/><br/>
                                        <Button style={{
                                            textTransform: 'none',
                                            border: `1px solid ${this.props.data.secondaryColour}`
                                        }} href={'http://www.gmaven.com'}>

                                            <i className="fa fa-plus" aria-hidden="true"></i>
&nbsp;
                                            <span>
                                            View additional units
                                        </span>
                                            <span className={'circledIcon'} style={{
                                                backgroundColor: this.props.data.secondaryColour,
                                            }}>
                                                <span style={{paddingLeft: '7px'}}>
                                                    {this.props.data.units.length - 4}
                                                </span>
                                            </span>
                                        </Button>
                                    </Box>
                                </div>
                            </div>
                            <div className={'inclinedBothSideBorder'} style={{
                                display: 'inline-block',
                                backgroundImage: `url('${this.props.data.unitsGalleryImages[1].imageUrl}')`
                            }}>
                                {/*<img src={this.props.data.unitsGalleryImages[1].imageUrl} alt="" height={200}/>*/}
                                <div style={{backgroundColor: 'blue'}}>

                                </div>

                            </div>
                            <div className={'inclinedLeftBorder'} style={{
                                display: 'inline-block',
                                backgroundImage: `url('${this.props.data.unitsGalleryImages[2].imageUrl}')`
                            }}>
                                {/*<img src={this.props.data.unitsGalleryImages[2].imageUrl} alt="" height={200}/>*/}
                                <div style={{backgroundColor: 'blue'}}>

                                </div>
                            </div>
                        </div>
                    </div>
                    <Grid container className=" mainContainer" justify={'space-around'}
                          style={{height: '470px',/*backgroundImage: `linear-gradient(to bottom, ${this.props.data.primaryColour}, ${this.props.data.primaryColour} 10%)`*/}}>

                        <Grid item sm={this.state.numberOfSpaces * 2} justify={'space-around'}>


                            <div style={{}}>
                                <div className="cardHeaders " style={{}}>
                                    <span id="unitsName" className={'cardHeadersInclined'}
                                          style={{backgroundColor:`${this.props.data.primaryColour}`, color:`${this.props.data.secondaryColour}`}}
                                    >{this.props.data.units[this.state.indexOfUnit].name} </span>
                                    <a href="https://www.gmaven.com" className={'more cardHeadersInclined'}
                                       style={{backgroundColor:`${this.props.data.primaryColour}`, color:`${this.props.data.secondaryColour}`}}
                                    >+ more</a>
                                </div>
                                <div className={'mainDivBorder'} style={{
                                    backgroundImage: `linear-gradient(to top, ${this.props.data.gradientLightColour}, ${this.props.data.secondaryColour} 90%)`,
                                    padding: '20px',
                                }}>
                                    <Grid container spacing={2} direction={'row'} justify={'space-around'}
                                          className="mainContainer1 d-flex flex-row row"
                                          style={{

                                              height: '285px',
                                              width: 'auto',
                                          }}
                                    >


                                        {this.props.data.units.map((unit, index) => {

                                            if (unit.spaceBreakdown) {

                                                if (unit.spaceBreakdown.spaces) {
                                                    if (countUnit < 1) {
                                                        countSpaceInUnit = countSpaceInUnit + unit.spaceBreakdown.spaces.length;

                                                        return unit.spaceBreakdown.spaces.map((space, index) => {

                                                            countUnit++;
                                                            if (index < 3) {
                                                                return <Grid item sm={12 / this.state.numberOfSpaces}
                                                                             key={index}>

                                                                    <MainDetailCard
                                                                        space={space}
                                                                        data={unit}

                                                                    />
                                                                </Grid>


                                                            }
                                                        });
                                                    }

                                                }
                                                console.log(unit.spaceBreakdown.spaces[0].spaceId);


                                            } else {
                                                /*if(index<3){
                                                    return <Grid item sm={2}>
                                                        <SideSmallCards data={this.props.data}/>
                                                    </Grid>}*/
                                            }


                                        })}
                                        {/*  <Grid item sm={4}><MainDetailCard data={this.props.data.units[0]}/></Grid>
                                <Grid item sm={4}><MainDetailCard data={this.props.data.units[1]}/></Grid>
                                <Grid item sm={4}><MainDetailCard data={this.props.data.units[2]}/></Grid>*/}


                                    </Grid>
                                    <Grid container className={'mainBottomRow'} justify={'space-around'}
                                          alignItems={'baseline'} >
                                        <Grid item sm={2} className={"mainBottomRowSubGrids"}>
                                            <span>Availability</span><br/>
                                            <span style={{fontSize:'11px'}}>{moment(this.props.data.units[this.state.indexOfUnit].availableFrom).format('DD MMM YYYY')}</span>

                                        </Grid>
                                        <Grid item sm={2} className={"mainBottomRowSubGrids"}>
                                            <div>Floor <br/>{!this.props.data.units[this.state.indexOfUnit].floors[7] ? this.props.data.units[this.state.indexOfUnit].floors[6] : this.props.data.units[this.state.indexOfUnit].floors[6] + this.props.data.units[this.state.indexOfUnit].floors[7]}
                                                <sup>{!this.props.data.units[this.state.indexOfUnit].floors[7] ? this.props.data.units[this.state.indexOfUnit].floors[6] === '1' ? 'st' : 'nd' : 'th'}</sup>
                                            </div>

                                        </Grid>
                                        <Grid item sm={2} className={"mainBottomRowSubGrids"}>
                                            <span>Subdivisible</span><br/>
                                            <span>{this.props.data.units[this.state.indexOfUnit].subDivisible ?
                                                <span>Y</span> :
                                                <span>N</span>}</span>
                                            <br/><br/>
                                            {this.props.data.units[this.state.indexOfUnit].subDivisible ? <div>
                                                Sizes <br/>{this.props.data.units[this.state.indexOfUnit].minSubDivision}
                                            </div> : <div></div>}

                                        </Grid>
                                        <Grid item sm={2} className={"mainBottomRowSubGrids"}>
                                            <span>Combinable</span><br/>
                                            <span>{this.props.data.units[this.state.indexOfUnit].combinable ?
                                                <span>Y</span> :
                                                <span>N</span>}</span>

                                        </Grid>


                                    </Grid></div>
                            </div>

                        </Grid>
                        {this.props.data.units.map((unit, index) => {
                            if (!unit.spaceBreakdown) {
                                if (index < 5) {
                                    return <Grid item sm={2}
                                    >
                                        <div className="mainContainerHeader cardHeaders">
                                            <span className={'cardHeadersInclined'}
                                                id="unitsName" style={{backgroundColor:`${this.props.data.primaryColour}`, color:`${this.props.data.secondaryColour}`}}>{unit.name} </span>
                                            <a href="https://www.gmaven.com" className={'more cardHeadersInclined'}
                                               style={{backgroundColor:`${this.props.data.primaryColour}`, color:`${this.props.data.secondaryColour}`}}
                                            >+ more</a>
                                        </div>
                                        <div className={'sharpBorder'} style={{
                                            /*backgroundImage: `linear-gradient(to top, ${this.props.data.primaryColour}, ${this.props.data.primaryColour} 10%)`,
                                            marginRight: '20px'*/

                                        }}>
                                            <SideSmallCards data={unit} color={this.props.data}/>

                                        </div>
                                    </Grid>
                                }
                            }
                        })}


                    </Grid>
                    <Grid container alignItems={'flex-start'} justify={"flex-start"} style={{ height: '40px',backgroundImage: `linear-gradient( to right, white,  ${this.props.data.primaryColour} 50%`}}>>
                        <Grid item sm={2}>
                            <img width={200} height={40} src={this.props.data?this.props.data.brokerLogo:"Gmaven"} alt=""/>
                        </Grid>
                        <Grid item sm={8}></Grid>
                        <Grid item >
                            <Box style={{color:this.props.data.accentColour, marginTop:'15px'}}>{this.props.data.hasWebsite ? this.props.data.website : "www.gmaven.com"}</Box>
                        </Grid>
                    </Grid>
                </div>
            </Container>

        );
    }

}

export default UnitInformationPage;