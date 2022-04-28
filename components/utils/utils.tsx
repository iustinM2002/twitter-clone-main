// function to generate random numbers :)
export const randomCommentShareNumber = () => {
    return Math.floor(Math.random() * 10000);
}
export const randomLikeNumber = () =>{
    return (Math.random() * 100).toFixed(1);
}
export const randomIntervalNumber = (min:number,max:number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




// function for setting up image preview 
export function handleOnChange(changeEvent:any,order:string,setImageSrc:any=null,setImageSrc2:any=undefined) {
    const reader = new FileReader();
    reader.onload = function(onLoadEvent:any) {
      if(order === 'first')
      setImageSrc(onLoadEvent.target.result);
      if(order === 'second')
      setImageSrc2(onLoadEvent.target.result);
    }
    reader.readAsDataURL(changeEvent.target.files[0]);
  }




//   function for setting profile and background image with help of the api
export async function handleOnSubmit(event:any,order:string,setCurrentProfilePic:any=null,setCurrentBackgroundPic:any=null,setImageSrc:any=null) {
    event.preventDefault();
    if(order === 'order1' || order === 'order3'){
        const form:any = event.currentTarget;
        const fileInput:any = Array.from(form.elements).find((elemen:any) => elemen.name === 'file')
        const formData = new FormData();
        for(const file of fileInput.files){
            formData.append('file', file)
        }
        formData.append('upload_preset', 'my-uploads')
        const data = await fetch('https://api.cloudinary.com/v1_1/zziustin145/image/upload',{
            method:'POST',
            body: formData
        }).then(r => r.json());
        if(order==='order1'){
            setCurrentProfilePic(data.secure_url)
            sessionStorage.setItem('profilePic',data.secure_url)
        }else{
            setImageSrc(data.secure_url);
        }
    }
    if(order === 'order2'){
        const form:any = event.currentTarget;
        const fileInput:any = Array.from(form.elements).find((elemen:any) => elemen.name === 'file2')
        const formData = new FormData();
        for(const file of fileInput.files){
        formData.append('file', file)
        }

        formData.append('upload_preset', 'my-uploads')
        const data = await fetch('https://api.cloudinary.com/v1_1/zziustin145/image/upload',{
            method:'POST',
            body: formData
        }).then(r => r.json());
        setCurrentBackgroundPic(data.secure_url)
        sessionStorage.setItem('profilePic2',data.secure_url)
    }
  }