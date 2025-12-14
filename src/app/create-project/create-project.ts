// src/app/create-project/create-project.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-project',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // ✅ ReactiveFormsModule doit être ici
  templateUrl: './create-project.html',
  styleUrls: ['./create-project.css']
})
export class CreateProject {
  projectForm: FormGroup;
  selectedImage: string | null = null;
  imageError: string | null = null;

  constructor(private fb: FormBuilder) {
    this.projectForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      budget: [null, [Validators.required, Validators.min(1)]],
      location: ['', Validators.required],
      energyType: ['', Validators.required]
    });
  }

  triggerFileInput() {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    fileInput.click();
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    // Validation du type de fichier
    if (!file.type.startsWith('image/')) {
      this.imageError = 'Veuillez sélectionner une image (jpg, png, gif, etc.)';
      this.selectedImage = null;
      return;
    }

    // Validation de la taille (ex: max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      this.imageError = 'L’image ne doit pas dépasser 5 Mo';
      this.selectedImage = null;
      return;
    }

    // Lire l’image pour l’afficher en aperçu
    const reader = new FileReader();
    reader.onload = () => {
      this.selectedImage = reader.result as string;
      this.imageError = null;
    };
    reader.readAsDataURL(file);

    // Ici tu peux aussi stocker le fichier pour l’envoyer plus tard
    // this.projectForm.patchValue({ image: file });
  }

  onSubmit() {
    if (this.projectForm.valid) {
      const formData = this.projectForm.value;
      console.log('Projet soumis:', {
        ...formData,
        image: this.selectedImage ? 'Image sélectionnée' : 'Aucune image'
      });

      // Ici tu enverrais les données à ton backend
      // ex: this.projectService.createProject(formData).subscribe(...)

      alert('Projet soumis avec succès !');
    } else {
      console.log('Formulaire invalide');
    }
  }
}