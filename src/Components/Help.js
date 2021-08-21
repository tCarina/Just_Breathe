import img from "../Media/Breathe.gif";
import { Link } from 'react-router-dom'

export default function Help() {
  return (
    <div>
      <p>Use this animation to slow and steady your breathing. <br /> With each breath, repeat the following. <br /> "I am safe."<br />"I am okay." <br />"I am in control." <br /> "Everything is okay."</p>
      <img
        src={img}
        className='gif'
        alt="a relaxing animation of a balloon carrying a ball up to the top of a slide and then dropping it so it slides down and the balloon catches it again"
      />

      <br />
      <br />
      When you are ready, you can return to our <Link to='/home'>main page</Link>.
    </div>
  );
}
