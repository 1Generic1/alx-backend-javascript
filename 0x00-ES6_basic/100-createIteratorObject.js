export default function createIteratorObject(report) {
    function* employeeIterator() {
        for (let department in report.allEmployees) {
            for (let employee of report.allEmployees[department]) {
                yield employee;
            }
        }
    }

    return {
        [Symbol.iterator]: employeeIterator
    };
}
