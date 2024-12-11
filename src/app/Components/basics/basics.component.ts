import { Component, OnInit } from '@angular/core';
import { DemoComponent } from '../demo/demo.component';
import { StudentService } from '../Services/student.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-basics',
  standalone: true,
  imports: [DemoComponent, CommonModule,FormsModule,],
  providers:[StudentService,],
  templateUrl: './basics.component.html',
  styleUrl: './basics.component.css'
})
export class BasicsComponent implements OnInit {

  // isupdate:boolean=false;
  userdetailsObj:any={
      id: 0,
      name: "",
      username: "",
      email: "",
  }

  userdetailsArray:any[]=[];

  constructor(private http:HttpClient,private studSrv:StudentService){
 
  }

  ngOnInit(): void {
    this.loaduser()
  }

  loaduser(){
    this.studSrv.getAllUser().subscribe((res:any)=>{
      console.log(res);
      this.userdetailsArray=res;
    })
  }
  save(){
   this.userdetailsObj.id = this.userdetailsArray.length > 0 ?
                  Math.max(...this.userdetailsArray.map((u: any) => u.id!)) + 1 : 1;
    this.studSrv.postAllUser(this.userdetailsObj).subscribe((res:any)=>{
      alert("Your data Add Suucessfully!!!" +JSON.stringify(res)); 
      this.loaduser();
      this.reset();
    })

  }
  reset(){
    this.userdetailsObj ={
      id: 0,
      name: "",
      username: "",
      email: "",
  }
  }

  
  editUser(data:any){
    console.log(data);
   this.studSrv.editUser(data.id).subscribe((res:any)=>{
    this.userdetailsObj=res;
   })
  }

  update(data:any){
   this.studSrv.updateUser(data).subscribe((res:any)=>{
    alert("Data Updated Succesfully");
    this.loaduser();
    this.reset();
   })
  }


  deleteUser(data:any){
    if(window.confirm("Are you sure you want to delete the record")){
      this.studSrv.deleteUser(data.id).subscribe((res:any)=>{
        alert("Delete Record Successfully");
        this.loaduser(); 
      })
     }
  }


  


 

}
