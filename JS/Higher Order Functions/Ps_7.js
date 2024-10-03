let prateekMarksData = {
    name: "Prateek",
    subject1: "Javascript",
    subject2: "HTML",
    subject3: "CSS",
    subject4: null,
    subject5: null,
    marks1: 90,
    marks2: 81,
    marks3: 80,
    marks4: null,
    marks5: null
  };
  
  let nrupulMarksData = {
    name: "Nrupul",
    subject1: "Java",
    subject2: "Python",
    subject3: null,
    subject4: null,
    subject5: null,
    marks1: 95,
    marks2: 85,
    marks3: null,
    marks4: null,
    marks5: null
  };
  
  let allStudentsMarksData = [prateekMarksData, nrupulMarksData];
  
  function massageData(studentsData) {
    return studentsData.map(student => {
      let marks = [];
      
      for (let i = 1; i <= 5; i++) {
        let subject = student[`subject${i}`];
        let score = student[`marks${i}`];
  
        if (subject && score !== null) {
          marks.push({ subject: subject, score: score });
        }
      }
  
      return {
        name: student.name,
        marks: marks
      };
    });
  }
  
  let massagedData = massageData(allStudentsMarksData);
  
//   console.log(massagedData);
console.log(JSON.stringify(massagedData, null, 2));

  