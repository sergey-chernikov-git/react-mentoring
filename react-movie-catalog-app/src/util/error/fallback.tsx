import React, { MouseEventHandler } from 'react';
import { TFallbackComponentProps } from '../../ts-types/props';

export const ApplicationPageFallbackComponent = ({
  error,
  componentStack,
  resetErrorBoundary
}: TFallbackComponentProps) => {
  return (
    <div>
      <h1>An error occurred: {error.message}</h1>
      <h2>An componentStack: {componentStack}</h2>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};
