export default function SlideModule() {


    if (document.querySelector('#slide-home')) {
        const swiper = document.querySelector('#slide-home');
        const sliderContainer = swiper.querySelector('.swiper-container');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: true,
                direction: "vertical",
                slidesPerView: 1,
                mousewheel: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '">' + 0 + (index + 1) + "</span>";
                    },
                },

                observeParents: true,
                observeSlideChildren: true,
                observer: true,
            });
            const swiper2 = new Swiper(".mySwiper2", {
                speed: 1000,
                loop: true,
                slidesPerView: 4,
                spaceBetween: 30,
                observeParents: true,
                observeSlideChildren: true,
                observer: true,
                breakpoints: {
                    320: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                    576: {
                        slidesPerView: 4,
                        spaceBetween: 30,

                    }
                }

            });
            const swiper3 = new Swiper(".mySwiper3", {
                speed: 1000,
                loop: true,
                slidesPerView: 1,
                // spaceBetween: 10,
                observeParents: true,
                observeSlideChildren: true,
                observer: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }
            });
            const swiper4 = new Swiper(".mySwiper4", {
                speed: 1000,
                loop: true,
                slidesPerView: 3,
                spaceBetween: 30,
                observeParents: true,
                observeSlideChildren: true,
                observer: true,
                // navigation: {
                //     nextEl: '.swiper-button-next',
                //     prevEl: '.swiper-button-prev',
                // }
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    576: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 30,

                    }
                }


            });
        }
        catch (err) {
            console.log(err)
        }
    }

    if (document.querySelector('#slide-product-detail')) {
        const swiper = document.querySelector('#slide-product-detail');
        const sliderContainer = swiper.querySelector('.swiper-container');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: true,
                spaceBetween: 10,
                slidesPerView: 1,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

            })
        }
        catch (err) {
            console.log(err)
        }
    }

    if (document.querySelector('#slide-customer')) {
        const swiper = document.querySelector('#slide-customer');
        const sliderContainer = swiper.querySelector('.swiper-container');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: false,
                spaceBetween: 30,
                slidesPerView: 3,
                slidesPerColumnFill: 'row',
                slidesPerColumn: '2',
                allowTouchMove: false,
                breakpoints: {
                    320: {
                        slidesPerView: 2,
                        slidesPerColumnFill: 'row',
                        slidesPerColumn: '2',
                        spaceBetween: 20,
                        allowTouchMove: true,
                    },

                    576: {
                        slidesPerView: 3,
                        slidesPerColumnFill: 'row',
                        slidesPerColumn: '2',
                        spaceBetween: 30,
                        allowTouchMove: false,

                    }
                }

            })
        }
        catch (err) {
            console.log(err)
        }
    }
    if (document.querySelector('#slide-partner')) {
        const swiper = document.querySelector('#slide-partner');
        const sliderContainer = swiper.querySelector('.swiper-container');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: false,
                spaceBetween: 30,
                slidesPerView: 3,
                slidesPerColumnFill: 'row',
                slidesPerColumn: '2',
                allowTouchMove: false,
                breakpoints: {
                    320: {
                        slidesPerView: 2,
                        slidesPerColumnFill: 'row',
                        slidesPerColumn: '2',
                        spaceBetween: 20,
                        allowTouchMove: true,
                    },

                    576: {
                        slidesPerView: 3,
                        slidesPerColumnFill: 'row',
                        slidesPerColumn: '2',
                        spaceBetween: 30,
                        allowTouchMove: false,

                    }
                }
            })
        }
        catch (err) {
            console.log(err)
        }
    }
    if (document.querySelector('#slide-staff')) {
        const swiper = document.querySelector('#slide-staff');
        const sliderContainer = swiper.querySelector('.swiper-container');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: true,
                spaceBetween: 30,
                slidesPerView: 4,

                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },


                breakpoints: {
                    320: {
                        spaceBetween: 10,
                        slidesPerView: 1,
                    },

                    577: {
                        spaceBetween: 20,
                        slidesPerView: 2,
                    },

                    992: {
                        spaceBetween: 20,
                        slidesPerView: 3,
                    },

                    1200: {
                        spaceBetween: 30,
                        slidesPerView: 4,
                    },
                }
                // observeParents:true,
                // observeSlideChildren: true,
                // observer: true,
            })
        }
        catch (err) {
            console.log(err)
        }
    }
    if (document.querySelector('#slide-related-post')) {
        const swiper = document.querySelector('#slide-related-post');
        const sliderContainer = swiper.querySelector('.swiper-container');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: true,
                spaceBetween: 30,
                slidesPerView: 3,
                // autoplay: {
                //     delay: 4000,
                // },
                // pagination: {
                //     el: '.swiper-pagination',
                //     clickable: true,
                // },

                // navigation: {
                //     nextEl: '.swiper-button-next',
                //     prevEl: '.swiper-button-prev',
                // },

                breakpoints: {
                    320: {
                        spaceBetween: 10,
                        slidesPerView: 1,
                    },
                    400: {
                        spaceBetween: 10,
                        slidesPerView: 2,
                    },
                    768: {
                        spaceBetween: 20,
                        slidesPerView: 3,
                    },
                    1024: {
                        spaceBetween: 30,
                        slidesPerView: 3,
                    }
                }
                // observeParents:true,
                // observeSlideChildren: true,
                // observer: true,
            })
        }
        catch (err) {
            console.log(err)
        }
    }
    if (document.querySelector('#slide-home-360')) {
        const swiper = document.querySelector('#slide-home-360');
        const sliderContainer = swiper.querySelector('.swiper-container');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: true,
                spaceBetween: 15,
                slidesPerView: 5,

                breakpoints: {
                    320: {
                        spaceBetween: 10,
                        slidesPerView: 1,
                    },
                    401: {
                        spaceBetween: 10,
                        slidesPerView: 2,
                    },
                    992: {
                        spaceBetween: 15,
                        slidesPerView: 3,
                    },
                    1200: {
                        spaceBetween: 15,
                        slidesPerView: 4,
                    },
                    1440: {
                        spaceBetween: 15,
                        slidesPerView: 5,
                    }
                }
                // observeParents:true,
                // observeSlideChildren: true,
                // observer: true,
            })
        }
        catch (err) {
            console.log(err)
        }
    }

    if (document.querySelector('.tab-slide')) {
        const swiper = document.querySelector('.tab-slide');
        const sliderContainer = swiper.querySelector('.swiper-container');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: true,
                spaceBetween: 30,
                slidesPerView: 'auto',

                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

                breakpoints: {
                    320: {
                        spaceBetween: 20
                    },
                    576: {
                        spaceBetween: 30,
                    },
                   
                }

            })

        }
        catch (err) {
            console.log(err)
        }
    }
}