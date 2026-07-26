import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import "./Profile.css";
import { supabase } from "../supabaseClient";


function Profile(){


const navigate = useNavigate();

const location = useLocation();


const creatorData = location.state;



const [content,setContent] = useState("");

const [otherContent,setOtherContent] = useState("");




async function submitApplication(){



if(!creatorData){

alert("Missing creator information");

return;

}
if(!creatorData){

    alert("Please restart your application");
    
    navigate("/apply");
    
    return;
    
    }



const { error } = await supabase

.from("creator_applications")

.insert({


tiktok: creatorData.tiktok,

instagram: creatorData.instagram,

other_platform: creatorData.other,

reach: creatorData.reach,

content_type: content,

description:

content==="Other"

?

otherContent

:

"Fashion"


});






if(error){


console.log(error.message);

alert(error.message);

return;


}





navigate("/success");



}







return(


<div className="profile-page">





<button

className="back"

onClick={()=>navigate("/apply")}

>

← Back

</button>







<div className="profile-logo">


<span>
SQ
</span>


<small>
CREATORS
</small>


</div>









<div className="profile-content">







<h1>

Almost there.

<br/>

<span>
Tell us your content.
</span>

</h1>








<p>

Help us understand what you create and what makes your content unique.

</p>









<h2>

What type of content do you create?

</h2>









<div className="content-grid">







<button


className={
content==="Fashion"

?

"content-card selected"

:

"content-card"

}


onClick={()=>setContent("Fashion")}


>


<div className="content-icon">

👕

</div>


<h3>
Fashion
</h3>


<span>
Style, outfits, trends
</span>


</button>









<button


className={
content==="Other"

?

"content-card selected"

:

"content-card"

}


onClick={()=>setContent("Other")}


>


<div className="content-icon">

✨

</div>


<h3>
Other
</h3>


<span>
Something unique
</span>


</button>









</div>









{
content==="Other" && (


<motion.div

className="other-box"

initial={{
opacity:0,
y:20
}}

animate={{
opacity:1,
y:0
}}

>


<textarea


placeholder="Tell us what type of content you create..."


value={otherContent}


onChange={(e)=>setOtherContent(e.target.value)}


/>


</motion.div>


)

}









<button


className="continue"


disabled={

!content ||

(content==="Other" && otherContent.trim()==="")

}


onClick={submitApplication}


>

Finish →

</button>








</div>






</div>


)


}



export default Profile;