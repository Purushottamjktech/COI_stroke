import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Page3Component } from '../components/page3/page3.component';
import { PatientDetails } from '../models/patientDetails.model';
import resapi from '../models/resapi';

@Injectable({
  providedIn: 'root',
})
export class HealthPredictionService {
  constructor(private httpClient: HttpClient) {}

  resList: resapi;

  async sendingDataToBackend(): Promise<void> {
    const response = await axios.post(
      'http://20.219.167.202:5014/predict',
      Page3Component.argdata
    );

    const xor = JSON.parse(JSON.stringify(response.data));

    const object = new resapi(
      xor.age,
      xor.avg_glucose_level,
      xor.bmi,
      xor.cholesterol_HDL,
      xor.cholesterol_LDL,
      xor.diastolic,
      xor.ever_married,
      xor.gender,
      xor.heart_disease,
      xor.hypertension,
      xor.name,
      xor.result,
      xor.smoking_habit,
      xor.statement,
      xor.status,
      xor.systoli,
      xor.work_type
    );
    this.resList = object;

    console.log(this.resList);
    console.log(this.resList.systolic);
  }
}
