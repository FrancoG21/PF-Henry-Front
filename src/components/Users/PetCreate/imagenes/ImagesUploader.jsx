import React, { useState } from "react";
import axios from "axios";
import { BiImageAdd } from "react-icons/bi";
import styles from './styles.css'

function ImageUploader({ json, setJson }) {
  const [progress, setProgress] = useState(0);
  const [progressVisible, setProgressVisible] = useState(false);

  const handleUploadImage = async (files) => {
    let arrAux = [];
    if (files.length > 3 - json.images.length) {
      var iterations = 3 - json.images.length;
    } else {
      var iterations = files.length;
    }
    for (let i = 0; i < iterations; i++) {
      const formData = new FormData();
      formData.append("file", files[i]);
      formData.append("upload_preset", "c7eoa2h4");
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dlol6par5/image/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress(e) {
            setProgressVisible(true);
            setProgress((e.loaded * 100) / e.total);
          },
        }
      );
      arrAux.push(res.data.url);
      setProgress(0);
      setProgressVisible(false);
      setJson({
        ...json,
        images: [...json.images, ...arrAux],
      });
    }
  };

  const handleOnClose = (url) => {
    setJson({
      ...json,
      images: json.images.filter((src) => src !== url),
    });
  };

  return (
    <div  className='img-uploader-container' >
      <div  className='card-previewer' >
        {json.images.map((url, i) => {
          return (
            <div  className='img-view-container'  key={i}>
              <img src={url} alt=""  className='img-view'  />
              <div  className='img-front-film' >Imagen {i + 1}</div>
              <button
                 className='onclose-btn'  value={url}
                onClick={(e) => handleOnClose(e.target.value)}
              >
                X
              </button>
            </div>
          );
        })}

        <label  className={json.images.length < 3 ? 'card-footer' : 'card-footer card-footer-disabled'} 
        >
          <div>
            <BiImageAdd size="2em" />
          </div>
          <input
            type="file"
             className='img-uploader' 
            onInput={(e) => handleUploadImage(e.target.files)}
            disabled={json.images.length < 3 ? false : true}
            multiple
            accept="image/png, image/jpeg"
          />
          Agregar imágenes de la mascota
        </label>
      </div>
      <progress
        value={progress}
        max="100"
         className= {progressVisible ? 'progress-bar-active' : 'progress-bar-inactive'} 
      />
    </div>
  );
}

export default ImageUploader;
