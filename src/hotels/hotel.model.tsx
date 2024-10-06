export interface IHotel {
    id:string;
    property: Property;
    offer:Offer
  }
  
  interface Property {
    propertyId:string;
    title: string;
    address: string[];
    previewImage : PreviewImage|null;
    rating:Rating | null
  }
  
  interface PreviewImage{
    url:string;
    caption: string;
    imageType:string;
  }
    interface Rating{
      ratingValue?: number;
      ratingType: string;
    }
  
    interface Offer{
      promotion :Promotion;
      name:string;
      displayPrice:DisplayPrice | null;
      savings?:DisplayPrice| null;
      cancellationOption:CancellationOption | null;
   }
    interface Promotion{
      title:string;
      type:string;
    }
    interface DisplayPrice{
      amount?:number;
      currency:string;
    }
    interface Saving{
      amount?: number;
      currency: string;
    }
    interface CancellationOption{
      cancellationType:string;
    }
  