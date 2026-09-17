/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 04/03/2024 16:53:35
*/
import React, { FC, useEffect, useState } from 'react';
import './Container.css';
import VideoFormModal from '../VideoFormModal/VideoFormModal';


interface ContainerProps {

}


const Container: FC<ContainerProps> = () => {

  const [displayModal, setDisplayModal] = useState<boolean>(true)
  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {

    }
    runLocalData()
  })

  return (
    <div className="container py-2">
      <button className="btn btn-primary" onClick={()=>setDisplayModal(true)}>
        Add Vidéo
      </button>
      {displayModal && 
      <VideoFormModal
      hideModal={()=>setDisplayModal(false)}
      />}

      <div className="video-list py-1">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Poster</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Formation React Js</td>
              <td>
                <img width={80} src="assets/images/5569190_7d1c.jpg" alt="Formation React Js" />
              </td>
              <td>
                <button className="btn btn-success m-1">View</button>
                <button className="btn btn-primary m-1">Edit</button>
                <button className="btn btn-danger m-1">Delete</button>
              </td>
            </tr>
           
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Container;