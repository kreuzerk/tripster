/**
 * Created by kevinkreuzer on 27.07.17.
 */
import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MapsAPILoader} from '@agm/core';
import {} from '@types/googlemaps';

@Component({
    selector: 'tripster-destination',
    templateUrl: './tripster-destination.html'
})
export class TripsterDestinationComponent implements OnInit {

    @Input() counter: number;
    @Output() onDestinationCreated = new EventEmitter<any>();
    destinationModel: any;
    addressSearchControl: FormControl
    @ViewChild('search')
    public searchElementRef: ElementRef;

    constructor(private mapsAPILoader: MapsAPILoader) {
    }

    ngOnInit(): void {
        this.addressSearchControl = new FormControl()
        this.initAddressAutoComplete()
    }

    public newDestinationInput(): void {
        this.onDestinationCreated.next();
    }

    private initAddressAutoComplete(): void {
        this.mapsAPILoader.load().then(() => {
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
        });
    }
}
