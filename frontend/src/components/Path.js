import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaBook} from 'react-icons/fa'; // Import the icons you want to use
import { GiYarn } from "react-icons/gi";


// Change the function names and links
// to fit your portfolio topic.

function Yarn() {
  return (
    <nav class="global">
        {/* Add links to Home, Topics, Gallery, Contact, and Staff Pages  */}
        <Link to="/"><FaHome />Home</Link>
        <Link to="../topics"><FaBook /> Topics</Link>
        <Link to="../crochet"><GiYarn /> Crochet</Link>

    </nav>
  );
}

export default Yarn;
