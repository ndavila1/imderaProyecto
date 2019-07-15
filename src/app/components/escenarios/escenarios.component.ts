import { Component, OnInit } from '@angular/core';
import { ServiEscenarioService } from "./../../services/servi-escenario.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import Swal from "sweetalert2";



@Component({
  selector: 'app-escenarios',
  templateUrl: './escenarios.component.html',
  styleUrls: ['./escenarios.component.css']
})
export class EscenariosComponent implements OnInit {


  escenarios: any[] = [];
  estado: boolean = false;
  escenarioPrueba:any={};
  escenarioId:string='';

  createFormGroup() {
    return new FormGroup({
      nombreEscenario: new FormControl('', Validators.required),
      tipoEscenario: new FormControl('', Validators.required),
      comunaId: new FormControl('', Validators.required),
      claseEscenario: new FormControl('', Validators.required)
    })
  }

  escenarioForm: FormGroup;

  constructor(private servicio: ServiEscenarioService) {
    this.escenarioForm = this.createFormGroup();
  }

  ngOnInit() {

    this.listar();
  }

  onResetForm() {
    this.escenarioForm.reset();

    this.estado = false;
    this.escenarioPrueba={};
    this.escenarioId="";
  }
  onSaveForm() {
    if (this.escenarioForm.valid) {

      this.servicio.create(this.escenarioForm.value);
      this.onResetForm();
      Swal.fire({
        type: 'success',
        title: 'El registro ha sido guardado',
        showConfirmButton: false,
        timer: 3500
      })
    } else {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Por favor llena todos los campos del formulario'
      })
    }
  }
  listar(): void {
    this.servicio.listar().subscribe(data => {
      this.escenarios = data.map(elemento => {
        return {
          ...elemento as any
        }
      });
    });
  }
  buscar(id: string): void {
    this.servicio.buscar(id).subscribe(a => {
      let data = a.payload.data() as any;
      this.escenarioPrueba=data;
      this.escenarioId=id;
      this.escenarioForm.setValue(data);
      this.estado=true;
    });
  }

  eliminar(id: string): void {
    Swal.fire({
      title: '¿Seguro quieres borrar este registro?',
      text: "No podras revertir esto",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borralo',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        console.log(this.servicio.delete(id));
        Swal.fire(
          'Borrado!',
          'El registro se ha borrado'
        )
      }
    })

  }
  modificar(): void {
    Swal.fire({
      title: '¿Seguro quieres modificar este registro?',
      text: "No podras revertir esto",
      type: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, cambialo',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        console.log(this.servicio.update(this.escenarioId, this.escenarioPrueba));
        this.onResetForm();
        Swal.fire(
          'Borrado!',
          'El registro se ha borrado'
        )
      }
    })
   

  }


}
