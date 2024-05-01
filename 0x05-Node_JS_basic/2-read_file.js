const fs = require('fs');

function countStudents(path) {
  try {
    console.log('Reading file:', path);
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const counts = {};

    for (let i = 1; i < lines.length; i++) {
      const fields = lines[i].split(',');
      const field = fields[fields.length - 1].trim();
      counts[field] = (counts[field] || 0) + 1;
    }
    console.log(`Number of students: ${lines.length - 1}`);
    for (const field in counts) {
      const students = lines.slice(1)
	    		     .filter((line) => line.trim() !== '')
	    		     .map((line) => line.split(',')[0].trim())
	    		     .filter((name, index) => lines[index + 1].split(',').slice(-1).trim() === field);
      console.log(`Number of students in ${field}: ${counts[field]}. List: ${students.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
