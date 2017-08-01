/**
 * Created by kevinkreuzer on 31.07.17.
 */
import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core'
import {MapsAPILoader} from '@agm/core'
import {FormControl, Validators} from '@angular/forms'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/fromPromise'
import {TripsterAddress} from './tripster-address.model';

@Component({
    selector: 'tripster-address-search',
    templateUrl: './tripster-address-search.html'
})
export class TripsterAddressSearchComponent implements OnInit {

    @Output() onAddressChanged = new EventEmitter<TripsterAddress>();
    addressSearchControl: FormControl
    @ViewChild('search')
    public searchElementRef: ElementRef;

    constructor(private mapsAPILoader: MapsAPILoader) {
        Observable.fromPromise(this.mapsAPILoader.load())
            .subscribe(_ => this.initAddressAutoComplete())
    }

    ngOnInit(): void {
        this.addressSearchControl = new FormControl('', Validators.required)
    }

    private initAddressAutoComplete(): void {
        const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
            types: ['address']
        });

        autocomplete.addListener('place_changed', () => {
            const place: google.maps.places.PlaceResult = autocomplete.getPlace();
            this.emitPlaceChange(place)
        })
    }

    private emitPlaceChange(place: google.maps.places.PlaceResult): void {
        if (place.geometry === undefined || place.geometry === null) {
            return;
        }
        const latitude = place.geometry.location.lat()
        const longitude = place.geometry.location.lng()
        this.onAddressChanged.next({latitude, longitude})
    }
}
