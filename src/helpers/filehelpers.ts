export const convertFileToLink = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    
    const reader = new FileReader();
    reader.onload = (evt) => resolve(evt.target?.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

