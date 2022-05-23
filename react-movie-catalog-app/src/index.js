import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import {createRoot} from 'react-dom/client';
import { Application } from './components/Application';
import './assets/css/index.css';
import { ApplicationPageFallbackComponent } from './util/error/fallback';

const rootTag = document.getElementById('rootTag');
const root = createRoot(rootTag);
root.render(
<ErrorBoundary FallbackComponent={ApplicationPageFallbackComponent}>
    <Application />
</ErrorBoundary> 
);
