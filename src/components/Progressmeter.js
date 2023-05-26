import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'jquery-circle-progress';
import './ProgressMeter.css'; // Import the CSS file for the component

const ProgressMeter = ({ progressValue }) => {
  const progressRef = useRef(null);

  useEffect(() => {
    const options = {
      startAngle: -1.55,
      size: 150,
      value: progressValue / 100,
      fill: { gradient: ['#a445b2', '#fa4299'] },
    };

    $(progressRef.current)
      .circleProgress(options)
      .on('circle-animation-progress', (event, progress) => {
        $(event.currentTarget)
          .find('.progress-value')
          .text(`${Math.round(progressValue)}%`);
      });

    return () => {
      $(progressRef.current).circleProgress('destroy');
    };
  }, [progressValue]);

  return (
    <div className="circle" ref={progressRef}>
      <div className="box">
        <span className="progress-value">{Math.round(progressValue)}%</span>
      </div>
    </div>
  );
};

export default ProgressMeter;
