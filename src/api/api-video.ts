import { Video } from "../models/Video";
import { db } from "./database";



export const addVideo = async (video: Video)=> {
  try {
    await db.addData('videos', video);
  } catch (error) {
    console.error('Error adding video:', error);
    return {
      inSucess: false,
      message: 'Error adding video',  
    }
  } 
};


export const getVideo = async (_id:string| number) => {
  try {
   const video =  await db.getData("videos", _id);
    return {
      inSucess: true,
      result: video,
      message: 'Video retrieved successfully',
    }
  } catch (error) {
    console.error('Error retrieving video:', error);
    return {
      inSucess: false,
      message: 'Error retrieving video',  
    }
  }
    }

export const getAllVideo = async () => {
  try {
   const videos =  await db.getAllData("videos");
    return {
      inSucess: true,
      result: videos,
      message: 'Videos retrieved successfully',
    }
  } catch (error) {
    console.error('Error retrieving videos:', error);
    return {
      inSucess: false,
      message: 'Error retrieving videos',  
    }
  }
    }    


 export const deleteVideo = async (_id: number) => {
  try {
   const video =  await db.deleteData("videos", _id);
    return {
      inSucess: true,
      result: video,
      message: 'Video deleted successfully',
    }
  } catch (error) {
    console.error('Error deleting video:', error);
    return {
      inSucess: false,
      message: 'Error deleting video',  
    }
  }
    }   