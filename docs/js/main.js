(function ($) {
	"use strict";

    var towerData= [
            ["Khaman Substation",18.428393,79.134944,"5.7&#9940","16.39&#9940","133&#9940","1.614","0.158","83.3&#9940"]
            ["Kaman Tower A",18.432270,79.134756,"3.368&#9940","11.47&#9940","31.25&#9940","1.6063","0.1522","NA"],
            ["Kaman Tower B",18.427721,79.134198,"7.368&#9940","8.2&#9989","125&#9940","1.6002","0.1536","5&#9940"],
            ["Kaman Tower C",18.427856,79.135518,"6.42&#9940","45.9&#9940","243.75&#9940","1.6262","0.1479","20&#9940"],
            ["Court Circle Substation",18.443744,79.124644,"1.649&#9989","6.01&#9940","145&#9940","1.6161","0.1521","74.8&#9940"],
            ["Court Circle A",18.443907,79.124767,"3.11&#9989","7.6&#9940","62.5&#9940","1.6163","0.1501","15&#9940"],
            ["Court Circle B",18.445393,79.125915,"5.21&#9940","13.11&#9940","125&#9940","1.6079","0.1519","4&#9940"],
            ["Court Circle C",18.443235,79.127492,"7.06&#9989","3.27&#9989","250&#9940","1.6115","0.1511","12&#9940"],
            ["Ramnagar Substation",18.438094,79.106308,"9.105&#9989","22.54&#9940","223.43&#9940","1.665","0.1585","52.3&#9940"],
            ["Ramnagar A",18.439508,79.107810,"33.95&#9989","40.98&#9940","56.25&#9940","1.605","0.1525","22&#9940"],
            ["Ramnagar B",18.439793,79.104012,"16.947&#9940","26.22&#9940","268.75&#9940","1.6001","0.1536","1&#9940"],
            ["Ramnagar C",18.438511,79.108529,"24.06&#9989","9.83&#9989","56.25&#9989","1.5867","0.1566","7&#9989"],
            ["Ramnagar D",18.438511,79.110513,"4.631&#9940","32.78&#9940","231.25&#9940","1.6103","0.1514","4&#9989"]
        ];
        var areaData=[
            ["Karimnagar Kaman",18.428094,79.135573],
            ["Karimnagar Circle",18.522211,79.052531],
            ["Karimnagar Ramnagar",18.438094,79.106308],
            ["Hyderabad JBS",17.447689,78.498509],
            ["Hyderabad JUBLEE HILLS",17.432216,78.410287], 
            ["Hyderabad Masab Tank",17.402069,78.453555],
            ["Warangal",17.954544,79.603841],
            ["Huzurabad",18.204223,79.396813]
        ];
    // common variable
    var windowWidth = $(window).width(),
        windowHeight = $(window).height(),
        headTag = $('head'),
        body = $('body'),
        mainNavbar = $('.onepage .header_area.navbar'),
        isMobile = windowWidth < 768;
    
    
    //Menu Line Height
    function MenuLineHeight() {
        var menuLineHeight = windowWidth * 0.05625;
        $('.navbar-nav > li > a, .logo_area > a').css('line-height', menuLineHeight + 'px');
        $('.home-7 .header_area').css('height', menuLineHeight + 'px');
    }
    
    MenuLineHeight();
    // mobile Menu area
    $('nav.mobile_menu').meanmenu({
        meanScreenWidth: '767'
    });
    $('nav.mean-nav li > a:first-child').on('click', function(){
        $('a.meanmenu-reveal').click();
    });
    
    $('.home-5 .header_paralux .dtable, .home-7 .header_paralux .dtable').css('height', 'calc(100vh - ' + windowWidth * 0.05625 + 'px)');
        
    // Owl Carousel for Main Slider
    var maintheme_slider = $('.mainSlider, .case_slider');
    maintheme_slider.owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    });

    $('.main_slider_nav .testi_next, .home-6 .main_slider_nav .testi_next').on('click', function () {
        maintheme_slider.trigger('next.owl.carousel');
    });
    $('.main_slider_nav .testi_prev, .home-6 .main_slider_nav .testi_prev').on('click', function () {
        maintheme_slider.trigger('prev.owl.carousel');
    });


    // Jquery counterUp
    $('.counter').counterUp({
        time: 3000
    });

    // jQuery Venobox
    $('a.veno').venobox({
        numeratio: true,
        infinigall: true
    });

    // team Content
    var team_slid2 = $('.team_cotent_slid');
    team_slid2.owlCarousel({
        loop: true,
        margin: 30,
        autoplay: false,
        dots: true,
        animateIn: 'fadeInDown',
        animateOut: 'fadeOutDown',
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    });

    // team image
    var team_slid = $('.team_slid');
    team_slid.owlCarousel({
        loop: true,
        margin: 30,
        dots: true,
        mouseDrag: true,
        touchDrag: false,
        animateIn: 'fadeInLeft',
        animateOut: 'fadeOutRight',
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    });
    $('.teamslide_nav .testi_next').on('click', function () {
        team_slid.trigger('next.owl.carousel');
    });
    $('.teamslide_nav .testi_prev').on('click', function () {
        team_slid.trigger('prev.owl.carousel');
    });

    team_slid.on('translate.owl.carousel', function (property) {
        $('.team_content .owl-dot:eq(' + property.page.index + ')').click();
    });
    team_slid2.on('translate.owl.carousel', function (property) {
        $('.team_member_photo .owl-dot:eq(' + property.page.index + ')').click();
    });
    
    // check features
    function checkFeatures() {
        var leftw = $('.ourFeaturesContent'),
            heightm = $('.checkBGFull').height();
        if (leftw.length) {
            leftw = leftw.offset().left;
            $('.checkfeature_contbg').css({
                'width': leftw + 'px',
                'height': heightm + 'px'
            });
        }
    }
    checkFeatures();
    
    
    //Google Map init
    var googleMapSelector = $('#contactgoogleMap');
    
    var myCenter=new google.maps.LatLng(18.4340954, 79.1269655);
    
    function initialize(){
        var mapProp = {
            center:myCenter,
            zoom:15,
            scrollwheel: false,
            mapTypeId:google.maps.MapTypeId.TERRIAN,
            styles: [
                {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "all",
                    "stylers": [
                        {
                            "saturation": -100
                        },
                        {
                            "lightness": 45
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#46bcec"
                        },
                        {
                            "visibility": "on"
                        }
                    ]
                }
            ]
            
        };
        var map=new google.maps.Map(document.getElementById("contactgoogleMap"),mapProp);
    /*    var marker=new google.maps.Marker({
            position:myCenter,
            animation:google.maps.Animation.BOUNCE,
            icon:'img/google-pin.png'
        });
        marker.setMap(map);
    */
    //custom points code
    //this points file json file should be loaded based on the inputs from the dropdown
    var find_submitBtn=document.getElementById('find_submitBtn');
    find_submitBtn.addEventListener('click',function(){
        var area=document.getElementById('area');
        var areaValue=area.value;
        for(var i=0;i<areaData.length;i++){
            if(areaValue==areaData[i][0])
            {
                console.log(areaData[i][0]);
                var myLatlng = {lat: areaData[i][1], lng: areaData[i][2]};
                map.setCenter(myLatlng);
            }
        }
    });
    var validte_submitBtn=document.getElementById('validte_submitBtn');
    validte_submitBtn.addEventListener('click',function(){
        var lat=document.getElementById("latValue");
        var latValue=lat.value;
        var lang=document.getElementById("langValue");
        var langValue=lang.value;
        console.log(latValue+langValue);
        localStorage.setItem("latValue",latValue);
        localStorage.setItem("langValue",langValue);
        window.location.href='./project.html';
    });
    
    var infowindow = new google.maps.InfoWindow();
      var marker, i;
      var locations = [
        ["Khaman Substation",18.428393,79.134944,"5.7&#9940","16.39&#9940","133&#9940","1.614","0.158","83.3&#9940"],
        ["Kaman Tower A",18.432270,79.134756,"3.368&#9940","11.47&#9940","31.25&#9940","1.6063","0.1522","NA"],
        ["Kaman Tower B",18.427721,79.134198,"7.368&#9940","8.2&#9989","125&#9940","1.6002","0.1536","5&#9940"],
        ["Kaman Tower C",18.427856,79.135518,"6.42&#9940","45.9&#9940","243.75&#9940","1.6262","0.1479","20&#9940"],
        ["Court Circle Substation",18.443744,79.124644,"1.649&#9989","6.01&#9940","145&#9940","1.6161","0.1521","74.8&#9940"],
        ["Court Circle A",18.443907,79.124767,"3.11&#9989","7.6&#9940","62.5&#9940","1.6163","0.1501","15&#9940"],
        ["Court Circle B",18.445393,79.125915,"5.21&#9940","13.11&#9940","125&#9940","1.6079","0.1519","4&#9940"],
        ["Court Circle C",18.443235,79.127492,"7.06&#9989","3.27&#9989","250&#9940","1.6115","0.1511","12&#9940"],
        ["Ramnagar Substation",18.438094,79.106308,"9.105&#9989","22.54&#9940","223.43&#9940","1.665","0.1585","52.3&#9940"],
        ["Ramnagar A",18.439508,79.107810,"33.95&#9989","40.98&#9940","56.25&#9940","1.605","0.1525","22&#9940"],
        ["Ramnagar B",18.439793,79.104012,"16.947&#9940","26.22&#9940","268.75&#9940","1.6001","0.1536","1&#9940"],
        ["Ramnagar C",18.438511,79.108529,"24.06&#9989","9.83&#9989","56.25&#9989","1.5867","0.1566","7&#9989"],
        ["Ramnagar D",18.438511,79.110513,"4.631&#9940","32.78&#9940","231.25&#9940","1.6103","0.1514","4&#9989"],
        ['Center Point',18.4340954, 79.1269655,,"33.95&#9989","40.98&#9940","56.25&#9940","1.605","0.1525","22&#9940"],
        ['Kaman A', 18.429803, 79.136131,"33.95&#9989","40.98&#9940","56.25&#9940","1.605","0.1525","22&#9940"],
        ['Kaman B',18.426495, 79.139715,,"33.95&#9989","40.98&#9940","56.25&#9940","1.605","0.1525","22&#9940"],
        ['Kaman C', 18.430658, 79.137698,,"33.95&#9989","40.98&#9940","56.25&#9940","1.605","0.1525","22&#9940"],
        ['RamNagar A', 18.442847, 79.106984,"33.95&#9989","40.98&#9940","56.25&#9940","1.605","0.1525","22&#9940"],
        ['RamNagar B', 18.4342847, 79.106344,"33.95&#9989","40.98&#9940","56.25&#9940","1.605","0.1525","22&#9940"],
        ['RamNagar C', 18.446647, 79.106944,"33.95&#9989","40.98&#9940","56.25&#9940","1.605","0.1525","22&#9940"],
        ['RamNagar D', 18.449947, 79.102384,"33.95&#9989","40.98&#9940","56.25&#9940","1.605","0.1525","22&#9940"],
        ['Court Circle A', 18.543547, 79.105484,"33.95&#9989","40.98&#9940","56.25&#9940","1.605","0.1525","22&#9940"],
        ['Court Circle B', 18.435847, 79.102384,"33.95&#9989","40.98&#9940","56.25&#9940","1.605","0.1525","22&#9940"],
        ['Court Circle C', 18.236847, 79.100984,"33.95&#9989","40.98&#9940","56.25&#9940","1.605","0.1525","22&#9940"],
        ];
      
        for (i = 0; i < locations.length; i++) {  
            marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map,
            animation:google.maps.Animation.BOUNCE,
            icon:'img/towerPin.png'
            });
    
            google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                var st="<p>"+locations[i][0]+"<br/>"
                            +"RF :"     +locations[i][3]+"<br/>"
                            +"EFS :"    +locations[i][4]+"<br/>"
                            +"MFS :"    +locations[i][5]+"<br/>"
                            +"T.VAL :"  +locations[i][6]+"<br/>"
                            +"P.VAL :"  +locations[i][7]+"<br/>"
                            +"PD :"     +locations[i][8]+"<br/>";
                infowindow.setContent(st);
                infowindow.open(map, marker);
            }
            })(marker, i));
        }
    }
    if(googleMapSelector.length){
        google.maps.event.addDomListener(window, 'load', initialize);
    }
        


    // client Slider
    var client_slider = $('.client_img');
    client_slider.owlCarousel({
        loop: true,
        margin: 0,
        autoplay: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    });
    $('.clientslide_nav .testi_next').on('click', function () {
        client_slider.trigger('next.owl.carousel');
    });
    $('.clientslide_nav .testi_prev').on('click', function () {
        client_slider.trigger('prev.owl.carousel');
    });

    // client Slider
    var clientTestiSlider = $('.clientTestiSlider');
    clientTestiSlider.owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            992: {
                items: 1
            }
        }
    });
    clientTestiSlider.on('translate.owl.carousel', function (property) {
        $('.client_img .owl-dot:eq(' + property.page.index + ')').click();
    });
    client_slider.on('translate.owl.carousel', function (property) {
        $('.clientTestiSlider .owl-dot:eq(' + property.page.index + ')').click();
    });
    var clientTestiSliderDot = clientTestiSlider.find('.owl-dot');
    clientTestiSliderDot.each(function () {
        var clientTestiIndex = clientTestiSliderDot.index(this);
        $(this).children('span').append(clientTestiIndex + 1);
    });
    

    // Blog Slider
    var blog_slider = $('.blog_slid');
    blog_slider.owlCarousel({
        loop: true,
        margin: 20,
        autoplay: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            992: {
                items: 2
            }
        }
    });
    
    function skillAndVideoBgRight() {
        var skillAndVideoWidth = $('.skill_and_video .container').width(),
            skillAndVideoHeight = $('.skill_and_video').height(),
            skillAndVideoRightWidth = (windowWidth - skillAndVideoWidth) / 2 - 15;
        $('.video_control').css('height', skillAndVideoHeight);
        $('<style>.col-sm-7.skillBg::after{width: calc(100% + ' + skillAndVideoRightWidth + 'px);}</style>').appendTo('head');
    }
    
    //pricing table
    var specialTable = $('.all_pricing_table .special');
    $('.single_pricing').on('mouseover', function () {
        specialTable.removeClass('active');
    }).on('mouseleave', function () {
        specialTable.addClass('active');
    });
    
        //mean menu logo 
    function meanMenuLogo() {
        isMobile ? $('.mean-bar').prepend('<a href="index.html"><img alt="logo" src="img/logo.svg"></a>') : null ;
    }
    
    // SKILLS JS
    function RXknob(RXknobClass) {
        RXknobClass = $(RXknobClass);
        RXknobClass.each(function () {
            var $this = $(this),
                knobVal = $this.attr('data-rel'),
                knobAnimate = function () {
                    $({
                        value: 0
                    }).animate({
                        value: knobVal
                    }, {
                        duration : 2000,
                        easing   : 'swing',
                        progress : function () {
                            $this.val(Math.ceil(this.value)).trigger('change');
                        }
                    });
                };

            $this.knob({
                'draw' : function () {
                    $(this.i).val(this.cv + '%').css('font-size', '13px').css('color', '#eeeeee').css('font-family', 'Open Sans').css('font-weight', '400');
                }
            });

            $this.waypoint(knobAnimate, { offset: '80' }).waypoint(knobAnimate, { offset: 'bottom-in-view' });

        });
    }
    
    function RXprogress(RXprogressClass) {
        RXprogressClass = $(RXprogressClass);
        RXprogressClass.each(function () {
            var $this = $(this),
                progressAnimate = function () {
                    $this.toggleClass('slideInLeft');
                };
            $this.waypoint(progressAnimate, { offset: '80'}).waypoint(progressAnimate, { offset: 'bottom-in-view'});

        });
    }
    
    /*
    * Replace all SVG images with inline SVG
    */
    $('img.svg').each(function(){
        var $img = $(this),
            imgID = $img.attr('id'),
            imgClass = $img.attr('class'),
            imgURL = $img.attr('src');

        $.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = $(data).find('svg');

            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass);
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Replace image with new SVG
            $img.replaceWith($svg);
        }, 'xml');

    });

   
    //window load event
    $(window).load(function () {
        // Preloader-js
        $('.preloader-area').fadeOut('1000');
        
        /*Portfolio layout*/
        $('.all_work_item').isotope({
            //layoutMode: 'packery',
            itemSelector: '.mix',
            percentPosition: true
        });
        /*Portfolio filtering*/
        var triggerLi = $('.trigger li');
        triggerLi.on('click', function () {
            triggerLi.removeClass('active');
            $(this).addClass('active');
            var filterValue = $(this).attr('data-filter');
            $('.all_work_item').isotope({
                filter: filterValue
            });
        });
        
        $('.portfolio_items').isotope({
            layoutMode: 'packery',
            itemSelector: '.grid_item'
        });   
        
        //mean menu logo
        meanMenuLogo();
        
        // partner Slider
        var partner_slid = $('.partner_slider');
        partner_slid.owlCarousel({
            loop: true,
            margin: 0,
            autoplay: true,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                992: {
                    items: 5
                }
            }
        });
    
        // Process Slider
        var processIconSlider = $('.tab_trigger_icon');
        processIconSlider.owlCarousel({
            loop: true,
            margin: 0,
            autoplay: true,
            mouseDrag: false,
            touchDrag: false,
            dots: true,
            center: true,
            responsive: {
                0: {
                    items: 5
                },
                600: {
                    items: 5
                },
                992: {
                    items: 5
                }
            }
        });
        var processIconUpDown = function processIconUpDown() {
            $('.owl-item').removeClass('neXt prEv');
            $('.owl-item.active.center').prev().addClass('prEv');
            $('.owl-item.active.center').next().addClass('neXt');
        };
        processIconUpDown();
        processIconSlider.on('translated.owl.carousel', processIconUpDown);

        // Process Slider
        var ProContentSlider = $('.pro_content'),
            singleTabIcon = $('.singleTabIcon i');
        ProContentSlider.owlCarousel({
            loop: true,
            margin: 0,
            autoplay: false,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                992: {
                    items: 1
                }
            }
        });
        singleTabIcon.on('click', function () {
            $('.tab_trigger_icon .owl-dot:eq(' + $(this).data('index') + ')').click();
        });
        ProContentSlider.on('translate.owl.carousel', function (property) {
            $('.tab_trigger_icon .owl-dot:eq(' + property.page.index + ')').click();
        });
        processIconSlider.on('translate.owl.carousel', function (property) {
            $('.pro_content .owl-dot:eq(' + property.page.index + ')').click();
        });

        RXknob('.knob');
        RXprogress('.progress-bar');
        skillAndVideoBgRight();
        
        // Jquery Parallax
        $('.home-5 .header_paralux').parallax('50%', 0.2);
        isMobile ? null : $('.home-6 .project_area').parallax('50%', 0.2);
        $('.home-8 .project_area').parallax('50%', 0.2);
        $('.home-6 .social_btn').parallax('50%', 0.2);
        $('.home-8 .social_btn').parallax('50%', 0.2);
        $('.home-9 .project_area').parallax('50%', 0.2);
        $('.home-9 .social_btn').parallax('50%', 0.2);
        
        //setTimeout function
        setTimeout(function () {
            
            // Jquery Scroll Spay
            $('body').scrollspy({
                target: '.navbar-collapse',
                offset: 81
            });
            
            // Jquery Smooth Scroll
            $('.smoth-scroll a, .go-down').bind('click', function (event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop : $($anchor.attr('href')).offset().top - 80 + 'px'
                }, 1500, 'easeInOutCubic');
                event.preventDefault();
            });
            
            //Affix
            mainNavbar.affix({
                offset: {
                    top: 80
                }
            });
            
        }, 500);
    });
    
    $(window).scroll(function () {
        //affix
        if ($(window).scrollTop() >= windowHeight - 81) {
            mainNavbar.addClass('sticky');
        } else {
            mainNavbar.removeClass('sticky');
        }

    });
    
    $('.sroll_top').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 4000);
        return false;
    });
    
    //Demo Color Box
    var colorTrigger = $('.colorDemo ul li'),
        colorBox = $('.colorDemo');
    colorTrigger.on('click', function(){
        var CCcolor = $(this).data('color'),
            colorList = colorTrigger.map(function() {
                return $(this).data('color');
            }).get();
        colorList = colorList.join(' ');
        body.removeClass( colorList ).addClass( CCcolor );
        colorTrigger.removeClass('active');
        $(this).addClass('active');
        
        //knob color change
        var knobColor;
        switch(CCcolor){
            case 'index-1':
                knobColor = {fgColor: '#d3dfff', bgColor: '#4073ff'}
            break;
            case 'home-2':
                knobColor = {fgColor: '#d3dfff', bgColor: '#623ac3'}
            break;
            case 'home-3':
                knobColor = {fgColor: '#72fff1', bgColor: '#03c1ae'}
            break;
        }
        $('.knob').trigger(
            'configure',
            {
                'fgColor': knobColor.fgColor,
                'bgColor': knobColor.bgColor
            }
        );
    });
    $('.colorDemo > i.icon-tools-2').on('click', function(){
        colorBox.toggleClass('open');
    });
    
    //ColorBox Time Out
    setTimeout(function(){
        colorBox.toggleClass('open');
    }, 3000);
    //
    //window resize event
    $(window).resize(function () {
        windowWidth = $(window).width();
        windowHeight = $(window).height();
        isMobile = windowWidth < 768;
        checkFeatures();
        skillAndVideoBgRight();
        
        //Menu Line Height
        MenuLineHeight();
        
        //mean menu logo 
        meanMenuLogo();
    });
})(jQuery);