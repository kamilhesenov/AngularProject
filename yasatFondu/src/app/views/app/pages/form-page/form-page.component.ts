import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICity } from 'src/app/shared/models/city';
import { ApiService } from 'src/app/shared/services/api.service';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent implements OnInit {
  
  

  constructor(private apiService: ApiService,private http: HttpClient) {
    this.getCities();
  }


  public cities: ICity[];
  fileToUpload: File = null;

  
  form = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.maxLength(50), Validators.minLength(2)]),
    surname : new FormControl('',[Validators.required, Validators.maxLength(50), Validators.minLength(2)]),
    fathername: new FormControl('',[Validators.required, Validators.maxLength(50), Validators.minLength(2)]),
    birthdate:  new FormControl('',Validators.required),
    familyAddress: new FormControl('',[Validators.required, Validators.maxLength(250), Validators.minLength(2)]),
    contactInfo:  new FormControl('',[Validators.required, Validators.maxLength(250), Validators.minLength(1)]),
    fin: new FormControl('',[Validators.maxLength(7), Validators.minLength(7)]),
    dateOfMartyrdomOrVeteran : new FormControl('',Validators.required),
    rewardsName: new FormControl('',[Validators.required, Validators.maxLength(1000), Validators.minLength(1)]),
    rewardsDate: new FormControl('',Validators.required),
    childrenName: new FormControl('',[Validators.required, Validators.maxLength(50), Validators.minLength(2)]),
    childrenSurname: new FormControl('',[Validators.required, Validators.maxLength(50), Validators.minLength(2)]),
    childrenfin: new FormControl('',Validators.maxLength(7)),
    childrenbirthday: new FormControl('',Validators.required),
    childrenphoto: new FormControl('',Validators.required),
    peopleCount: new FormControl('',Validators.required),
    totalArea: new FormControl('',Validators.required),
    roomCount: new FormControl('',Validators.required)
  })
  

  ngOnInit(): void {
    this.getCities();
    
  }

  handleFileInput(event){
    this.fileToUpload = <File>event.target.file[0]
    console.log(this.fileToUpload.name);
  }

  Upload(){
    const fl = new FormData();
    fl.append('image',this.fileToUpload,this.fileToUpload.name);
    this.http.post('https://demoform.sinaps.az/api/photo',fl).subscribe(res=>console.log(res));
  }

  // tslint:disable-next-line: typedef
  getCities() {
    // tslint:disable-next-line: deprecation
    this.apiService.getCities().subscribe(
      data => {
        this.cities = data
      },
      error => {
      },
      () => {
      }
    )
  }

  get name(){
    return this.form.get('name')
  }

  get surname(){
    return this.form.get('surname')
  }

  get fathername(){
    return this.form.get('fathername')
  }

  get birthdate(){
    return this.form.get('birthdate')
  }

  get familyAddress(){
    return this.form.get('familyAddress')
  }

  get contactInfo(){
    return this.form.get('contactInfo')
  }

  get fin(){
    return this.form.get('fin')
  }

  get dateOfMartyrdomOrVeteran(){
    return this.form.get('dateOfMartyrdomOrVeteran')
  }

  get rewardsName(){
    return this.form.get('rewardsName')
  }

  get rewardsDate(){
    return this.form.get('rewardsDate')
  }

  get childrenName(){
    return this.form.get('childrenName')
  }

  get childrenSurname(){
    return this.form.get('childrenSurname')
  }

  get childrenfin(){
    return this.form.get('childrenfin')
  }

  get childrenbirthday(){
    return this.form.get('childrenbirthday')
  }

  get childrenphoto(){
    return this.form.get('childrenphoto')
  }

  get peopleCount(){
    return this.form.get('peopleCount')
  }

  get totalArea(){
    return this.form.get('totalArea')
  }

  get roomCount(){
    return this.form.get('roomCount')
  }

  onSubmit(data){
    console.warn(data);
    this.http.post(environment.apiUrl + '/api/Form',data)
             .subscribe((result)=>{
               console.warn("result", result);
             })
    }
  
}


