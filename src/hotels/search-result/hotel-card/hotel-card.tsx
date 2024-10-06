import { IHotel } from "../../hotel.model";
import { Rating } from "./rating/rating";
import styles from  "../hotel-search.module.scss";

export const HotelCard:React.FC<{hotel:IHotel}> = props=> {
    return (
      <div className="flex flex-row  gap-4 my-5">
        <div className="text-left">
        <div className="absolute my-5 bg-white" data-testid="hotel-promotion-title">{props.hotel.offer?.promotion?.title}</div>
            <img src={props.hotel.property.previewImage?.url} alt ="logo"  />
        </div>
        <div className="flex-1 text-left search-card py-5" >
            <div className="flex flex-row  gap-4 ">
                <div className="flex-1 text-left" >
                    <div className="flex flex-row  gap-2">
                        <span className={styles.hotelname} data-testid="hotel-property-title">{props.hotel.property.title} </span>
                        {(props.hotel.property?.rating?.ratingValue && props.hotel.property?.rating?.ratingType) &&
                            <Rating rate = {props.hotel.property.rating.ratingValue}
                                    type ={props.hotel.property.rating.ratingType}>
                           </Rating>}
                    </div>
                    <div  className="text-sm">
                       {props.hotel.property.address}
                    </div>
                    <div className={styles.offerlabel} data-testid="hotel-offer-label">{props.hotel.offer?.name}</div>
                    <div className={styles.cancellabel} data-testid="hotel-canel-label">{props.hotel.offer?.cancellationOption?.cancellationType === "FREE_CANCELLATION" && <div>Free cancellation</div>} </div>
                </div>
                <div  className="flex flex-col gap-2">
                        <div  >1 night total (AUD)</div>
                        <div  className={styles.hotelprice}>${props.hotel.offer.displayPrice?.amount}</div>
                        {props.hotel.offer.savings  && <div className={styles.saveamount}>Save ${props.hotel.offer?.savings?.amount}</div>}
                 </div>
            </div>
        </div>
    </div>
    );
}