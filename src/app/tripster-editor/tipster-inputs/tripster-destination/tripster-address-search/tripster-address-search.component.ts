/**
 * Created by kevinkreuzer on 31.07.17.
 */
import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, NgZone} from '@angular/core'
import {MapsAPILoader} from '@agm/core'
import {FormControl, Validators} from '@angular/forms'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/fromPromise'
import {TripsterAddressCoordinates} from './tripster-address-coordinates.model';

@Component({
    selector: 'tripster-address-search',
    templateUrl: './tripster-address-search.html'
})
export class TripsterAddressSearchComponent implements OnInit {

    @Output() onAddressChanged = new EventEmitter<TripsterAddressCoordinates>()
    @ViewChild('search')
    searchElementRef: ElementRef
    addressSearchControl: FormControl
    isAddressValid = true
    private autocomplete: google.maps.places.Autocomplete

    constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {
        Observable.fromPromise(this.mapsAPILoader.load())
            .subscribe(_ => this.initAddressAutoComplete())
    }

    ngOnInit(): void {
        this.addressSearchControl = new FormControl('', Validators.required)
    }

    private initAddressAutoComplete(): void {
        this.autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
            types: ['geocode']
        });

        this.autocomplete.addListener('place_changed', () => {
            this.ngZone.run(() => {
                this.getNewPlace()
            })
        })
    }

    private getNewPlace(): void {
        const place: google.maps.places.PlaceResult = this.autocomplete.getPlace();
        this.emitPlaceChange(place)
    }

    private emitPlaceChange(place: google.maps.places.PlaceResult): void {
        if (!place) {
            this.isAddressValid = false
            return
        }
        if (place.geometry === undefined || place.geometry === null) {
            this.isAddressValid = false
            return;
        }
        this.isAddressValid = true
        const latitude = place.geometry.location.lat()
        const longitude = place.geometry.location.lng()
        this.onAddressChanged.next({latitude, longitude})
    }

    validateAddress(): void {
        this.getNewPlace()
    }
}
