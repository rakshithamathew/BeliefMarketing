import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';

const SplineScene = ({ className = '', style = {} }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="h-screen w-full">
      <Spline scene="https://my.spline.design/interactiveaiwebsite-UQUk6cMqIQlpqEhJUuqnU5HO/" />
    </div>
  );
};

export default SplineScene;
