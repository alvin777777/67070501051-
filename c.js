// เลื่อนแบบนุ่มนวล (Smooth Scroll) ด้วย JavaScript
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        
        window.scrollTo({
            top: target.offsetTop - 60, // ปรับการเลื่อนให้อยู่ด้านบน
            behavior: 'smooth' // นี่คือการเลื่อนแบบนุ่มนวล
        });
    });
});

