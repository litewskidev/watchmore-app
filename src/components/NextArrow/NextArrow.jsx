import React from 'react'

const NextArrow = props => {
  const { className, style, onClick } = props;

  return(
    <div>
      className={className}
      style={{ ...style, display: "inline", position: "absolute", right: "0.5rem", background: "transparent" }}
      onClick={onClick}
    </div>
  )
};

export default NextArrow;
