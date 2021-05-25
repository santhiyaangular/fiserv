import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AstronomyPicModel } from '../shared/astronomypic.model';

@Component({
  selector: 'app-astronomypic-detail',
  templateUrl: './astronomypic-detail.component.html',
  styleUrls: ['./astronomypic-detail.component.css']
})
export class AstronomypicDetailComponent implements OnInit {
  pic = new AstronomyPicModel('','','','');
  constructor(private router: Router, private route: ActivatedRoute) { 
    this.pic = this.router.getCurrentNavigation().extras.state as AstronomyPicModel;
    console.log(this.pic);
  }

  ngOnInit(): void {
  }

  onClick(){
    this.router.navigate(['/list'],{relativeTo: this.route})
  }
}
