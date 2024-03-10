export default class ClassRoom {
  constructor(maxStudentSize) {
    this._maxStudentsSize = maxStudentSize;
  }
  get maxStudentsSize() {
    return this._maxStudentsSize;
  }
  set maxStudentsSize(newMaxStudentsSize) {
    this._maxStudentsSize = newMaxStudentsSize;
  }
}
