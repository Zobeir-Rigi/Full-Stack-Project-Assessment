import { useState } from "react";

const AddVid = () => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  return (
    <form onSubmit={submitVid}>
      <label>Title:</label>
      <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
      <label>Url:</label>
      <input type="text" value={url} onChange={(e)=>setUrl(e.target.value)}/>
      <button type="submit">Add Video</button>
    </form>
  );
};
const submitVid = (e)=>{
    e.preventDefault();
    // addVideo({ title, url });
    // setTitle("");
    // setUrl("");
}
export default AddVid ;
