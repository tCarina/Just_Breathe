import img from "../Media/Breathe.gif";
import { Link } from 'react-router-dom'
import '../Styles/help.css'

export default function Help() {
  return (
    <div className='helpContainer'>
      <h1 className='p1'> Use this animation to slow and steady your breathing. <br /> With each breath, slowly repeat the following. <br /> "I am safe, I am going to be okay."<br /> "Everything is going to be fine."</h1>
      <div className='gifContainer'>
      <img
        src={img}
        className='gif'
        alt="a relaxing animation of a balloon carrying a ball up to the top of a slide and then dropping it so it slides down and the balloon catches it again"
      />
      </div>

      <br />
      <br />
     <p> When you are ready, you can go to our <Link to='/home' className='link'>main page</Link>. </p>
    </div>
  );
}
