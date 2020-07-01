import { Component, OnInit } from '@angular/core';

import { AutoService } from '../../services/auto.service';
import { Auto } from 'src/app/models/auto';
import { NgForm } from '@angular/forms';

declare var M: any;

@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.css'],
  providers: [AutoService]
})
export class AutosComponent implements OnInit {

  constructor(private autoService: AutoService) { 

  }

  ngOnInit() {
    this.getAutos();
  }

  addAuto(form: NgForm){
    if(form.value._id){
      this.autoService.putAuto(form.value)
        .subscribe(res => {
          this.resetForm(form);
          M.toast({html: 'Auto Actualizado'});
          this.getAutos();
        })
    } else {
    this.autoService.postAuto(form.value)
      .subscribe(res => {
        this.resetForm(form);
        M.toast({html: 'Auto Guardado'});
        this.getAutos();
      });
    }

  }


  getAutos(){
    this.autoService.getAutos()
      .subscribe(res => {
          this.autoService.autos = res as Auto[];
      });

  }

  editAuto(auto: Auto){
    this.autoService.selectedAuto = auto;
  }

  deleteAuto(_id : string){
    if(confirm('Estas seguro de eliminarlo?')){
      this.autoService.deleteAuto(_id)
      .subscribe(res => {
        this.getAutos(); 
        M.toast({html: 'Auto eliminado'});  
      });
    }
    
   
  }

  resetForm(form?: NgForm){
    if (form){
      form.reset();
      this.autoService.selectedAuto = new Auto();
    }

  }

}
