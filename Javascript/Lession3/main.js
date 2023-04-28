var url = "http://localhost:3000/courses";

function start() {
    getCourses(courses => {
        console.log('course', courses);
        renderCourse(courses);
    });
    handleCreate();
}

start();

function getCourses(callback) {
    fetch(url).then(res => res.json())
        .then(callback);
}

function renderCourse(courses) {
    var coursesHTML = document.querySelector("#courses");
    var htmls = courses.map(item => {
        return `
            <li>
                ${item.title}
                <button onclick=handleUpdateCourse(${item.id})>Update</button>
                <button onclick=handleDeleteCourse(${item.id})>Delete</button>
            </li>
        `
    });
    const html = htmls.join('');
    coursesHTML.innerHTML = html;
}

function handleCreate() {
    var createBtn = document.querySelector("#btn-create");
    createBtn.onclick = function() {
        var title = document.querySelector('input[name="title"]').value;
        var author = document.querySelector('input[name="author"]').value;
        console.log('name = ', title, author);
        var obj = {title, author};
        postCourse(obj, getCourses);
    }

}

function postCourse(course, callback) {
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(course)
    }).then(res => res.json()).then(callback);
}

function handleDeleteCourse(id) {
    fetch(url + '/' + id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()).then(getCourses);
}

function handleUpdateCourse(course, callback) {
    fetch(url + '/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(course)
    }).then(res => res.json()).then(callback);
}