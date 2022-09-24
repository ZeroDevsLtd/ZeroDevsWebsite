import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import pdfPhp from './pdf/PHP Job Circular.pdf';

const UploadPdf = () => {

    // create new plugin instance
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    //for onchnage event
    const [pdfFile, setPdfFile] = useState(null);
    const [pdfFileError, setPdfFileError] = useState('');

    //for submit event
    const [viewPdf, setViewPdf] = useState(null);

    //onchange event
    const fileType = ['application/pdf'];
    const handlePdfFileChange = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile) {
            if (selectedFile && fileType.includes(selectedFile.type)) {
                let reader = new FileReader();
                reader.readAsDataURL(selectedFile);
                reader.onloadend = (e) => {
                    setPdfFile(e.target.result);
                    setPdfFileError('');

                    fetch('http://localhost:5000/pdf-file', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/pdf'
                        },
                        body: JSON.stringify(pdfFile)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log('pdf upload');
                            // reset();
                        })
                }
            }
            else {
                setPdfFile(null);
                setPdfFileError('please select valid pdf file');
            }
        } else {
            console.log('select your file');
        }
    }

    // form submit
    const handlePdfFileSubmit = (e) => {
        e.preventDefault();
        if (pdfFile !== null) {
            setViewPdf(pdfFile);
        } else {
            setViewPdf(null);
        }
    }

    return (

        <div className='container mt-20'>
            <form action="" className='form-group' onSubmit={handlePdfFileSubmit}>
                <input type="file" className='form-group' required onChange={handlePdfFileChange} />
                {pdfFileError && <div>{pdfFileError}</div>}
                <br />
                <br />
                <button type='submit' className='btn btn-sm btn-success'>Upload</button>
            </form>
            <br /><br />
            <h2>View PDF</h2>
            <div className='pdf-container'>
                {

                    viewPdf && <Worker workerUrl={'https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js'}>
                        <Viewer fileUrl={viewPdf} plugins={[defaultLayoutPluginInstance]} />
                    </Worker>
                }
                {!viewPdf && <>No pdf file selected</>}
            </div>
        </div>


    );
};

export default UploadPdf;