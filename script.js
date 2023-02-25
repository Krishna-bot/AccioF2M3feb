let addrowbutton = document.getElementById('addRowbutton');
let rows = document.getElementById('rows')
let table = document.getElementById('table');
let save = document.getElementById('save');

function AddStudents(_id,_studentName,_studentRoll,_subject,_marks,_markedBy){
                this.id = _id;
                this.studentName = _studentName;
                this.studentRoll = _studentRoll;
                this.subject = _subject;
                this.marks = _marks;
                this.markedBy = _markedBy;
}

function Display(){

}

Display.prototype.add = function(student){
    console.log("Adding to table");
    tablebody = document.getElementById('rows');

    let UIString = ` 
            <tr id="row">
            <th scope="row" id="ID">${student.id + 1}</th>
            <td><input type="text" id="SName">${student.studentName}</td>
            <td><input type="text" id="SRoll">${student.studentRoll}</td>
            <td><input type="text" id="SSubject" >${student.subject}</td>
            <td><input type="text" id="SMarks" value="">${student.marks}</td>
            <td><input type="text" id="SMarked" value="">${student.markedBy}</td>
            </tr>`;
            tablebody.innerHTML += UIString;
            console.log(tablebody.innerHTML);
}


addrowbutton.addEventListener('click', createRow);
save.addEventListener('click', AddStudents);

function createRow(e){
e.preventDefault();
let id = 1;
id++ ;
UI = `<tr id="row">
<th scope="row">${id}</th>
<td><input type="text" value=""></td>
<td><input type="text" value=""></td>
<td><input type="text" value=""></td>
<td><input type="text" value=""></td>
<td><input type="text" value=""></td>
<td><button type="submit" class="btn btn-dark btn-sm" id="save">Save</td>
</tr>`;
rows.innerHTML += UI 
console.log(rows.innerHTML);
}

function AddStudents(){
let id = 1;
let studentName = document.getElementById('SName').value;
let studentRoll = document.getElementById('SRoll').value;
let subject = document.getElementById('SSubject').value;
let marks = document.getElementById('SMarks').value;
let markedBy = document.getElementById('SMarked').value; 

let addStudents = new AddStudents(id,studentName,studentRoll,subject,marks,markedBy);
console.log(addStudents);

let display = new Display ();
display.add(addStudents);

}

  