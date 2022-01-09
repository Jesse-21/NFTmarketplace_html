//header
let navbar = document.querySelector('.menu');
document.querySelector('#bar').onclick = () =>{
    navbar.classList.toggle('active')
}
window.onscroll = () => {
    navbar.classList.remove('active')
}

//filter
let filterBtn = document.querySelectorAll('.filter-buttons .filter');
let filterItem = document.querySelectorAll('.collections .box-card .collect');

filterBtn.forEach(button => {
    button.onclick =()=>{
        filterBtn.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        let dataFilter = button.getAttribute('data-filter');

        filterItem.forEach(item => {

            item.classList.remove('active');
            item.classList.add('hide');

            if (item.getAttribute('data-item') == dataFilter || dataFilter == 'all') {
                item.classList.remove('hide');
                item.classList.add('active');
            }
        })
    }
})