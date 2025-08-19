import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-upload-excel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upload-excel.html',
  styleUrl: './upload-excel.css',
})
export class UploadExcelComponent {
  selectedFile: File | null = null;
  mensagem: string = '';

  constructor(private http: HttpClient) {
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] ?? null;
  }

  onUpload() {
    if (this.selectedFile) {
      const formData = new FormData();
      if (!this.selectedFile) return;

      formData.append('file', this.selectedFile);
      this.http.post('http://localhost:8080/api/files/upload', formData)
        .subscribe({
          next: res => {
            console.log('Upload completo!', res);
            this.mensagem = 'Upload realizado com sucesso!';
          },
          error: err => {
            alert(JSON.stringify(err));
            console.error('Erro no upload', err);
            this.mensagem = 'Erro ao realizar o upload. Verifique o console para mais detalhes.';
          }
        });

    }
  }
}