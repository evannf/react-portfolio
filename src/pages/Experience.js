import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import '../styles/Experience.css'

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date='2008-2012'
          iconStyle={{background: '#3e497a', color:'#fff'}}
          icon={<SchoolIcon />}
          >
            <h3 className='vertical-timeline-element-title'>
              O'Fallon Township High School, O'Fallon, IL 
            </h3>
            <p>High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date='2013-2014'
          iconStyle={{background: '#3e497a', color:'#fff'}}
          icon={<SchoolIcon />}
          >
            <h3 className='vertical-timeline-element-title'>
              Southwestern Illinois College 
            </h3>
            <p>Completed some classes towards a degree in Marketing</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date='2014-2018'
          iconStyle={{background: 'teal', color:'#fff'}}
          icon={<WorkIcon />}
          >
            <h3 className='vertical-timeline-element-title'>
              Entered workforce
            </h3>
            <p>Worked several roles including service, management, and machine operating</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date='2018-2022'
          iconStyle={{background: 'teal', color:'#fff'}}
          icon={<WorkIcon />}
          >
            <h3 className='vertical-timeline-element-title'>
              Commercial Driving Career
            </h3>
            <p>Obtained Class A CDL and worked as a commercial driver. Operated in both residential and business environments</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date='2022'
          iconStyle={{background: '#3e497a', color:'#fff'}}
          icon={<SchoolIcon />}
          >
            <h3 className='vertical-timeline-element-title'>
              Full-Stack Bootcamp
            </h3>
            <p>Completed a full-stack web development bootcamp through General Assembly</p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  )
}

export default Experience