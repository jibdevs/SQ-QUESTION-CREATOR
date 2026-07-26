import { motion } from "framer-motion";
import "./Creator.css";


function Creator(){

return(

<div className="creator-page">


<motion.div

className="creator-logo"

initial={{opacity:0,y:-20}}

animate={{opacity:1,y:0}}

transition={{duration:.8}}

>

<span>SQ</span>

<small>
CREATORS
</small>

</motion.div>





<motion.section

className="creator-form"

initial={{opacity:0,y:40}}

animate={{opacity:1,y:0}}

transition={{duration:1}}

>


<h1>

Become an SQ
<br/>

<span>Creator.</span>

</h1>


<p>

Join the next generation of creators
turning content into rewards.

</p>






<div className="form-card">


<h2>
Your platforms
</h2>



<div className="input-group">

<label>
TikTok
</label>

<div className="input-box">

@
<input
placeholder="username"
/>

</div>

</div>





<div className="input-group">

<label>
Instagram
</label>

<div className="input-box">

@
<input
placeholder="username"
/>

</div>

</div>





<div className="input-group">

<label>
YouTube / Other
</label>

<div className="input-box">

<input
placeholder="optional"
/>

</div>

</div>







<h2>
Your content
</h2>




<div className="choices">


<button>
🎬 Lifestyle
</button>


<button>
👟 Fashion
</button>


<button>
🎮 Gaming
</button>


<button>
💪 Fitness
</button>


<button>
🍔 Food
</button>


<button>
✨ Other
</button>



</div>






<h2>
Your audience
</h2>




<div className="audience">


<button>
1K - 10K
</button>


<button>
10K - 50K
</button>


<button>
50K - 100K
</button>


<button>
100K+
</button>


</div>







<motion.button

className="join-button"

whileHover={{
scale:1.05
}}

whileTap={{
scale:.95
}}

>

Become an SQ Creator →

</motion.button>



</div>



</motion.section>



</div>

)

}


export default Creator;