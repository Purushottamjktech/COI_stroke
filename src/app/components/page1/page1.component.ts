import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { id } from '@swimlane/ngx-charts';
import { PatientDetails } from 'src/app/models/patientDetails.model';
import { HealthPredictionService } from 'src/app/services/health-prediction.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css'],
  // providers:[HealthPredictionService]
})
export class Page1Component implements OnInit {
  patients:PatientDetails[]=[];
  patientRecord:number =0;
  patientDetail:any;
  isButtonClicked:boolean=false;
  constructor(private router:Router,private _service:HealthPredictionService) { 
    this.patients=[
      new PatientDetails('7050','65','Bob Ricky Allen','1','190',1,1,73,158,72,'male','',true,100,'private','32','Occasionally smoke'),
      new PatientDetails('7055','25','Peter Parker','1','130',1,1,33,128,87,'male','',true,148,'private','22','occasionally smoke'),
      new PatientDetails('7051','72','Chris sterling ','1','180',1,1,71,172,102,'male','',true,164,'private','37','daily'),
      new PatientDetails('7052','65','James Gosling','1','180',1,1,59,178,102,'male','',true,160,'private','28','Occasionally smoke'),
      new PatientDetails('7053','50','Alex jorden','1','195',1,1,65,159,52,'male','',true,113,'private','15','Occasionally smoke'),
      new PatientDetails('7054','65','Sara Stoney','1','177',1,1,53,168,112,'female','',true,160,'private','32','Occasionally smoke'),
      // new PatientDetails('7056','65','Bob Ricky Allen','1','190',1,1,33,148,92,'male','',true,160,'private','22','occasionally smoke'),
      // new PatientDetails('7057','65','Bob Ricky Allen','1','170',1,1,33,148,92,'male','',true,160,'private','22','occasionally smoke'),
      // new PatientDetails('7058','65','Bob Ricky Allen','1','190',1,1,33,148,92,'male','',true,140,'private','22','occasionally smoke'),
      // new PatientDetails('7056','65','Bob Ricky Allen','1','190',1,1,33,148,92,'male','',true,160,'private','22','occasionally smoke'),
      // new PatientDetails('7057','65','Bob Ricky Allen','1','190',1,1,33,148,92,'male','',true,160,'private','22','occasionally smoke'),
      // new PatientDetails('7058','65','Bob Ricky Allen','1','190',1,1,33,148,92,'male','',true,160,'private','22','occasionally smoke'),
    ]
    this.patientRecord=this.patients.length;
  }

  

  ngOnInit(): void {
    
  }
  onButtonClicked(patientDetail:PatientDetails){
    this.isButtonClicked=true;
    console.log(patientDetail);
    localStorage.setItem('data',JSON.stringify(patientDetail));
   
    this.router.navigate(['/page3']);
  }
}
