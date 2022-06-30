import React, { useState, useEffect } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
//import Modal from "react-bootstrap/Modal";

import { Widget } from "@uploadcare/react-widget";
/* import ListFiles from "./ListFiles"; */


const URI = "https://api.uploadcare.com/files/";
  const REACT_APP_UPLOADCARE_API_PUBLIC_KEY = "68e94b1b1f48a7211e1f";
  const REACT_APP_UPLOADCARE_API_SECRET_KEY = "8f69e4abac21b60e6b21";
  
const ListFiles = ({ updateList, callBackImage2 }) => {
  const headers = {
    Authorization: `Uploadcare.Simple ${REACT_APP_UPLOADCARE_API_PUBLIC_KEY}:${REACT_APP_UPLOADCARE_API_SECRET_KEY}`,
  };
  const [loading, setLoading] = useState(true);
  const [files, setFiles] = useState([]);
  const [fileToProcess, setFileToProcess] = useState(null);
  const [show, setShow] = useState(false);

  //const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);

  useEffect(() => {
    fetch(URI, { headers })
      .then((response) => response.json())
      .then((data) => {
        console.log("soy los files");
        console.log(data.results);
        setFiles(data.results);
        setLoading(false);
      });
  }, [updateList]);

  const deleteFile = (fileId) => {
    const URI = `https://api.uploadcare.com/files/${fileId}/`;
    const options = {
      method: "DELETE",
      headers: headers,
    };
    fetch(URI, options)
      .then((res) => res.json())
      .then((data) => {
        // filter out deleted file
        const newFiles = files.filter((file) => file.uuid !== fileId);
        setFiles(newFiles);
      })
      .catch((err) => console.log(err));
  };

  

  if (loading) {
    return <p>Loading...</p>;
  }

  if (files.length === 0) {
    return <p className="no-file">Please upload pet image</p>;
  }

   if(files.length > 0){
     console.log('ListFiles linea 62')
     console.log(files.map((e) => e.original_file_url))
     callBackImage2(files.map((e) => e.original_file_url))
   }



  return (
    <div className="file-list">
      <ul className="uc-list-images">
        {files.map((file) => (
          <ImageCard
            key={file.uuid}
            file={file}
            deleteFile={deleteFile}            
          />
        ))}
      </ul>
    </div>
  );
};

const ImageCard = ({ file, deleteFile }) => {
  return (
    <li className="item">
      <div className="header">
        <span className="name">{file.original_filename}</span>
        <div className="actions">         
          <span className="icon" onClick={(id) => deleteFile(file.uuid)}>
            <FiTrash2 />
          </span>
        </div>
      </div>
      <div className="file">
        <img src={file.original_file_url} alt={file.original_filename} />
      </div>
    </li>
  );
};

export default function Uploadcare({callBackImage}) {
  const REACT_APP_UPLOADCARE_API_PUBLIC_KEY = "68e94b1b1f48a7211e1f";

  const [updateList, setUpdateList] = useState(false);
  const [url, setUrl] = useState([])

  const uploadFileChange = (info) => {
    console.log(info);
  };

  const uploadFileSelect = (file) => {
    console.log(`file changed ${file}`);
    console.log(file);
    setUpdateList(false);
    if (file) {
      file.progress((info) => console.log("File progress: ", info.progress));
      file.done((info) => setUpdateList(true));
    }
  };

  const callBackImage2 = (urlArr)=>{
    setUrl(urlArr)
    callBackImage(urlArr)
  }

  /* const fileSizeLimit = () => {
    return function (fileInfo: FileInfo) {
      console.log(fileInfo);
      if (fileInfo.size > 1024 * 1024 * 5) {
        console.log("File is too big!");
        setShowSizeAlert(true);
        throw new Error("File is too big");
      }
    };
  };

  const validators = [fileSizeLimit()]; */

  return (
    <>
      <Widget
        publicKey={REACT_APP_UPLOADCARE_API_PUBLIC_KEY}
        id="file"
        clearable={true}
        onChange={(info) => uploadFileChange(info)}
        onFileSelect={(file) => uploadFileSelect(file)}
        /* validators={validators} */
      />
      <ListFiles updateList={updateList} callBackImage2={callBackImage2} />
    </>
  );
}
