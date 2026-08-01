import { motion, AnimatePresence } from "framer-motion";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";

import "./App.css";
import creatorVideo from "./assets/creator.mp4";

import ScrollToTop from "./components/ScrollToTop";

import Apply from "./pages/Apply.jsx";
import Profile from "./pages/Profile.jsx";
import Success from "./pages/Success.jsx";
import Admin from "./pages/Admin.jsx";



function Home(){


const navigate = useNavigate();


const [openLevel,setOpenLevel] = useState(null);



function toggleLevel(level){

setOpenLevel(
openLevel === level ? null : level
);

}




return(

<div>


{/* HERO */}


<section className="hero">


<motion.div

className="logo"

initial={{opacity:0}}

animate={{opacity:1}}

transition={{duration:.8}}

>


<span>
SQ
</span>


<small>
CREATORS
</small>


</motion.div>





<motion.div

className="content"

initial={{opacity:0,y:60}}

animate={{opacity:1,y:0}}

transition={{
duration:1,
ease:"easeOut"
}}

>


<h1>

Create.
<br/>

Grow.
<br/>

<span>
Earn.
</span>


</h1>



<p>

Turn your content into rewards with StreetQuotes.

</p>




<motion.button

whileHover={{scale:1.05}}

whileTap={{scale:.95}}

onClick={()=>navigate("/apply")}

>


Become an SQ Creator →

</motion.button>



</motion.div>



</section>





{/* CREATOR VIDEO */}



<section className="creator-section">


<motion.h2>

Your content.
<br/>

Your rewards.

</motion.h2>




<div className="video-box">


<motion.div

className="video-wrapper"

initial={{
opacity:0,
scale:.9
}}

whileInView={{
opacity:1,
scale:1
}}

transition={{
duration:.8
}}

>


<video
  src="/creator.mp4"
  autoPlay
  loop
  muted
  playsInline
/>

</motion.div>










<motion.div

className="reward-popup"

initial={{
opacity:0,
x:40
}}

whileInView={{
opacity:[0,1,1,0],
x:[40,0,0,20]
}}

transition={{
duration:4,
delay:1
}}

viewport={{
once:true
}}

>


<div className="reward-icon">

💸

</div>



<div>

<strong>
+€40
</strong>


<span>
Creator reward received
</span>


</div>


</motion.div>




</div>


</section>
{/* HOW SQ WORKS */}


<section className="how-section">


<h2>
How SQ works.
</h2>



<div className="steps-grid">



<div className="step-card">


<div className="step-icon">
🎥
</div>


<span>
01
</span>


<h3>
Create
</h3>


<p>
Post your content and join SQ campaigns.
</p>


</div>





<div className="step-line">
➜
</div>





<div className="step-card">


<div className="step-icon">
✨
</div>


<span>
02
</span>


<h3>
Engage
</h3>


<p>
Build your audience and create impact.
</p>


</div>





<div className="step-line down">
➜
</div>





<div className="step-card earn-card">


<div className="step-icon">
💸
</div>


<span>
03
</span>


<h3>
Earn
</h3>


<p>
Unlock rewards based on your performance.
</p>


</div>



</div>



</section>








{/* CREATOR LEVELS */}



<section className="levels-section">


<h2>
Progress as a creator.
</h2>





<div className="levels-grid">







{/* CREATOR */}



<div className="level-card">


<span>
01
</span>


<h3>
Creator
</h3>


<p>
Start your journey and turn your content into rewards.
</p>



<ul>

<li>
✓ Create content
</li>

<li>
✓ Earn rewards
</li>

<li>
✓ Join campaigns
</li>

</ul>




<strong>
Start creating
</strong>





<button

className="level-more"

onClick={()=>toggleLevel("creator")}

>


{
openLevel==="creator"
?
"Hide ↑"
:
"Learn more ↓"
}


</button>






<AnimatePresence>


{
openLevel==="creator" && (


<motion.div

className="level-details"

initial={{
opacity:0,
height:0
}}

animate={{
opacity:1,
height:"auto"
}}

exit={{
opacity:0,
height:0
}}

>


<p>

Every creator starts here.
Create content for SQ campaigns,
earn rewards and build your reputation.

</p>



</motion.div>


)
}


</AnimatePresence>



</div>








{/* PARTNER */}




<div className="level-card partner">



<span>
02
</span>



<h3>
Partner
</h3>



<p>
Grow with brands and unlock bigger opportunities.
</p>



<ul>

<li>
✓ Bigger campaigns
</li>

<li>
✓ Higher rewards
</li>

<li>
✓ Priority access
</li>

</ul>




<strong>
Grow faster
</strong>





<button

className="level-more"

onClick={()=>toggleLevel("partner")}

>


{
openLevel==="partner"
?
"Hide ↑"
:
"Learn more ↓"
}


</button>






<AnimatePresence>


{
openLevel==="partner" && (


<motion.div

className="level-details"

initial={{
opacity:0,
height:0
}}

animate={{
opacity:1,
height:"auto"
}}

exit={{
opacity:0,
height:0
}}

>


<p>

Most creators reach this level.
Consistent performance unlocks
bigger campaigns, higher rewards
and more opportunities.

</p>


</motion.div>


)
}


</AnimatePresence>




</div>
{/* ELITE */}

<div className="level-card elite">


<span>
03
</span>



<h3>
Elite
</h3>



<p>
The ultimate level for top creators.
</p>



<ul>

<li>
✓ Exclusive campaigns
</li>

<li>
✓ Premium rewards
</li>

<li>
✓ VIP access
</li>

</ul>



<strong>
Top creators only
</strong>





<button

className="level-more"

onClick={()=>toggleLevel("elite")}

>


{
openLevel==="elite"
?
"Hide ↑"
:
"Learn more ↓"
}


</button>






<AnimatePresence>


{
openLevel==="elite" && (


<motion.div

className="level-details"

initial={{
opacity:0,
height:0
}}

animate={{
opacity:1,
height:"auto"
}}

exit={{
opacity:0,
height:0
}}

>


<p>

Elite represents the highest level
inside SQ. Top creators unlock
exclusive campaigns, premium rewards
and VIP opportunities.

</p>



</motion.div>


)
}


</AnimatePresence>




</div>






</div>


</section>





</div>

)

}








function App(){


return(

<>

<ScrollToTop />


<Routes>



<Route

path="/admin"

element={<Admin />}

/>



<Route

path="/"

element={<Home />}

/>



<Route

path="/apply"

element={<Apply />}

/>



<Route

path="/profile"

element={<Profile />}

/>



<Route

path="/success"

element={<Success />}

/>



</Routes>


</>

)

}



export default App;