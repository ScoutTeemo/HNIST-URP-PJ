// ==UserScript==
// @name         URP-PJ-PAGE
// @namespace    http://hiram.wang/
// @version      0.1
// @description  四川大学教务处一键评教
// @author       Hiram
// @match        http://zhjw.scu.edu.cn/student/teachingEvaluation/teachingEvaluation/evaluationPage
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let zhuguan="老师热情友好，上课质量很棒"

 setTimeout(()=>{
 $("#page-content-template > div > div > div.widget-content > form > div > table > tbody > tr:nth-child(3) > td > div:nth-child(1) > label > input").attr('checked','true');
 $("#page-content-template > div > div > div.widget-content > form > div > table > tbody > tr:nth-child(5) > td > div:nth-child(1) > label > input").attr('checked','true');
 $("#page-content-template > div > div > div.widget-content > form > div > table > tbody > tr:nth-child(7) > td > div:nth-child(1) > label > input").attr('checked','true');
 $("#page-content-template > div > div > div.widget-content > form > div > table > tbody > tr:nth-child(9) > td > div:nth-child(1) > label > input").attr('checked','true');
 $("#page-content-template > div > div > div.widget-content > form > div > table > tbody > tr:nth-child(9) > td > div:nth-child(1) > label > input").attr('checked','true');
 $("#page-content-template > div > div > div.widget-content > form > div > table > tbody > tr:nth-child(11) > td > div:nth-child(1) > label > input").attr('checked','true');
 $("#page-content-template > div > div > div.widget-content > form > div > table > tbody > tr:nth-child(13) > td > div:nth-child(1) > label > input").attr('checked','true');
 if($("#page-content-template > div > div > div.widget-content > form > div > table > tbody > tr:nth-child(15) > td > div:nth-child(1) > label > input").attr('type')=="radio"
){
      $("#page-content-template > div > div > div.widget-content > form > div > table > tbody > tr:nth-child(15) > td > div:nth-child(1) > label > input").attr('checked','true');
      $("#page-content-template > div > div > div.widget-content > form > div > table > tbody > tr:nth-child(17) > td > div > textarea").val(zhuguan);
 }else{
 $("#page-content-template > div > div > div.widget-content > form > div > table > tbody > tr:nth-child(15) > td > div > textarea").val(zhuguan);
 }
},5000)

 setTimeout(()=>{
      var timeout = setInterval(function () {
          toEvaluation();
      },3000);
},120000)

})();