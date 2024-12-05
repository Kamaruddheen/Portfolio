import React from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TimelineItem from './TimelineItem';
import { timelineData } from '../data/timelineData';

const Timeline = () => {
  return (
    <section id="timeline" className="py-20 bg-tertiary">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Journey</h2>
        
        <VerticalTimeline>
          {timelineData.map((item, index) => (
            <TimelineItem key={index} item={item} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Timeline;