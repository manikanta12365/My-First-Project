

function getfile(file,callback){
    var xhr=new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState === 4 && xhr.status == "200"){
          callback(xhr.responseText);
        }
    };
    xhr.send();
}
getfile("data.json",function(text){
      let data=JSON.parse(text);
    console.log(data);
    basicinfo (data.basics);
    eduinfo (data.education);
    skills(data.skills);
});
var main=document.querySelector('.flex-parent');

function basicinfo(basics){
  var profile=document.getElementById("basics");
  var img=document.createElement("img");
img.src=basics.photo;
img.setAttribute("id","img");
  profile.appendChild(img);

  var name=document.createElement("p");
  name.innerHTML=basics.name;
  profile.appendChild(name);

  var p=document.createElement("p");
  p.innerHTML=basics.phone;
  profile.appendChild(p);

  var c=document.createElement("p");
c.innerHTML=basics.city;
  profile.appendChild(c);

  var s=document.createElement("p");
  s.innerHTML=basics.state;
  profile.appendChild(s);

  var email=document.createElement("p");
email.innerHTML=basics.email;
  profile.appendChild(email);
}



function eduinfo(education)
{

  var right=document.createElement("div");
  right.classList.add("content-child");
  //append
  main.appendChild(right);
  //education div
  var e1=document.createElement("div");
  e1.classList.add("edu");
  //appendChild
  right.appendChild(e1);
  var h1=document.createElement("p");
  h1.setAttribute("id","heading");
  h1.textContent="Eduation Details";
  h1.appendChild(document.createElement("HR"));

  //append
  e1.appendChild(h1);
      for(var i in education){
        //couse creation
        console.log(education[i].course);
          var h2=document.createElement("p");
          // h2.style.FontWeight="550";
          h2.classList.add("edu1");
          h2.textContent=education[i].course;
          //append
          h1.appendChild(h2);
          //college creation
          var h3=document.createElement("p");
          h3.classList.add("edu2");
          h3.textContent=education[i].college;
          //append
          h2.appendChild(h3);
          var h4=document.createElement("p");
          h4.classList.add("edu3");
          h4.textContent=education[i].school;
          h3.appendChild(h4);
          //for data getting

              var ul=document.createElement("ul");
              ul.classList.add("edu4");
              h4.appendChild(ul);
                var li=document.createElement("li");
                  li.textContent=education [i].data;
                  ul.appendChild(li);
                  // ul.appendChild(li);
              }

}
function skills(food)
{
  var table=document.createElement("table");
  var row="";
  for (var k = 0; k< food.length; k++) {
    row="<tr><td>strong"+food[k].name+"</td><td>"+food[k].info+"</td></tr>";
    }
    table.innerHTML=row;
    table.appendChild(right);
}
