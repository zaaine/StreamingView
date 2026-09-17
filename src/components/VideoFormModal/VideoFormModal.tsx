/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 04/03/2024 17:17:14
*/
import React, { FC, useEffect } from 'react';
import './VideoFormModal.css';
import { Button, Modal } from 'react-bootstrap';


interface VideoFormModalProps {
  hideModal: ()=>void
}


const VideoFormModal: FC<VideoFormModalProps> = ({hideModal}) => {



  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {

    }
    runLocalData()
  })

  return (
    <div className="VideoFormModal" >
      <Modal show={true} size='lg'>
        <Modal.Header>
          <Modal.Title>
            Video Form
          </Modal.Title>
          <button onClick={hideModal} className='btn-close'></button>

        </Modal.Header>
        <Modal.Body>
          <form action="">
              <div className="form-group">
                <label htmlFor="title">Title : </label>
                <input type="text" name="title" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description : </label>
                <textarea name="description" id="description" className="form-control" ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="description">Image (poster) :</label>
                <input type="file" name="poster" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="description">Video :</label>
                <input type="file" name="video" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="categories">Categories :</label>
                <select name="categories" id="categories" className="form-control" >
                  <option value="">Select video categories</option>
                  <option value="Politique">Politique</option>
                  <option value="Education">Education</option>
                  <option value="Culture">Culture</option>
                  <option value="Formation">Formation</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="description">Is Available :</label>
                <input type="checkbox" name="isAvailable"  />
              </div>

          </form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant='primary' onClick={hideModal}>Cancel</Button>
        <Button variant='success'>Save Video</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default VideoFormModal;