console.log('JavaScript homework example file');

function sumArray(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

const exampleArray1 = [1, 2, 3, 4, 5];
const sum = sumArray(exampleArray1);
console.log('Сума елементів масиву:', sum);

function doubleArrayElements(numbers) {
  return numbers.map(num => num * 2);
}

const exampleArray2 = [1, 2, 3, 4, 5];
const doubledArray = doubleArrayElements(exampleArray2);
console.log('Подвоєні елементи масиву:', doubledArray);

class SkillsManager {
  constructor() {
    this.skills = [];
  }

  addSkill(skill) {
    if (typeof skill === 'string' && skill.length >= 2) {
      this.skills.push(skill);
      return skill;
    }
    return null;
  }

  getAllSkills() {
    return this.skills;
  }
}

const skillsManager = new SkillsManager();
console.log(skillsManager.addSkill('JavaScript'));
console.log(skillsManager.addSkill('CSS'));
console.log(skillsManager.addSkill('A'));
console.log(skillsManager.getAllSkills());

function DateCalculator(initialDate) {
  let currentDate = new Date(initialDate);

  this.addDays = function (days) {
    currentDate.setDate(currentDate.getDate() + days);
  };

  this.subtractDays = function (days) {
    currentDate.setDate(currentDate.getDate() - days);
  };

  this.getResult = function () {
    return currentDate.toISOString().split('T')[0];
  };
}

const dateCalculator = new DateCalculator('2023-01-01');
dateCalculator.addDays(5);
console.log(dateCalculator.getResult());
dateCalculator.subtractDays(3);
console.log(dateCalculator.getResult());

export { doubleArrayElements, sumArray, SkillsManager, DateCalculator };
