import {TripsterDestination} from './tripster-destination.model';
/**
 * Created by kevinkreuzer on 07.08.17.
 */
export interface TripsterTrip {
    id ?: string,
    destinations: Array<TripsterDestination>
}
