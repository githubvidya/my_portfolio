// {{{{{{{{{{{{{{{{{{{{{{{{{{{___this is the home content___}}}}}}}}}}}}}}}}}}}}}}}}}}}
var tl = gsap.timeline();
tl
.from(".home-content",{
opacity:0,
y:20,
duration:0.4,
})
.from(".h1",{
    opacity:0,
    scale:-0.5,
    })
.from(" .black_display",{
    duration:1,
    top:0,
})
.from(" .black_display2",{
    left:0,
})

// {{{{{{{{{{{{{{{{{{{{{{{{{{{___this is the slide content___}}}}}}}}}}}}}}}}}}}}}}}}}}}

var skl = gsap.timeline({scrollTrigger:{
    trigger:"navbar",
    // markers:true,
    start:"1% 1%",
    end:"100% 100%",
    scrub:2,
    pin:true
}});
skl
.to(".sl_border",{
 left:0,
})
// {{{{{{{{{{{{{{{{{{{{{{{{{{{___this is the skills content___}}}}}}}}}}}}}}}}}}}}}}}}}}}


var skl = gsap.timeline({scrollTrigger:{
    trigger:"side_pic",
    // markers:true,
    start:"13% 10%",
    end:"24% 10%",
    scrub:2,
    pin:true
}});
skl
.to(".skil_1",{
    opacity:1,
    duration:1,
},'b')
.to(".skil_2",{
    trigger:".ssk",
    opacity:1,
    duration:1,
},'b')
.to(".skil_3",{
    opacity:1,
    duration:1,
},'b')
.to(".skil_4",{
    opacity:1,
    duration:1,
},'b')
.to(".skil_5",{
    opacity:1,
    duration:1,
},'b')
.to(".skil_6",{
    opacity:1,
    duration:1,
},'b')





// {{{{{{{{{{{{{{{{{{{{{{{{{{{___this is the collage content___}}}}}}}}}}}}}}}}}}}}}}}}}}}

     var cll = gsap.timeline({scrollTrigger:{
            trigger:"#ssk2",
            // markers:true,
            start:"40%,60%",
            end:"51%,60%",
            scrub:2,
            pin:true
        }});
        cll
    .from(".main_page",{
        trigger:".main_page",
        markers:true,
        opacity:0,
        scale:-0.5,
        })


// {{{{{{{{{{{{{{{{{{{{{{{{{{{___this is the contect content___}}}}}}}}}}}}}}}}}}}}}}}}}}}

        var hr = gsap.timeline({scrollTrigger:{
            trigger:"#ssk2",
            // markers:true,
            start:"65% 40%",
            end:"78% 40%",
            scrub:2,
            pin:true
        }});
        hr

        .from(".hiring",{
            opacity:0,
            scale:-0.5,
            })
          

           // {{{{{{{{{{{{{{{{{{{{{{{{{{{___this is the thanks (footer) content___}}}}}}}}}}}}}}}}}}}}}}}}}}}


           var sld = gsap.timeline({scrollTrigger:{
            trigger:".main_sld",
            // markers:true,
            start:"50% 70%",
            end:"80% 80%",
            scrub:2,
            pin:true
        }});
        sld
        .to(".top",{
        top:"-60%",
        },'a')
        .to(".bottom",{
            bottom:"-60%",
            },'a')










