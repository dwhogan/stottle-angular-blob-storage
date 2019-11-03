import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AzureStorageModule } from './azure-storage/azure-storage.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AzureStorageModule],

  bootstrap: [AppComponent]
})
export class AppModule {}
