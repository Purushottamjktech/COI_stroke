export default class PatientDetails {
  age: string;
  avg_glucose_level: string;
  bmi: string;
  cholesterol_HDL: number;
  cholesterol_LDL: number;
  diastolic: number;
  ever_married: string;
  gender: string;
  heart_disease: number;
  hypertension: number;
  name: string;
  result: number;
  smoking_habit: string;
  statement: string;
  status: boolean;
  systolic: number;
  work_type: string;

  constructor(
    age: string,
  avg_glucose_level: string,
  bmi: string,
  cholesterol_HDL: number,
  cholesterol_LDL: number,
  diastolic: number,
  ever_married: string,
  gender: string,
  heart_disease: number,
  hypertension: number,
  name: string,
  result: number,
  smoking_habit: string,
  statement: string,
  status: boolean,
  systolic: number,
  work_type: string
  ) {
    this.age = age;
    this.avg_glucose_level = avg_glucose_level;
    this.bmi = bmi;
    this.cholesterol_HDL = cholesterol_HDL;
    this.cholesterol_LDL = cholesterol_LDL;
    this.diastolic = diastolic;
    this.ever_married = ever_married;
    this.gender = gender;
    this.heart_disease = heart_disease;
    this.hypertension = hypertension;
    this.name = name;
    this.result = result;
    this.smoking_habit = smoking_habit;
    this.statement = statement;
    this.status = status;
    this.systolic = systolic;
    this.work_type = work_type;
  }
}

// "age": "65",
// "avg_glucose_level": "190",
// "bmi": "22",
// "cholesterol_HDL": 33,
// "cholesterol_LDL": 148,
// "diastolic": 92,
// "ever_married": 1,
// "gender": "male",
// "heart_disease": 1,
// "hypertension": 1,
// "name": "ABefgC",
// "result": 78.55,
// "smoking_habit": "occasionally smoke",
// "statement": "Chances of getting stroke are: ",
// "status": "true",
// "systolic": 160,
// "work_type": "private"