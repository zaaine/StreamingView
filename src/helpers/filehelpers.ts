export const convertFileToLink = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {

    const reader = new FileReader();
    reader.onload = (evt) => resolve(evt.target?.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};


export const convertFileToBlob = (file: File): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (evt) => {
      if (evt.target?.result instanceof ArrayBuffer) {
        const blob = new Blob([evt.target.result], { type: file.type });
        resolve(blob);
      } else {
        reject(new Error('Failed to convert file to Blob'));
      }
    };

    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
};