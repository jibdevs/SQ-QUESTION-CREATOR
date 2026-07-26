import "./Admin.css";


function Admin(){


const applications = JSON.parse(
localStorage.getItem("applications")
) || [];



return(


<div className="admin-page">


<h1>
SQ Creator Applications
</h1>



<div className="table-box">


<table>


<thead>

<tr>

<th>
TikTok
</th>

<th>
Instagram
</th>

<th>
Reach
</th>

<th>
Content
</th>

<th>
Other
</th>


</tr>

</thead>





<tbody>


{
applications.map((app,index)=>(


<tr key={index}>


<td>
@{app.tiktok}
</td>


<td>
@{app.instagram}
</td>


<td>
{app.reach}
</td>


<td>
{app.content}
</td>


<td>
{app.other || "-"}
</td>


</tr>


))

}



</tbody>


</table>


</div>



</div>


)

}


export default Admin;