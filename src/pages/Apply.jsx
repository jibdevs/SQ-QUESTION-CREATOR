import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import "./Apply.css";


function Apply(){


const navigate = useNavigate();

const location = useLocation();

const creatorData = location.state;
const [tiktok,setTiktok] = useState("");
const [instagram,setInstagram] = useState("");
const [other,setOther] = useState("");

const [reach,setReach] = useState("");



const canContinue =
tiktok.trim() !== "" &&
instagram.trim() !== "" &&
reach !== "";




return(


<div className="apply-page">





<button

className="back"

onClick={()=>navigate("/")}

>

← Back

</button>








<div className="apply-logo-page">

<span>
SQ
</span>

<small>
CREATORS
</small>

</div>









<div className="apply-content">






<h1>

Become an
<br/>

<span>
SQ Creator.
</span>

</h1>








<p>

Tell us where you create content and unlock your creator journey.

</p>








<div className="inputs">







<div className="username-input">


<span>
@
</span>


<input

value={tiktok}

onChange={(e)=>
setTiktok(
e.target.value.replace("@","")
)
}

placeholder="TikTok username"

/>


</div>









<div className="username-input">


<span>
@
</span>


<input

value={instagram}

onChange={(e)=>
setInstagram(
e.target.value.replace("@","")
)
}

placeholder="Instagram username"

/>


</div>









<input

value={other}

onChange={(e)=>setOther(e.target.value)}

placeholder="YouTube / Other platform (optional)"

/>








</div>









<h2>
Your current reach
</h2>









<div className="levels-choice">







<button

className={
reach==="Building"
?
"selected"
:
""
}

onClick={()=>setReach("Building")}

>


<strong>
🌱 Building
</strong>


<small>

<u>
Still growing your audience
</u>

<br/>

Usually under 10K views per video

</small>


</button>









<button

className={
reach==="Growing"
?
"selected"
:
""
}

onClick={()=>setReach("Growing")}

>


<strong>
🚀 Growing
</strong>


<small>

<u>
Some videos break through
</u>

<br/>

Around 10K - 100K views regularly

</small>


</button>









<button

className={
reach==="Viral Creator"
?
"selected"
:
""
}

onClick={()=>setReach("Viral Creator")}

>


<strong>
🔥 Viral Creator
</strong>


<small>

<u>
Multiple viral videos per month
</u>

<br/>

100K+ views regularly

</small>


</button>









</div>









<button


className="continue"


disabled={!canContinue}



onClick={()=>{


navigate("/profile",{

state:{

tiktok,
instagram,
other,
reach

}

});


}}


>

Continue →

</button>









</div>






</div>


)

}


export default Apply;