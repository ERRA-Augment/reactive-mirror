// import React from 'react'

export default function TestFace(grade) {

    grade = 10 // enter your fucking grade bitchface
    
    var gradetest = {
        pass: true,
        fail: false,
    }

    if (grade >= 10) {
        console.log(gradetest.pass)
        return ("You passed!!!!! "  + gradetest.pass)
        
    } else  {
        console.log(gradetest.fail)
        return ("You failed!!!!! " + gradetest.fail)
    }

}





