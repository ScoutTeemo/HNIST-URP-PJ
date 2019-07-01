// ==UserScript==
// @name         URP-PJ-PAGE
// @namespace    https://github.com/ScoutTeemo/HNIST-URP-PJ
// @version      0.2
// @description  湖南理工学院教务处一键评教
// @author       ScoutTeemo
// @match        http://bkjw.hnist.cn/student/teachingEvaluation/teachingEvaluation/evaluationPage
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let comment="老师热情友好，上课质量很棒"

 setTimeout(()=>{
    $("#page-content-template > div > div > div.widget-content > form > div > table > tbody > tr:nth-child(3) > td > div:nth-child(1) > label > input").attr('checked','true');
    $("#page-content-template > div > div > div.widget-content > form > div > table > tbody > tr:nth-child(5) > td > div:nth-child(1) > label > input").attr('checked','true');
    $("#page-content-template > div > div > div.widget-content > form > div > table > tbody > tr:nth-child(7) > td > div:nth-child(1) > label > input").attr('checked','true');
    $("#page-content-template > div > div > div.widget-content > form > div > table > tbody > tr:nth-child(9) > td > div:nth-child(1) > label > input").attr('checked','true');
    $("#page-content-template > div > div > div.widget-content > form > div > table > tbody > tr:nth-child(11) > td > div:nth-child(1) > label > input").attr('checked','true');
    $("#page-content-template > div > div > div.widget-content > form > div > table > tbody > tr:nth-child(13) > td > div:nth-child(1) > label > input").attr('checked','true');
    $("#page-content-template > div > div > div.widget-content > form > div > table > tbody > tr:nth-child(15) > td > div:nth-child(1) > label > input").attr('checked','true');
    $("#page-content-template > div > div > div.widget-content > form > div > table > tbody > tr:nth-child(17) > td > div:nth-child(1) > label > input").attr('checked','true');
    $("#page-content-template > div > div > div.widget-content > form > div > table > tbody > tr:nth-child(19) > td > div:nth-child(1) > label > input").attr('checked','true');
    $("#page-content-template > div > div > div.widget-content > form > div > table > tbody > tr:nth-child(21) > td > div:nth-child(1) > label > input").attr('checked','true');
    $("#page-content-template > div > div > div.widget-content > form > div > table > tbody > tr:nth-child(23) > td > div:nth-child(1) > label > input").attr('checked','true');
    $("#page-content-template > div > div > div.widget-content > form > div > table > tbody > tr:nth-child(25) > td > div:nth-child(1) > label > input").attr('checked','true');
    $("#page-content-template > div > div > div.widget-content > form > div > table > tbody > tr:nth-child(27) > td > div:nth-child(1) > label > input").attr('checked','true');
    $("#page-content-template > div > div > div.widget-content > form > div > table > tbody > tr:nth-child(29) > td > div:nth-child(1) > label > input").attr('checked','true');
    $("#page-content-template > div > div > div.widget-content > form > div > table > tbody > tr:nth-child(31) > td > div:nth-child(1) > label > input").attr('checked','true');
    $("#page-content-template > div > div > div.widget-content > form > div > table > tbody > tr:nth-child(33) > td > div > textarea").val(comment);
 
},5000)

 setTimeout(()=>{
      var timeout = setInterval(function () {
          toEvaluation();
      },3000);
},120000)

})();