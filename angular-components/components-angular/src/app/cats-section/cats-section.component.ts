import { Component } from '@angular/core';

@Component({
  selector: 'app-cats-section',
  templateUrl: './cats-section.component.html',
  styleUrls: ['./cats-section.component.css']
})
export class CatsSectionComponent {
  cats: string[] = [
    "https://th-thumbnailer.cdn-si-edu.com/lDSSOuueXCdvEBiVzrFPtX5BtWE=/fit-in/1600x0/filters:focal(960x640:961x641)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/f6/f3/f6f3493a-467f-4474-8c52-af5d021414b6/cat-5778777_1920.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQh9eTM9gCvEPvKAEEau87A1ExCHc33a7POg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Ku48NBuoAodaljL_mOPResgZcEyAjnGoSg&usqp=CAU"
  ]

  isToggle: boolean = true;

  showCats(){
    this.isToggle  = !this.isToggle;	

    
  }
}
