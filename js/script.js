window.addEventListener('load', init);
function init(){
    const $ = (id) => document.getElementById(id);
    let id          = $('id');
    let name        = $('name');
    let ext         = $('ext')
    let email       = $('email');
    let department  = $('department');
    let empForm     = $('empForm');

    empForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log(`ID: ${id.value} \nName: ${name.value} \nExtension: ${ext.value} \nEmail: ${email.value} \nDepartment: ${department.value}`);
    })
}