/**
 * Created by kevinkreuzer on 31.07.17.
 */
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MapsAPILoader} from '@agm/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
    selector: 'tripster-address-search',
    templateUrl: './tripster-address-search.html'
})
export class TripsterAddressSearchComponent implements OnInit {

    addressSearchControl: FormControl
    @ViewChild('search')
    public searchElementRef: ElementRef;

    constructor(private mapsAPILoader: MapsAPILoader) {
        Observable.fromPromise(this.mapsAPILoader.load())
            .subscribe(_ => this.initAddressAutoComplete())
    }

    ngOnInit(): void {
        this.addressSearchControl = new FormControl()
    }

    private initAddressAutoComplete(): void {
        const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
            types: ['address']
        });
        autocomplete.addListener('place_changed', () => {
            const place: google.maps.places.PlaceResult = autocomplete.getPlace();
            if (place.geometry === undefined || place.geometry === null) {
                return;
            }
            console.log(place.geometry.location.lat())
            console.log(place.geometry.location.lng())
        });
    }
}
