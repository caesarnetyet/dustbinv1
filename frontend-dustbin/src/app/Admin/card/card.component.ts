import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/sesion/login.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { SensorsService } from 'src/app/services/sesion/sensors.service';

interface sensoress {
  id?: number;
  name?: string;
  price?: number;
  battery_included?: boolean;
  sensors?:any;
  created_at?: string;
  updated_at?: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
constructor(private authService: LoginService,private modalService: NgbModal, private sensor:SensorsService){

}

items!: sensoress[] ;
sensors!: any[];

  ngOnInit() {
    const token = localStorage.getItem('token');

    this.sensor.getModelSensor(token).subscribe(
      (res: sensoress[]) => {
        console.log(res);
        this.items = res;
      }
    );
    this.sensor.getSensors(token).subscribe(
      (res: any) => {
        console.log(res);
        this.sensors = res;
      }
    );
      }
    

  selectedSensorIds: number[] = [];
  batteryIncluded = false;
  isModalOpen = true;

  submitForm(form: NgForm) {
    const token = localStorage.getItem('token')
    console.log(token)
    const data = {
      name: form.value.name,
      price: form.value.price,
      battery_included: this.batteryIncluded,
      sensors: this.selectedSensorIds
      
    };
    console.log(data);

    this.sensor.createModelSensor(data,token).subscribe(
      (res)=>
      {
        console.log(res)
        this.ngOnInit();
      }

    )
  }

  onSensorSelectionChange() {
    this.selectedSensorIds = this.sensors.filter(sensor => sensor.selected).map(sensor => sensor.id);
    console.log(this.selectedSensorIds);
  }
  
  cerrarSession(){
    this.authService.logout();
    
  }
  }




