function calculateGrade(score) {
    try {
       score = parseFloat(score);
       if (isNaN(score)) {
         return 'Invalid score';
       }
   
       if (score >= 90 && score <= 100) {
         return 'A';
       } else if (score >= 80 && score < 90) {
         return 'B';
       } else if (score >= 70 ) {
         return 'C';
       } else if (score >= 60 ) {
         return 'D';
       } else if (score >= 0 ) {
         return 'F';
       } else {
         return 'Invalid score';
       }
    } catch (error) {
       return 'Invalid score';
    }
   }
   
   console.log(calculateGrade(95)); 
   console.log(calculateGrade(85)); 
   console.log(calculateGrade(75)); 
   console.log(calculateGrade(65)); 
   console.log(calculateGrade(55)); 
   console.log(calculateGrade('abc'));