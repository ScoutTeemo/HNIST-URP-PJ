// ==UserScript==
// @name         URP-PJ-INDEX
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://zhjw.scu.edu.cn/student/teachingEvaluation/evaluation/index
// @grant        none
// ==/UserScript==

function getCookie(cname)
{
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++)
  {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
  return "no";
}

function setCookie(c_name,value,expiredays)
{
var exdate=new Date()
exdate.setDate(exdate.getDate()+expiredays)
document.cookie=c_name+ "=" +escape(value)+
((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
}

(function() {
    'use strict';
    //let Index = parseInt(getCookie("index"));
    //setCookie("index",Index+1,365);
    let i=1;
    let run="";

    setTimeout(()=>{
        while(1==1){
            //Index = parseInt(getCookie("index"));
            //console.log(Index);
            //run=$("#jxpgtbody > tr:nth-child("+Index+") > td:nth-child(1) > button").attr("onclick");
            run=$("#jxpgtbody > tr:nth-child("+i+") > td:nth-child(1) > button").attr("onclick");
            console.log(run)
            if(run.charAt(10)=="R"){
                //setCookie("index",Index+i,365);
                i=i+1;
            }else{
                run=run.replace("return false;", "")
                console.log(run)
                eval(run);
                break;
            }
        }
   },3000)
})();