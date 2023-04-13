import React, { useEffect } from 'react';
import $ from 'jquery';
import 'jquery-circle-progress';
import '../planes.css'

function Planes() {
  useEffect(() => {
    $('.first.circle').circleProgress({
      value: 0.35,
      animation: false,
      fill: {gradient: ['#ff1e41', '#ff5f43']}
    });
    $('.second.circle').circleProgress({
      value: 0.6,
    }).on('circle-animation-progress', function(event, progress) {
      $(this).find('strong').html(Math.round(100 * progress) + '<i>%</i>');
      
    });
    $('.third.circle').circleProgress({
      value: 0.75,
      fill: {gradient: [['#0681c4', .5], ['#4ac5f8', .5]], gradientAngle: Math.PI / 4}
    }).on('circle-animation-progress', function(event, progress, stepValue) {
      $(this).find('strong').text(stepValue.toFixed(2).substr(1));
    });
    var c4 = $('.forth.circle');

    c4.circleProgress({
      startAngle: -Math.PI / 4 * 3,
      value: 0.5,
      lineCap: 'round',
      fill: {color: '#ffa500'}
    });

    setTimeout(function() { c4.circleProgress('value', 0.7); }, 1000);
    setTimeout(function() { c4.circleProgress('value', 1.0); }, 1100);
    setTimeout(function() { c4.circleProgress('value', 0.5); }, 2100);

    $('.fifth.circle').circleProgress({
      value: 0.9

    });
  }, []);

  return (
   <>
    <div className='planesContainer'>
        <div className="second circle">
          <strong></strong>
          <span>150 <br/> MB</span>
        </div>
        
        <div className="third circle">
          <strong></strong>
          <span>200 <br/> MB</span>
        </div>
        
        <div className="forth circle">
          <span>250 <br/> MB</span>
        </div>
    </div>
   </>
  );
}

export default Planes;
