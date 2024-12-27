import React from "react";
import { motion } from "framer-motion";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const TimelineItem = ({ item }) => {
  const {
    title,
    subtitle,
    date,
    para1,
    para2,
    description,
    icon: Icon,
    type,
  } = item;

  return (
    <VerticalTimelineElement
      className={`vertical-timeline-element--${type}`}
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        boxShadow: "0 3px 0 #915EFF",
      }}
      contentArrowStyle={{ borderRight: "7px solid #1d1836" }}
      date={date}
      iconStyle={{
        background: "#1d1836",
        color: "#915EFF",
        boxShadow:
          "0 0 0 4px #915EFF, inset 0 2px 0 rgba(0, 0, 0, .08), 0 3px 0 4px rgba(0, 0, 0, .05)",
      }}
      icon={<Icon />}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="vertical-timeline-element-title font-bold">{title}</h3>
        <h4 className="vertical-timeline-element-subtitle text-secondary ">
          {subtitle}
        </h4>
        <p>{para1}</p>
        <p>{para2}</p>
      </motion.div>
    </VerticalTimelineElement>
  );
};

export default TimelineItem;
