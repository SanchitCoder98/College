import React, {Component} from 'react'
import {PropTypes} from 'prop-types'
import Scheduler, {SchedulerData, ViewTypes} from 'react-big-scheduler'
import 'react-big-scheduler/lib/css/style.css'
import withDragDropContext from './withDnDContext'

let resources = null;
let events = null;

class Readonly extends Component{
    
    constructor(props){
        super(props);

        let today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1;
        var yyyy = today.getFullYear();

        if(dd<10) {
            dd = '0'+dd
        } 
        
        if(mm<10) {
            mm = '0'+mm
        } 


        let schedulerData = new SchedulerData(`${yyyy}-${mm}-${dd}`, ViewTypes.Week, false, false, {
            startResizable: false,
            endResizable: false,
            movable: false,
            creatable: false,
        });

            resources = [
            {
               id: 'r1',
               name: 'ECE 310'
            },
            {
               id: 'r2',
               name: 'ECE 313'
            },
            {
               id: 'r3',
               name: 'ECE220'
            }
        ];

            events = [
            {
                 id: 1,
                 start: '2018-9-7 00:00:00',
                 end: '2018-9-7 23:59:00',
                 resourceId: 'r1',
                 title: 'Homework',
                 rrule: 'FREQ=WEEKLY;DTSTART=20171219T013000Z',
                 bgColor: '#D9D9D9'
             },
             {
                id: 2,
                start: '2018-9-5 00:00:00',
                end: '2018-9-5 12:00:00',
                resourceId: 'r1',
                title: 'Quiz',
                rrule: 'FREQ=WEEKLY;DTSTART=20171219T013000Z',
                bgColor: '#666666'
            },
            {
                id: 3,
                start: '2018-9-6 00:00:00',
                end: '2018-9-6 12:00:00',
                resourceId: 'r3',
                title: 'MP',
                rrule: 'FREQ=WEEKLY;DTSTART=20171219T013000Z;INTERVAL=2',
                bgColor: '#D9D9D9'
            },
         ];

        schedulerData.localeMoment.locale('en');
        schedulerData.setResources(resources);
        schedulerData.setEvents(events);
        this.state = {
            viewModel: schedulerData
        }
    }

    render(){
        const {viewModel} = this.state;
        return (
            <div>
                <div>
                    <Scheduler schedulerData={viewModel}
                               prevClick={this.prevClick}
                               nextClick={this.nextClick}
                               onSelectDate={this.onSelectDate}
                               onViewChange={this.onViewChange}
                               eventItemClick={this.eventClicked}
                               viewEventClick={this.ops1}
                               viewEventText="Ops 1"
                               viewEvent2Text="Ops 2"
                               viewEvent2Click={this.ops2}
                    />
                </div>
            </div>
        )
    }

    prevClick = (schedulerData)=> {
        schedulerData.prev();
        schedulerData.setEvents(events);
        this.setState({
            viewModel: schedulerData
        })
    }

    nextClick = (schedulerData)=> {
        schedulerData.next();
        schedulerData.setEvents(events);
        this.setState({
            viewModel: schedulerData
        })
    }

    onViewChange = (schedulerData, view) => {
        schedulerData.setViewType(view.viewType, view.showAgenda, view.isEventPerspective);
        schedulerData.setEvents(events);
        this.setState({
            viewModel: schedulerData
        })
    }

    onSelectDate = (schedulerData, date) => {
        schedulerData.setDate(date);
        schedulerData.setEvents(events);
        this.setState({
            viewModel: schedulerData
        })
    }

    // eventClicked = (schedulerData, event) => {
    //     alert(`You just clicked an event: {id: ${event.id}, title: ${event.title}}`);
    // };

    // ops1 = (schedulerData, event) => {
    //     alert(`You just executed ops1 to event: {id: ${event.id}, title: ${event.title}}`);
    // };

    // ops2 = (schedulerData, event) => {
    //     alert(`You just executed ops2 to event: {id: ${event.id}, title: ${event.title}}`);
    // };
}

export default withDragDropContext(Readonly)