import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {

  title: any;
  owner: any;
  city: any;
  type: any;
  price: any;
  imgae: any;
  bedrooms: any;

  constructor(
    private firebaseService: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onAddSubmit(){
    
    let listing ={
      title: this.title,
      city: this.city,
      owner: this.owner,
      price: this.price,
      type: this.type,
      bedrooms: this.bedrooms
    }
    

    this.firebaseService.addListing(listing);

    this.router.navigate(['listings']);

  }

}
