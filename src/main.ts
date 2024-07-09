import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { AppModule } from './app.module';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom([BrowserModule, BrowserAnimationsModule, ButtonModule]),
    provideHttpClient(),
  ],
}).catch((err) => console.error(err));