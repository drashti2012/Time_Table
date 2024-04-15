import React from 'react';
import './TimeTable.css';

const Timetable = () => {
 
///highlight the text using id..........



//laravel highlight------------------------------------
const highlightlara=()=>{
  const lara =document.getElementById('1')
    if(lara)
    {
      lara.style.backgroundColor='yellow';
    }
    const lara1 =document.getElementById('11')
    if(lara1)
    {
      lara1.style.backgroundColor='yellow';
    }
    const lara2 =document.getElementById('111')
    if(lara2)
    {
      lara2.style.backgroundColor='yellow';
    }
    const lara3 =document.getElementById('1111')
    if(lara3)
    {
      lara3.style.backgroundColor='yellow';
    }
    const lara4 =document.getElementById('11111')
    if(lara4)
    {
      lara4.style.backgroundColor='yellow';
    }
    const lara5 =document.getElementById('111111')
    if(lara5)
    {
      lara5.style.backgroundColor='yellow';
    }
    const lara6 =document.getElementById('1111111')
    if(lara6)
    {
      lara6.style.backgroundColor='yellow';
    }
  }
//------------------------------------------------





//highlight react----------------------------------
  const highlightreact=()=>{
    const ReactJS =document.getElementById('2')
    if(ReactJS)
    {
      ReactJS.style.backgroundColor='yellow';
    }
    const ReactJS1 =document.getElementById('22')
    if(ReactJS1)
    {
      ReactJS1.style.backgroundColor='yellow';
    }
    const ReactJS2 =document.getElementById('222')
    if(ReactJS2)
    {
      ReactJS2.style.backgroundColor='yellow';
    }
    const ReactJS3 =document.getElementById('2222')
    if(ReactJS3)
    {
      ReactJS3.style.backgroundColor='yellow';
    }
    const ReactJS4 =document.getElementById('22222')
    if(ReactJS4)
    {
      ReactJS4.style.backgroundColor='yellow';
    }
    const ReactJS5 =document.getElementById('222222')
    if(ReactJS5)
    {
      ReactJS5.style.backgroundColor='yellow';
    }
    const ReactJS6 =document.getElementById('2222222')
    if(ReactJS6)
    {
      ReactJS6.style.backgroundColor='yellow';
    }
  }
//--------------------------------------------------------






//highlight account------------------------------------------
  const highlightaccount=()=>{
    const Account =document.getElementById('3')
    if(Account)
    {
      Account.style.backgroundColor='yellow';
    }
    const Account1 =document.getElementById('33')
    if(Account1)
    {
      Account1.style.backgroundColor='yellow';
    }
    const Account2 =document.getElementById('333')
    if(Account2)
    {
      Account2.style.backgroundColor='yellow';
    }
    const Account3 =document.getElementById('3333')
    if(Account3)
    {
      Account3.style.backgroundColor='yellow';
    }
  }
//------------------------------------------------------------






//highlight java----------------------------------------------
  const highlightjava=()=>{
    const Java =document.getElementById('4')
    if(Java)
    {
      Java.style.backgroundColor='yellow';
    }
    const Java1 =document.getElementById('44')
    if(Java1)
    {
      Java1.style.backgroundColor='yellow';
    }
    const Java2 =document.getElementById('444')
    if(Java2)
    {
      Java2.style.backgroundColor='yellow';
    }
    const Java3 =document.getElementById('4444')
    if(Java3)
    {
      Java3.style.backgroundColor='yellow';
    }
    const Java4 =document.getElementById('44444')
    if(Java4)
    {
      Java4.style.backgroundColor='yellow';
    }
    const Java5 =document.getElementById('444444')
    if(Java5)
    {
      Java5.style.backgroundColor='yellow';
    }
  }
//----------------------------------------------------------------





//highlight python-------------------------------------------------
  const highlightpython=()=>{
    const Python =document.getElementById('5')
    if(Python)
    {
      Python.style.backgroundColor='yellow';
    }
    const Python1 =document.getElementById('55')
    if(Python1)
    {
      Python1.style.backgroundColor='yellow';
    }
    const Python2 =document.getElementById('555')
    if(Python2)
    {
      Python2.style.backgroundColor='yellow';
    }
    const Python3 =document.getElementById('5555')
    if(Python3)
    {
      Python3.style.backgroundColor='yellow';
    }
    const Python4 =document.getElementById('55555')
    if(Python4)
    {
      Python4.style.backgroundColor='yellow';
    }
    const Python5 =document.getElementById('555555')
    if(Python5)
    {
      Python5.style.backgroundColor='yellow';
    }
    const Python6 =document.getElementById('5555555')
    if(Python6)
    {
      Python6.style.backgroundColor='yellow';
    }
  }
//--------------------------------------------------------------




//highlight wesl ------------------------------------------------

  const highlightwesl=()=>{
    const wesl =document.getElementById('6')
    if(wesl)
    {
      wesl.style.backgroundColor='yellow';
    }
  }
//--------------------------------------------------------------





//highlight aptitude-------------------------------------------
  const highlightaptitude=()=>{
    const Aptitude =document.getElementById('7')
    if(Aptitude)
    {
      Aptitude.style.backgroundColor='yellow';
    }
    const Aptitude1 =document.getElementById('77')
    if(Aptitude1)
    {
      Aptitude1.style.backgroundColor='yellow';
    }
  }
//---------------------------------------------------------------






//highlight club-------------------------------------------------
  const highlightclub=()=>{
    const club =document.getElementById('8')
    if(club)
    {
      club.style.backgroundColor='yellow';
    }
    const club1 =document.getElementById('88')
    if(club1)
    {
      club1.style.backgroundColor='yellow';
    }
  }
//----------------------------------------------------------------- 
 
  
  return (
    <div className="timetable">
      <div className="header">
        <div className="time">Time</div>
        <div className="monday">Monday</div>
        <div className="tuesday">Tuesday</div>
        <div className="wednesday">Wednesday</div>
        <div className="thursday">Thursday</div>
        <div className="friday">Friday</div>
        <div className="saturday">Saturday</div>
      </div>
      <div className="row">
        <div className="time">7:30 - 8:25</div>
        <div className="monday" id='1'>Laravel</div>
        <div className="tuesday" id='2'>ReactJS</div>
        <div className="wednesday" id='3'>Account</div>
        <div className="thursday"id='22'>ReactJS</div>
        <div className="friday"id='4'>Java</div>
        <div className="saturday" id='33'>Account</div>
      </div>
      <div className="row">
        <div className="time">8:25 - 9:20</div>
        <div className="monday" id='222'>ReactJS</div>
        <div className="tuesday" id='2222'>ReactJS</div>
        <div className="wednesday" id='44'>Java</div>
        <div className="thursday"id='22222'>ReactJS</div>
        <div className="friday" id='5'>Python</div>
        <div className="saturday" id='333'>Account</div>
      </div>
      <div className="row">
        <div className="time">9:50 - 10:45</div>
        <div className="monday" id='55'>Python</div>
        <div className="tuesday"id='222222'>ReactJS</div>
        <div className="wednesday" id='555'>Python</div>
        <div className="thursday" id='3333'>Account</div>
        <div className="friday"id='2222222'>ReactJS</div>
        <div className="saturday" id='5555'>Python</div>
      </div>
      <div className="row">
        <div className="time">10:45 - 11:40</div>
        <div className="monday" id='55555'>Python</div>
        <div className="tuesday" id='11'>Laravel</div>
        <div className="wednesday" id='555555'>Python</div>
        <div className="thursday" id='5555555'>Python</div>
        <div className="friday" id='111'>Laravel</div>
        <div className="saturday" id='6'>WESL</div>
      </div>
      <div className="row">
        <div className="time">11:50 - 12:45</div>
        <div className="monday" id='444'>Java</div>
        <div className="tuesday" id='1111'>Laravel</div>
        <div className="wednesday" id='4444'>Java</div>
        <div className="thursday" id='7'>Aptitude</div>
        <div className="friday" id='11111'>Laravel</div>
        <div className="saturday" id='8'>Club-Activity</div>
      </div>
      <div className="row">
        <div className="time">12:45 - 1:40</div>
        <div className="monday" id='44444'>Java</div>
        <div className="tuesday" id='111111'>Laravel</div>
        <div className="wednesday" id='444444'>Java</div>
        <div className="thursday" id='77'>Aptitude</div>
        <div className="friday" id='1111111'>Laravel</div>
        <div className="saturday" id='88'>Club-Activity</div>
      </div>
      <div className="row">




{/* -------------------------------------------------------------------------------------------- */}
     {/* <input type="radio"  name="laravel" id='1' onClick={highlightlara} />Laravel

     <input type="radio"  name="react" id='2' onClick={highlightreact} />ReactJS
     <input type="radio"  name="account" id='3' onClick={highlightaccount} />Account
     <input type="radio"  name="java" id='4' onClick={highlightjava} />Java
     <input type="radio"  name="python" id='5' onClick={highlightpython} />Python
     <input type="radio"  name="wesl" id='6' onClick={highlightwesl} />WESL
     <input type="radio"  name="aptitude" id='7' onClick={highlightaptitude} />Aptitude
     <input type="radio"  name="club" id='8' onClick={highlightclub} />Club-Activity */}

     <input type="radio" name="category" id="1" onClick={highlightlara} />Laravel
<input type="radio" name="category" id="2" onClick={highlightreact} />ReactJS
<input type="radio" name="category" id="3" onClick={highlightaccount} />Account
<input type="radio" name="category" id="4" onClick={highlightjava} />Java
<input type="radio" name="category" id="5" onClick={highlightpython} />Python
<input type="radio" name="category" id="6" onClick={highlightwesl} />WESL
<input type="radio" name="category" id="7" onClick={highlightaptitude} />Aptitude
<input type="radio" name="category" id="8" onClick={highlightclub} />Club-Activity


      </div>
{/* -------------------------------------------------------------------------------------------- */}
    </div>
  );
};

export default Timetable;
