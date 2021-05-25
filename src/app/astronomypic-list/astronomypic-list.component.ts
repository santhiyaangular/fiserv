import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AstronomyPicModel } from 'src/app/shared/astronomypic.model';
import { AstronomypicserviceService } from 'src/app/shared/astronomypicservice.service';

@Component({
  selector: 'app-astronomypic-list',
  templateUrl: './astronomypic-list.component.html',
  styleUrls: ['./astronomypic-list.component.css']
})
export class AstronomypicListComponent implements OnInit {
  astronomyPicList: any;

  pic = new AstronomyPicModel('','','','');
  constructor(private astronomyPicService: AstronomypicserviceService, private router: Router, private route: ActivatedRoute ) {
    
   }

  ngOnInit(): void {
    // to get the api data
    this.astronomyPicService.getAstronomyPics().subscribe(data => {
      this.astronomyPicList = data;
      console.log(data);
      },error => console.log(error));
  }

  // to get the details data
  onClick(selectedPic: AstronomyPicModel){
    this.router.navigate(['/detail'],{relativeTo: this.route, state: selectedPic});
  }

}
