import React from 'react';

const NextButton = ({ nextPage}) => {
  return (
    <button type="submit" className="nextButton" onClick={nextPage}>
      <span className="button-label-next">Next</span>
    </button>
  );
};

export default NextButton;
