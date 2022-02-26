        // if (localStorage.getItem('section')){
        //     localStorage.removeItem('section');
        // }
        // $(window).on("load",function(){
        //     $(".fa-3x").fadeOut(2000, function(){
        //         $(".content-page").show();
        //     });
        // });

        //         $(document).ready(function(){
        //     $(".fa-3x").fadeOut(2000, function(){
        //         $(".content-page").show();
        //     });
        // });

        $(document).ready($(window).on("load",function(){
            $(".fa-3x").fadeOut(2000, function(){
                $(".content-page").show();
                if (window.location.hash) {
                    if (select(window.location.hash)) {
                        scrollto(window.location.hash)
                    }
                }
            });
            // setTimeout(linkRedirect, 2000);
            // linkRedirectJS();
        }));

        /**
         * Easy selector helper function
         */
        const select = (el, all = false) => {
            el = el.trim()
            if (all) {
                return [...document.querySelectorAll(el)]
            } else {
                return document.querySelector(el)
            }
        }

        /**
         * Scrolls to an element with header offset
         */
        const scrollto = (el) => {
            let header = select('#nav-container')
            let offset = header.offsetHeight

            let elementPos = select(el).offsetTop
            window.scrollTo({
                top: elementPos - offset,
                behavior: 'smooth'
            })
        }

        /**
         * Scroll with ofset on page load with hash links in the url
         */
        // window.addEventListener('load', () => {
        //     if (window.location.hash) {
        //         if (select(window.location.hash)) {
        //             scrollto(window.location.hash)
        //         }
        //     }
        // });


        // window.onload = function() {
        //     let spinner = document.getElementsByClassName(".fa-3x");
        //     let contenu = document.getElementsByClassName(".content-page");
            // spinner.style.display = "none";
            // contenu.style.display = "block";
            // $(".fa-3x").fadeOut(2000, function(){
            //     $(".content-page").show(1, function(){
            //         $(document).ready(function(){
            //             console.log("coucou");
            //             linkRedirectJquery();
            //         });
            //     });
            // });
            
        // }


        // function linkRedirect(id){
        //     let spinner = document.querySelector(".fa-3x");
        //     let contenu = document.querySelector(".content-page");
        //     console.log(contenu);
        //     if(contenu.style.display != "none"){
        //         let actual_link = window.location.href;
        //         window.location.href = actual_link+id;
        //         console.log(actual_link);
        //         console.log(window.location.href);
        //     }
        // }

        // function linkRedirectJS() {
        //     console.log("linkRedirectJS executed");
        //     let linkha = document.querySelector(".ha-link");
        //     let linkmn = document.querySelector(".mn-link");
        //     let linkham = document.querySelector(".ha-link-m");
        //     let linkmnm = document.querySelector(".mn-link-m");
        //     console.log(linkha);
        //     console.log(linkmn);
        //     console.log(linkham);
        //     console.log(linkmnm);
        //     linkha.addEventListener("click", function(){
        //         localStorage.setItem("section", '#ha');
        //     });
        //     linkmn.addEventListener("click", function(){
        //         localStorage.setItem("section", '#mn');
        //     });
        //     linkham.addEventListener("click", function(){
        //         localStorage.setItem("section", '#ha');
        //     });
        //     linkmnm.addEventListener("click", function(){
        //         localStorage.setItem("section", '#mn');
        //     });
        //
        // }
        // console.log("Sect : "+localStorage.getItem('section'));

        // $(document).ready($(window).on("load",function(){
        //     if(document.getElementById("ha")){
        //         alert("Section : "+ window.section);
        //     }
        // }));



        // passer une variable globale à la fonction

            //         console.log(actual_link);
            //         console.log(window.location.href);
            



        //         function linkRedirectJquery() {
        //     console.log("je suis dans redirect");
        //     $( ".ha-link" ).click(function() {
        //         // window.location.href = "#ha";
        //         window.onload = function() {
        //             console.log("ha");
        //             alert("ggg");
        //         }
        //     });
                    
        //     $( ".ha-link-m" ).click(function() {
        //         // window.location.href = "#ha";
        //         window.onload = function() {
        //             console.log("ha");
        //             alert("ggg");
        //         }
        //     });

        //     $( ".mn-link" ).click(function() {
        //         // window.location.href = "#mn";
                
        //         $(document).ready(function(){
        //             alert("ggg");
        //         });
        //         window.onload = function() {
        //             console.log("mn");
        //         }
        //     });

        //     $( ".mn-link-m" ).click(function() {
        //         // window.location.href = "#mn";
        //         window.onload = function() {
        //             console.log("mn");
        //             alert("ggg");
        //         }
        //     });

        // }






























