import {Component, OnInit} from '@angular/core';
import {PegawaiMasterServiceService} from '../../services/pegawai-master-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-pegawai-master',
  templateUrl: './pegawai-master.component.html',
  styleUrls: ['./pegawai-master.component.css']
})
export class PegawaiMasterComponent implements OnInit {

  dataJabatan: any;
  form: FormGroup;

  constructor(private masterPegawaiService: PegawaiMasterServiceService) {
  }

  initValue = {
    uuid: '',
    namaPegawai: '',
    nipPegawai: '',
    alamatPegawai: '',
    hpPegawai: '',
    emailPegawai: '',
    uuidJabatan: {
      uuid: '',
      namaJabatan: '',
      deskripsiJabatan: ''
    }
  };

  getObject(paramater: string) {
    return (<FormGroup> this.form.get(paramater));
  }

  initForm(v = this.initValue) {
    return new FormBuilder().group({
      uuid: v.uuid,
      namaPegawai: [{value: v.namaPegawai, disabled: false}, Validators.required],
      nipPegawai: [{value: v.nipPegawai, disabled: false}, Validators.required],
      alamatPegawai: [{value: v.alamatPegawai, disabled: false}, Validators.required],
      hpPegawai: [{value: v.hpPegawai, disabled: false}, Validators.required],
      emailPegawai: [{value: v.emailPegawai, disabled: false}, Validators.required],
      fileFotoPegawai: '',
      jenisKelamin: 'L',
      agama: 'Islam',
      tanggalMasuk: '',
      tanggalKeluar: '',
      statusAktif: '',
      uuidJabatan: new FormBuilder().group({
        uuid: v.uuidJabatan.uuid
      })

    });
  }


  ngOnInit() {
    this.getDataJabatan();
    this.form = this.initForm();
  }

  save(v) {
    this.masterPegawaiService.postData(v).subscribe(value => console.log(value));
    this.form.patchValue(this.initValue);
  }

  getDataJabatan() {
    this.masterPegawaiService.getData().subscribe(
      (v) => {
        console.log(v);
        this.dataJabatan = v['content'];
      },
      (error) => console.error('request anda error : ', error),
      () => {
      }
    );
  }

}
