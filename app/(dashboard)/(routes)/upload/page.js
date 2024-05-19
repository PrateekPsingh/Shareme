'use client';
import React, { useState, useEffect } from 'react';
import UploadForm from './_components/UploadForm';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { app } from '../../../../firebaseConfig';
import CompleteCheck from './_components/CompleteCheck';
import { getFirestore } from 'firebase/firestore';

function Upload() {
  const storage = getStorage(app);
  const db = getFirestore(app);
  const [progress, setProgress] = useState(0);
  const [uploadCompleted, setUploadCompleted] = useState(false);
  const [downloadURL, setDownloadURL] = useState('');

  const uploadFile = (file) => {
    const metadata = {
      contentType: file.type,
    };

    const storageRef = ref(storage, 'Shareme/' + file?.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        setProgress(progress);

        if (progress === 100) {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL);
            setDownloadURL(downloadURL);
            setUploadCompleted(true);
          });
        }
      },
      (error) => {
        console.error('Upload failed', error);
      }
    );
  };

  return (
    <div className='p-5 px-8 md:px-28 text-center'>
      {!uploadCompleted ? (
        <div>
          <h2 className='text-[20px] text-center m-5'>
            Start <strong className='text-primary'>Uploading</strong> File and <strong className='text-primary'>Share</strong> it
          </h2>
          <UploadForm uploadBtnClick={(file) => uploadFile(file)} progress={progress} />
        </div>
      ) : (
        <div className='mt-5 p-4 border border-blue-300 bg-grey-50 rounded'>
          <h2 className='text-[18px] font-bold text-green-700'>Upload Successful!</h2>
          <p className='mt-2 text-primary-600'>
            Your file has been uploaded successfully. You can download it using the link below:
          </p>
          <a
            href={downloadURL}
            target='_blank'
            rel='noopener noreferrer'
            className='block mt-2 text-blue-600 underline'
          >
            {downloadURL}
          </a>
          <p className='mt-2 text-gray-700'>Copy the link to share the file.</p>
        </div>
      )}
    </div>
  );
}

export default Upload;
