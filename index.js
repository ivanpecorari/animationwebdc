var animations = ['startups','business3','investors','public','research',];
    var i, len = animations.length;
    for(i = 0; i < len; i += 1) {
        var anim;
        var elem = document.getElementById(animations[i])
        var animData = {
            container: elem,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            rendererSettings: {
                progressiveLoad:true,
                preserveAspectRatio:'xMidYMid meet'
            },
            path: animations[i]+'.json'
        };
        anim = lottie.loadAnimation(animData);
        anim.setSubframe(false);
    }
