// fade in fade out 
let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('fade_left')) {
                // .fade_left 클래스를 가진 요소일 때 실행할 코드
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateX(50px)';
            } else if (entry.target.classList.contains('fade_right')) {
                // .fade_right 클래스를 가진 요소일 때 실행할 코드
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateX(-50px)';
            } else if (entry.target.classList.contains('fade_top')) {
                // .fade_top 클래스를 가진 요소일 때 실행할 코드
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(50px)';
            } else if (entry.target.classList.contains('appear_text')) {
                // .appear_text 클래스를 가진 요소일 때 실행할 코드
                entry.target.style.opacity = 1;
            }
        } else {
            // 교차하지 않을 때 실행할 코드
            entry.target.style.opacity = 0;
            entry.target.style.transform = 'none';
        }
    });
});

let divs = document.querySelectorAll('.fade_left, .fade_right, .fade_top, .appear_text');
divs.forEach((element) => {
    observer.observe(element);
});




//smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


//이미지 슬라이더 
// let pages = 0;
// let positionValue = 0;
// let max_page = 4; //max_page + 1 = 전체 사진 갯수
// let imgs = document.querySelector(".slides")
// const IMAGE_WIDTH = 400;

// document.getElementById('NextBtn').addEventListener('click', function(){
//     if(pages < max_page)
//         {
//             pages += 1;
//             positionValue -= IMAGE_WIDTH;
//             imgs.style.transform = `translateX(${positionValue}px)`;
//         }

//     else
//     {
//         pages = 0;
//         positionValue = 0;
//         imgs.style.transform = `translateX(${positionValue}px)`;
//     }
// })

// document.getElementById('PrevBtn').addEventListener('click', function(){
//     if(pages > 0)
//         {
//             pages -= 1;
//             positionValue += IMAGE_WIDTH;
//             imgs.style.transform = `translateX(${positionValue}px)`;
//         }

//     else
//     {
//         pages = max_page;
//         positionValue = -IMAGE_WIDTH * max_page;
//         imgs.style.transform = `translateX(${positionValue}px)`;
//     }
// })


function Image_slider(_pages, _slides)
{
    let pages = 0;
    let positionValue = 0;
    let max_page = _pages; //max_page + 1 = 전체 사진 갯수
    let imgs = document.querySelector(_slides);
    const IMAGE_WIDTH = 400;

    document.getElementById('NextBtn').addEventListener('click', function(){
        if(pages < max_page)
            {
                pages += 1;
                positionValue -= IMAGE_WIDTH;
                imgs.style.transform = `translateX(${positionValue}px)`;
            }

        else
        {
            pages = 0;
            positionValue = 0;
            imgs.style.transform = `translateX(${positionValue}px)`;
        }
    })

    document.getElementById('PrevBtn').addEventListener('click', function(){
        if(pages > 0)
            {
                pages -= 1;
                positionValue += IMAGE_WIDTH;
                imgs.style.transform = `translateX(${positionValue}px)`;
            }

        else
        {
            pages = max_page;
            positionValue = -IMAGE_WIDTH * max_page;
            imgs.style.transform = `translateX(${positionValue}px)`;
        }
    })
}

Image_slider(4, ".slides1");
Image_slider(5, ".slides2");