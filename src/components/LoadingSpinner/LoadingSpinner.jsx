import './LoadingSpinner.scss';

const LoadingSpinner = () => {
  return(
    <div className="lds-grid">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
};

export default LoadingSpinner;
