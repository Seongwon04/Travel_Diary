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
let pages = 0;
let positionValue = 0;
let count = 2;
let imgs = document.querySelector(".slides")
const IMAGE_WIDTH = 400;

document.getElementById('NextBtn').addEventListener('click', function(){
    if(pages < 2)
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
        pages = 2;
        positionValue = -IMAGE_WIDTH * 2;
        imgs.style.transform = `translateX(${positionValue}px)`;
    }
})
