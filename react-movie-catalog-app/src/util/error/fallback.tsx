import React, { MouseEventHandler } from  'react'

export const ApplicationPageFallbackComponent = ({ error, componentStack, resetErrorBoundary }  : {error : Error, componentStack : any, resetErrorBoundary : MouseEventHandler}) => {
  return (
    <div>
      <h1>An error occurred: {error.message}</h1>
      <h2>An componentStack: {componentStack}</h2>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};
