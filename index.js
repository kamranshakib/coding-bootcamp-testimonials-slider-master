const perv = document.getElementById('perv')
const next = document.getElementById('next')
const change_image = document.getElementById('imgage_change')
const change_para = document.getElementById('para_change')
const Name =document.getElementById('name')
const position = document.getElementById('position')

perv.addEventListener('click',()=>{
    change_image.setAttribute('src','./images/image-tanya.jpg')
    change_para.innerHTML = "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”"
    Name.innerHTML = 'Tanya Sinclair'
    position.innerHTML='UX Engineer'
})

next.addEventListener('click',()=>{
   change_image.setAttribute('src','./images/image-john.jpg');
   change_para.innerHTML = "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.”"
    Name.innerHTML = 'John Tarkpor'
    position.innerHTML='Junior Front-end Developer'
})