/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 04/03/2024 17:17:14
*/
import React, { FC, useEffect, useState } from 'react';
import './VideoFormModal.css';
import { Button, Modal } from 'react-bootstrap';
import { Video } from '../../models/Video';
import { convertFileToBlob, convertFileToLink } from '../../helpers/filehelpers';
import { db } from '../../api/database';



interface VideoFormModalProps {
  hideModal: () => void
}


const VideoFormModal: FC<VideoFormModalProps> = ({ hideModal }) => {

  const [formData, setFormData] = useState<Video>({
    title: '',
    description: '',
    poster: null,
    link: null,
    category: '',
    isAvailable: true
  })

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [posterPreview, setPosterPreview] = useState<string | null>(null);
  const [videoPreview, setVideoPreview] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {

    }
    runLocalData()
  }, [])

  const handleInputChange = (event: any) => {
    const { name, value, type, files, checked } = event.target

    const newValue: any = { ...formData }
    if (type === "checkbox") {
      newValue[name] = checked
    } else if (type === "file") {
      newValue[name] = files[0]
      if (name === 'poster' && files[0]) {
        convertFileToLink(files[0]).then((link) => setPosterPreview(link))
      }
      if (name === 'link' && files[0]) {
        convertFileToLink(files[0]).then((link) => setVideoPreview(link))
      }
    } else {
      newValue[name] = value
    }

    setFormData(newValue)

  }

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {}

    if (!formData.title.trim()) {
      errors.title = 'Title is required';
    }

    if (!formData.description.trim()) {
      errors.description = 'Description is required';
    }
    if (!formData.poster) {
      errors.poster = 'Poster file is required';
    }
    if (!formData.link) {
      errors.link = 'Video file is required';
    }

    if (!formData.category) {
      errors.category = 'Please select a category';
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0

  }

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    if (!validateForm()) {
      return
    }

    const posterLink = await convertFileToLink(formData.poster as File)
    const videoLink = await convertFileToLink(formData.link as File)

    const newVideo = {
      id: Date.now(),
      title: formData.title,
      description: formData.description,
      poster: posterLink,
      link: videoLink,
      category: formData.category,
      isAvailable: formData.isAvailable,
      created_at: new Date().toISOString(),
    }
    //Sauvegarde dans le localStorage
    /* let existingVideos = JSON.parse(localStorage.getItem('videos') || '[]')
      existingVideos = await convertFileToBlob(newVideo.poster as File)
     existingVideos.push(newVideo)
     localStorage.setItem('videos', JSON.stringify(existingVideos))
     hideModal() 
    */
    try {
      await db.addData('videos', newVideo)
      hideModal()
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement de la vidéo', error)
    }
  }

  return (
    <div className="VideoFormModal" >
      <Modal show={true} scrollable>
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
              <input
                id="title"
                defaultValue={formData.title}
                type="text" name="title"
                className={`form-control ${formErrors.title ? 'is-invalid' : ''}`}
                onChange={handleInputChange}
              />
              {formErrors.title && <div className='invalid-feedback'>{formErrors.title}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="description">Description : </label>
              <textarea
                name="description"
                id="description"
                defaultValue={formData.description}
                className={`form-control ${formErrors.description ? 'is-invalid' : ''}`}
                onChange={handleInputChange}
              />
              {formErrors.description && <div className='invalid-feedback'>{formErrors.description}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="poster">Image (poster) :</label>
              <input
                id="poster"
                type="file"
                name="poster"
                className={`form-control ${formErrors.poster ? 'is-invalid' : ''}`}
                onChange={handleInputChange}
              />
              {posterPreview && (
                <div className='preview-image card'>
                  <img className='img-fluid' width={'100%'} src={posterPreview} alt="Aperçu du poster" />
                </div>
              )}
              {formErrors.poster && <div className='invalid-feedback'>{formErrors.poster}</div>}
            </div>

            <div className="form-group">
              <label htmlFor="link">Video :</label>
              <input
                id="link"
                type="file"
                name="link"
                className={`form-control ${formErrors.link ? 'is-invalid' : ''}`}
                onChange={handleInputChange}
              />
              {videoPreview && (
                <div className='video-preview'>
                  <video controls width={'100%'} src={videoPreview}> </video>
                </div>
              )}
              {formErrors.link && <div className='invalid-feedback'>{formErrors.link}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="category">Category :</label>
              <select defaultValue={formData.category}
                onChange={handleInputChange}
                name="category" id="category"
                className={`form-control ${formErrors.category ? 'is-invalid' : ''}`} >
                <option value="">Select video categories</option>
                <option value="Politique">Politique</option>
                <option value="Education">Education</option>
                <option value="Culture">Culture</option>
                <option value="Formation">Formation</option>
              </select>
              {formErrors.category && <div className='invalid-feedback'>{formErrors.category}</div>}
            </div>

            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                id="isAvailable"
                name="isAvailable"
                onChange={handleInputChange}
                defaultChecked={formData.isAvailable}
              />
              <label htmlFor="isAvailable">Is Available </label>
            </div>


          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button type="button" variant='primary' onClick={hideModal}>Cancel</Button>
          <Button type="button" variant='success' onClick={handleSubmit}>Save Video</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default VideoFormModal;