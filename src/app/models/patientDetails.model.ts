export class PatientDetails{
  
   
   
   PID:string;
   age:string;
  name:string;
  ever_married:string;
  avg_glucose_level:string;
  hypertension:number;
  heart_disease:number;
  cholesterol_HDL:number;
  cholesterol_LDL:number;
  diastolic:number;
  gender:string;
  statement:string;
  status:boolean;
  
  systolic:number;
  work_type:string;
  bmi:string;
  smoking_habit:string;

  constructor(
         PID:string,
         age:string,
         name:string,
         married:string,
         glucose:string,
         hypertension:number,
         disease:number,
         cholesterol_HDL:number,
         cholesterol_LDL:number,
         diastolic:number,
         gender:string,
         statement:string,
         status:boolean,
         systolic:number,
         work_type:string,
         bmi:string,
         smoking_habit:string
   ){
         this.PID             =PID;
         this.age             =age;
         this.name            =name;
         this.ever_married    =married;
         this.avg_glucose_level=glucose;
         this.hypertension     =hypertension;
         this.heart_disease    =disease;
         this.cholesterol_HDL  =cholesterol_HDL;
         this.cholesterol_LDL  =cholesterol_LDL;
         this.diastolic        =diastolic;
         this.gender           =gender;
         this.statement        =statement;
         this.status           =status;
         this.systolic         =systolic;
         this.work_type        =work_type;
         this.bmi              =bmi;
         this.smoking_habit    =smoking_habit;
  }

  
}
