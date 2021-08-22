import { Link } from "react-router-dom";
import '../Styles/question.css'

export default function Question() {
  return (
    <div className='questionContainer'>
      <h1 className='question'>Are you having a Panic Attack right now?</h1>
      <div className='links'>
        <Link to="/help" className='qLink'>Yes</Link>
        <Link to="/home" className='qLink'>No</Link>
        </div>
    </div>
  );
}
