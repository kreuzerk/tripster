/**
 * Created by kevinkreuzer on 03.08.17.
 */
import LatLngLiteral = google.maps.LatLngLiteral;

export class TripsterPath {

    constructor(private startPoint: LatLngLiteral, private endPoint?: LatLngLiteral) {
    }

    public getStartPoint(): LatLngLiteral {
        return this.startPoint
    }

    public setEndpoint(endpoint: LatLngLiteral): void {
        this.endPoint = endpoint
    }

    public setStartPoint(startpoint: LatLngLiteral): void {
        this.startPoint = startpoint
    }

    public getEndPoint(): LatLngLiteral {
        return this.endPoint
    }

    public hasStartPoint(): boolean {
        return !!this.startPoint
    }

    public hasEndPoint(): boolean {
        return !!this.endPoint
    }

    public isComplete(): boolean {
        return !!(this.startPoint && this.endPoint)
    }
}
