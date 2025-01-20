import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'giggly-file-upload',
  standalone: false,
  templateUrl: './giggly-file-upload.component.html',
  styleUrl: './giggly-file-upload.component.scss'
})
export class GigglyFileUploadComponent {
  @Input() label: string = 'Upload File';
  @Input() multiple: boolean = false;
  @Input() accept: string = '*'; // Default to accept all file types

  @Output() fileSelected = new EventEmitter<File[]>();

  isDragging = false;
  selectedFiles: File[] = [];

  handleFileInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files) {
      this.processFiles(inputElement.files);
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragging = true;
  }

  onDragLeave() {
    this.isDragging = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;
    if (event.dataTransfer?.files) {
      this.processFiles(event.dataTransfer.files);
    }
  }

  processFiles(fileList: FileList) {
    this.selectedFiles = Array.from(fileList);
    this.fileSelected.emit(this.selectedFiles);
  }
}
