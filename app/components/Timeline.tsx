"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { education, experiences, TimelineItem } from "../utils/Data";

const ExCard = ({ item }: { item: TimelineItem }) => (
  <VerticalTimelineElement
    className="vertical-timeline-element--work transition-all duration-300 hover:scale-110"
    contentStyle={{
      background:
        "radial-gradient(circle, rgba(174,238,213,1) 0%, rgba(148,158,233,0.5) 100%)",
      color: "#fff",
    }}
    contentArrowStyle={{ borderRight: "7px solid #fff" }}
    date={<span className="text-sm sm:text-base text-white">{item.date}</span>}
    iconStyle={{
      background:
        "radial-gradient(circle, rgba(0,204,143,1) 10%, rgba(0,0,0,1) 100%)",
      color: "#fff",
    }}
  >
    <h4 className="vertical-timeline-element-subtitle text-base sm:text-lg text-white mb-1">
      {item.company_name}
    </h4>
    <h3 className="vertical-timeline-element-title text-lg sm:text-2xl font-bold text-white mb-2">
      {item.title}
    </h3>

    <ul className="list-disc ml-5 space-y-2 text-sm sm:text-base text-white">
      {item.points.map((p, i) => (
        <li key={i}>{p}</li>
      ))}
    </ul>

    {/* Responsive image */}
    {item.icon && (
      <div className="mt-4 w-16 h-16 sm:w-20 sm:h-20 relative">
        <img src={item.icon} alt="icon" className="object-contain rounded-md" />
      </div>
    )}
  </VerticalTimelineElement>
);

const EdCard = ({ item }: { item: TimelineItem }) => (
  <VerticalTimelineElement
    className="vertical-timeline-element--work transition-all duration-300 hover:scale-110"
    contentStyle={{
      background:
        "radial-gradient(circle, rgba(174,238,213,1) 0%, rgba(148,158,233,0.5) 100%)",
      color: "#fff",
    }}
    contentArrowStyle={{ borderRight: "7px solid #fff" }}
    date={<span className="text-sm sm:text-base text-white">{item.date}</span>}
    iconStyle={{
      background:
        "radial-gradient(circle, rgba(0,204,143,1) 10%, rgba(0,0,0,1) 100%)",
      color: "#fff",
    }}
  >
    <h3 className="vertical-timeline-element-subtitle text-lg sm:text-2xl font-bold text-white mb-1">
      {item.company_name}
    </h3>
    <h4 className="vertical-timeline-element-title text-base sm:text-lg text-white mb-2">
      {item.title}
    </h4>

    <ul className="list-disc ml-5 space-y-2 text-sm sm:text-base text-white">
      {item.points.map((p, i) => (
        <li key={i}>{p}</li>
      ))}
    </ul>

    {/* Responsive image */}
    {item.icon && (
      <div className="mt-4 w-16 h-16 sm:w-20 sm:h-20 relative">
        <img src={item.icon} alt="icon" className="object-contain rounded-md" />
      </div>
    )}
  </VerticalTimelineElement>
);

const Timeline = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-10">
      <div className="flex justify-center items-center mb-6">
        <p className="text-3xl sm:text-4xl md:text-5xl font-bold transition-all duration-300 hover:text-[3.75rem] hover:border-b-6">
          Experiences
        </p>
      </div>
      <VerticalTimeline>
        {experiences.map((item, index) => (
          <ExCard key={index} item={item} />
        ))}
      </VerticalTimeline>
      <div className="flex justify-center items-center mb-6">
        <p className="text-3xl sm:text-4xl md:text-5xl font-bold transition-all duration-300 hover:text-[3.75rem] hover:border-b-6">
          Education
        </p>
      </div>
      <VerticalTimeline>
        {education.map((item: TimelineItem, index: number) => (
          <EdCard key={index} item={item} />
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
