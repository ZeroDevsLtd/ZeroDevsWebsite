import { SpecialZoomLevel, Viewer, Worker, CharacterMap } from '@react-pdf-viewer/core';
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
import { pdfjs } from 'react-pdf';
import Php from '../Dashboard/pdf/PHP Job Circular.pdf';
import React from 'react';
import { useState } from 'react';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
// import { Viewer, Worker } from '@react-pdf-viewer/core';
// Plugins
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const Pdf = () => {
    const [defPdf] = useState(Php);
     // Create new plugin instance
     const defaultLayoutPluginInstance = defaultLayoutPlugin();
    
     const pdfVersion = "2.13.148"
     const pdfWorkerUrl = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfVersion}/pdf.worker.js`;
  return (
<div className='pdf-container'>
{/* {defPdf&& <Worker pdfjsWorker={pdfWorkerUrl}>
    <Viewer
      fileUrl={defPdf}
    //   defaultScale={SpecialZoomLevel.PageFit}
      plugins={[
        defaultLayoutPluginInstance
      ]}
    />
</Worker>} */}

{

defPdf && <Worker workerUrl={'https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js'}>
    <Viewer fileUrl={defPdf} plugins={[defaultLayoutPluginInstance]} />
</Worker>
}

</div>
  )
    
    
};

export default Pdf;