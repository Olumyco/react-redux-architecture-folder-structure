import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Input, Dropdown, Icon, Button } from 'semantic-ui-react';
import DatePicker from "react-datepicker";
import Counter from '../../../utils/customUI/Counter';
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
import * as busActions from '../actions/busActions';
import bookingBanner from '../../../images/booking-banner.png';
import './bus.scss';

const mapStateToProps = state => ({
    trips: state.busReducers.trips
});

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ ...busActions }, dispatch);
};

const Bus = ({ getTrips, trips }) => {
    const [seat, setSeat] = useState(0);

    useEffect(() => {
        getTrips();
    }, []);

    // useEffect(() => {
    //     console.log(trips);
    // }, [trips]);

    const handleDecrement = () => {
        setSeat(prevState => prevState ? prevState - 1 : prevState);
    };
    
    const handleIncrement = () => {
        setSeat(prevState => prevState + 1);
    };
    
    return (
        <section className="bus-">
            <div className="bus-form">
                <div className="bus-form__inputs">
                    <p className="bus-form__inputs__title">Book Bus Tickets</p>

                    <Form>
                        <Form.Group widths='equal'>
                            <Form.Input fluid placeholder='From' icon='map marker alternate' />
                            <Form.Input fluid placeholder='To' icon='map marker alternate' />
                        </Form.Group>
                    
                        <DatePicker
                            minDate={new Date()}
                            placeholderText="Depart Date"
                            
                        />
                        <Icon name='calendar' />
                        <Form.Input fluid placeholder='Seat' value={seat ? seat : ''} action={<Counter handleDecrement={handleDecrement} handleIncrement={handleIncrement} />} />
                        <br/>
                        <Button fluid primary>Search</Button>
                    </Form>
                </div>

                <div >
                    <img className="bus-form__banner" src={bookingBanner} />
                </div>
            </div>
            
            <div className="bus-overview">
                <div className="bus-overview__heading">
                    <h1 className="bus-overview__title">Why Choose Quickteller Transport</h1>
                    <p className="bus-overview__message">The Best Way To Book Bus Tickets</p>
                </div>

                <div className="bus-overview__info">
                    <div className="bus-overview__info__a">
                        <div>
                            <Icon name='dollar' size='big' color='blue' />
                        </div>
                        
                        <div style={{paddingLeft: '10px', wordSpacing: '0.3em'}}>
                            <p style={{fontSize: '1.25em'}}>Your trip, your priorities</p>
                            <p>On a budget? Tight schedule? Book tickets that fit your needs.</p>
                        </div>
                    </div>
                    <div className="bus-overview__info__b">
                        <Icon name='search' size='big' color='blue' />
                        <div style={{paddingLeft: '10px', wordSpacing: '0.3em'}}>
                            <p style={{fontSize: '1.25em'}}>Nationwide coverage</p>
                            <p>Save time by comparing all your bus travel options in one place</p>
                        </div>
                    </div>
                    <div className="bus-overview__info__c">
                        <Icon name='percent' size='big' color='blue' />
                        <div style={{paddingLeft: '10px', wordSpacing: '0.3em'}}>
                            <p style={{fontSize: '1.25em'}}>24/7 support</p>
                            <p>Our world class team of bus experts is always here to help</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bus-routes">
                <p className="bus-routes__title">Top Bus Routes</p>
                <div className="bus-routes__list">
                    {!!trips?.length && trips.map((val, ind) =>
                        <div key={ind} className={`${ind % 2 === 0 ? 'bus-routes__list__padright' : 'bus-routes__list__padleft'} ${(ind >= trips.length - 2) && 'pad-unset'}`}>
                            <p className="bus-routes__list__caption">{val.trip}</p>
                            <div className="custom-white-button bus-routes__list__button">Book Now</div>
                            {(ind < trips.length - 2) &&
                                <hr className="bus-routes__list__hr" />
                            }
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Bus);
