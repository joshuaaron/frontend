import React from 'react';
import ReactDOM from 'react-dom/client';
import {Accordion} from './Accordion.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Accordion allowMultiOpen />
    </React.StrictMode>
);
