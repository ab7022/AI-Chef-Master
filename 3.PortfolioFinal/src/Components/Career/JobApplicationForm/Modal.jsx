import { toast } from 'sonner';
import { pdfjs } from 'react-pdf';
import { countries, countryPhoneCodes } from './data/countryData';
import LinkedIn from './Linkedin';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function Modal({
  showModal, setShowModal, setfName, setlName, setCountry, setEmail, setPhoneCode, setPhoneNumber
}) {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file.type !== "application/pdf") {
      return toast.error(".pdf file allowed only");
    }
    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target.result;
      processPdf(dataUrl);
    };
    reader.readAsDataURL(file);
  };

  const processPdf = (dataUrl) => {
    pdfjs.getDocument(dataUrl).promise.then(pdf => {
      pdf.getPage(1)
        .then(page => {
          page.getTextContent().then(text => {
            const string = text.items.map(item => item.str).join(' ');

            const nameMatch = string.match(/([A-Z][A-Z]+)\s([A-Z][A-Z]+)/);
            if (nameMatch) {
              setfName(nameMatch[1]);
              setlName(nameMatch[2]);
            }

            countries.forEach(country => {
              if (string.includes(country)) {
                setCountry(country);
                return;
              }
            });

            const emailMatch = string.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g);
            if (emailMatch && emailMatch.length > 0) {
              setEmail(emailMatch[0]);
            }

            const phoneNumberMatch = string.match(/\+?\d{1,4}?\s?\(?\d{1,3}?\)?[\s.-]?\d{1,4}[\s.-]?\d{1,4}[\s.-]?\d{1,9}/g);
            if (phoneNumberMatch && phoneNumberMatch.length > 0) {
              let phoneNumber = phoneNumberMatch[0];
              let phoneCode = '';

              for (let country in countryPhoneCodes) {
                if (phoneNumber.startsWith(countryPhoneCodes[country])) {
                  phoneCode = countryPhoneCodes[country];
                  phoneNumber = phoneNumber.replace(phoneCode, '').replace(/\s+/g, '');
                  break;
                }
              }

              setPhoneCode(phoneCode);
              setPhoneNumber(phoneNumber);
            }
          });
        })
        .finally(() => setShowModal(false));
    });
  };

  return (
    <>
      <div className="text-lg sm:text-lg md:text-xl font-sans flex flex-col items-center">
        <p className="pt-2 md:pt-3 lg:pt-4">
          Please upload your resume, and we will do our best to complete as much of the application as we can for you!
        </p>
        <p className="pt-0 pb-3 md:pb-4 lg:pb-5">
          Upload PDF file only
        </p>
        <div className="flex justify-center items-center flex-wrap">
          <LinkedIn />
          <>
            <button
              className='bg-blue-700 p-3 max-w-sm ml-3 mr-4 rounded text-white linkedin-button font-bold text-xl font-sans my-3 focus:outline-none hover:bg-blue-800 transition duration-300'
              type="button"
              onClick={() => setShowModal(true)}
            >
              Upload Resume
            </button>
            {showModal && (
              <>
                <div
                  className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                        <h3 className="text-3xl font-semibold">
                          Resume
                        </h3>
                        <button
                          className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                          onClick={() => setShowModal(false)}
                        >
                          <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                          </span>
                        </button>
                      </div>
                      <div className="relative p-6 flex-auto">
                        <input
                          type="file"
                          accept=".pdf"
                          onChange={handleFileUpload}
                        ></input>

                      </div>
                      <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                          className="text-black background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            )}
          </>
        </div>
      </div>
    </>
  );
}

// import { useState } from 'react';
// import { Document, Page } from 'react-pdf';

// const [file, setFile] = useState(null);
// const [numPages, setNumPages] = useState(null);

// const handleFileUpload = (event) => {
//   const file = event.target.files[0];
//   if (file) {
//     const reader = new FileReader();
//     reader.onload = (event) => {
//       const dataUrl = event.target.result;
//       setFile(dataUrl);
//       processPdf(dataUrl);
//     };
//     reader.readAsDataURL(file);
//   }
// };

// const onDocumentLoadSuccess = ({ numPages }) => {
//   setNumPages(numPages);
// };

// {
//   file && (
//     <Document
//       file={file}
//       onLoadSuccess={onDocumentLoadSuccess}
//     >
//       {Array.from(new Array(numPages), (el, index) => (
//         <Page key={`page_${index + 1}`} pageNumber={index + 1} />
//       ))}
//     </Document>
//   )
// }