function loco(){
    gsap.registerPlugin(ScrollTrigger);
  
  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
  
    }
    loco()
  
  // Gsap Animation Here !!
  
  var tl=gsap.timeline({
    scrollTrigger:{
        trigger:'#page1',
        scroller:'#main',
        start:'top 40%',
        end:'top top',
        // markers:true,
    }
  })
  
  tl.to('#overlay>svg',{
    y:110,
    opacity:1,
    duration:'.5',
    // scale:1,
    
  })
  
  
  
  tl.from('#overlay>img',{
    width:'50vw',
    height:'50vh',
    duration:'0.5',
    delay:'1',
    borderRadius:'1.2vw'
    
  })
  
  tl.from('nav',{
   y:-100,
   stagger:.1
    
  })
  
  var page2tl = gsap.timeline({
    scrollTrigger:{
        trigger:'#page2',
        scroller:'#main',
        start:'top 100%',
        end:' 0% top',
        // markers:true,
        scrub:.15
  
    },
    stagger:.5
  })
  
  
  page2tl.to('#overlay>svg',{
    y:-100,
    duration:.5,
    scale:.5,
  },'anime')
  
  
  page2tl.to('nav', {
    y: -300,
  }, 'anime')
  
  //Page 2 Selecting Anime
  
  function text(){
    let clutter = ''
    document.querySelector('#page2-text').textContent.split('').forEach(function(item){
        clutter += `<span>${item}</span>`
    })
    document.querySelector('#page2-text>h1').innerHTML = clutter
  }
  
  text()
  
  gsap.to('#page2-text>h1 span',{
    scrollTrigger:{
        trigger:'#page2-text>h1 span',
        scroller:'#main',
        start:'top 50%',
        end:'100% 0%',
        scrub:4,
    
    },
    stagger:.1,
    color:'#E3E3C4'
  })
  
  
  //Page 3 Selecting Anime
  
  function txt(){
    let clutter = ''
    document.querySelector('#page3>h1').textContent.split('').forEach(function(item){
        clutter += `<span> ${item} </span>`
    })
    document.querySelector('#page3>h1').innerHTML = clutter
  }
  
  txt()
  
  gsap.to('#page3>h1 span',{
    scrollTrigger:{
        trigger:'#page3>h1>span',
        scroller:'#main',
        start:'top 50%',
        end:'100% 0%',
        scrub:2,
    
    },
    stagger:.1,
    color:'#434B34'
  })
  
  
  // page 2 svg
  
  let tl3 = gsap.timeline({
    scrollTrigger:{
      trigger:'#page2',
      scroller:'#main',
      start:'top 50%',
      end:'100% -60%',
      // markers:true,
      scrub:.15
    }
  })
  tl3.to('#b-svg-1',{
    Transform: `translateX(-50%)`,
    duration:1
  })
  