import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./Success.css";


function Success(){


const navigate = useNavigate();



return(


<div className="success-page">





<div className="success-logo">

<span>
SQ
</span>

<small>
CREATORS
</small>

</div>









<motion.div

className="success-content"

initial={{
opacity:0,
y:40
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:.8
}}

>



<div className="success-icon">

✓

</div>






<h1>

Welcome to

<br/>

<span>
SQ Creators.
</span>

</h1>






<p>

Your creator profile has been received.
<br/>

We'll review your content and contact you soon.

</p>







<div className="next-card">


<h3>
What happens next?
</h3>


<div>

<span>
01
</span>

We review your creator profile.

</div>


<div>

<span>
02
</span>

We check your content and audience.

</div>



<div>

<span>
03
</span>

You get access to SQ opportunities.

</div>


</div>








<button

onClick={()=>navigate("/")}

>

Back to home →

</button>






</motion.div>







</div>


)

}


export default Success;