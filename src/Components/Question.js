import { Link } from "react-router-dom";
export default function Question() {
  return (
    <div>Are you having a Panic Attack right now?
        <Link to="/help">Yes</Link>
        <Link to="/home">No</Link>
    </div>
  );
}
