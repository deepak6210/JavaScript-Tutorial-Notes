console.log("this  is tutorial 17");

document.getElementById('heading').addEventListener('click', function (e) {
    let variable;
    console.log('You have Clicked the heading');
    variable = e.target;
    variable = e.target.className;
    variable = Array.from(e.target.classList);

    variable = e.target.id;
    variable = e.offsetX;
    variable = e.offsetY;
    variable = e.clientY;
    variable = e.clientX;

    console.log(variable);
});