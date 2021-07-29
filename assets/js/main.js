document.addEventListener("DOMContentLoaded", function () {
    // make it as accordion for smaller screens
    if (window.innerWidth > 992) {
        document.querySelectorAll('.navbar .nav-item').forEach(function (everyitem) {
            // everyitem.addEventListener('mouseover', function (e) {

            //     let el_link = this.querySelector('a[data-bs-toggle]');

            //     if (el_link != null) {
            //         let nextEl = el_link.nextElementSibling;
            //         el_link.classList.add('show');
            //         nextEl.classList.add('show');
            //     }

            // });
            // everyitem.addEventListener('mouseleave', function (e) {
            //     let el_link = this.querySelector('a[data-bs-toggle]');

            //     if (el_link != null) {
            //         let nextEl = el_link.nextElementSibling;
            //         el_link.classList.remove('show');
            //         nextEl.classList.remove('show');
            //     }
            // })

            let link = everyitem.querySelector('a[data-bs-toggle]')
            everyitem.addEventListener('click', () => {
                window.location = link.href
                alert(link.href)
            })
        });

    }
    // end if innerWidth
    //  stop propagation of dropdown menu
    const dropdownList = document.querySelectorAll('.navbar-collapse .dropdown-menu')
    dropdownList.forEach((e) => {
        e.addEventListener('click', (e) => {
            e.stopPropagation()
        })
    })
    // 
    // tiny slider
    ;(() => {
        let slider = tns({
            container: '#slider',
            items: 1,
            slideBy: 'page',
            autoplay: true,
            controls: false,
            mouseDrag: true,
            nav: false,
            autoplayButtonOutput: false,
            loop: true,
        });
    })()
    ;(() => {
        let slider = tns({
            container: '#sponSlider',
            items: 4,
            slideBy: 'page',
            // controls: false,
            mouseDrag: true,
            autoplay: true,
            nav: false,
            autoplayButtonOutput: false,
            loop: true,
            responsive: {
                0:{
                    items: 1,
                },
                350:{
                    gutter: 20,
                    items: 2,
                },
                640: {
                  items: 3
                },
                900: {
                  items: 4
                }
              }
        });
        //  format control buttons 
        var prevButton = document.querySelector('.tns-outer button[data-controls="prev"]')
        var nextButton = document.querySelector('.tns-outer button[data-controls="next"]')
        prevButton.innerHTML = `<i class="fas fa-arrow-left"></i>`
        nextButton.innerHTML = `<i class="fas fa-arrow-right"></i>`
    })()
    // 
    // sticky top header
    window.onscroll = () => {
        let windowTop = window.pageYOffset;
        let header = document.getElementById("header");
        if(windowTop > 400){
            header.classList.add('header--fixed')
        }
        else if(windowTop < 300){
            header.classList.remove('header--fixed')
        }
        // else header.classList.remove('header--fixed')
    }
});

