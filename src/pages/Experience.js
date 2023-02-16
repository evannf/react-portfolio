import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import '../styles/Experience.css'

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#8D98A7'>
        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date='Spring 2012'
          iconStyle={{background: '#6F59B8', color:'#f6b02d'}}
          icon={<SchoolIcon />}
          >
            <h3 className='vertical-timeline-element-title'>
             Graduted High School 
            </h3>
            <p>I graduated from O'Fallon Township High School, where I was a part of the German and Photography clubs.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date='Fall 2013'
          iconStyle={{background: '#6F59B8', color:'#f6b02d'}}
          icon={<SchoolIcon />}
          >
            <h3 className='vertical-timeline-element-title'>
              Started College
            </h3>
            <p>Exploring new career options, I took class in marketing, creative writing, and electrical engineering. All of these piqued my interest in different ways, but eagerness to join the workfoce lead me elsewhere.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date='2014-2018'
          iconStyle={{background: '#f6b02d', color:'#6F59B8'}}
          icon={<WorkIcon />}
          >
            <h3 className='vertical-timeline-element-title'>
              Odds Jobs
            </h3>
            <p>Worked several roles in the area providing customer service, managing a small team of employees, and operating heavy machinery like tractors and pallet jacks.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date='2018-2022'
          iconStyle={{background: '#f6b02d', color:'#6F59B8'}}
          icon={<WorkIcon />}
          >
            <h3 className='vertical-timeline-element-title'>
              A New Office: The Road
            </h3>
            <p>After obtaining my class A commercial driving license, I began making deliveries in both a residential and commercial setting. I maintained a tight schedule making deliveries on time while observing all rules of the road.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date='2022'
          iconStyle={{background: '#6F59B8', color:'#f6b02d'}}
          icon={<SchoolIcon />}
          >
            <h3 className='vertical-timeline-element-title'>
              Gradutaed Boot Camp!
            </h3>
            <p>After finally deciding it was time for a permanent career change, I attended General Assembly's Full Stack Immersive bootcamp. Here I took courses on popular web technologies such as HTML, CSS, and Javascript, storage platforms, and front-end frameworks. </p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  )
}

export default Experience