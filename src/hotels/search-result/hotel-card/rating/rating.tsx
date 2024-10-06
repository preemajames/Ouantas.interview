import React, { PropsWithChildren } from "react";
import CircleIcon from '@mui/icons-material/Circle';
import StarIcon from '@mui/icons-material/Star';
import ContrastIcon from '@mui/icons-material/Contrast';
import StarHalfIcon from '@mui/icons-material/StarHalf';
export const Rating: React.FC<PropsWithChildren<{
    rate:number;
    type: string;
}>> = props => {
    return (
    <span>
        {(props.rate > 0 && props.type !== "") && 
        <div data-testid="hotel-rating-section"> 
            {Array.from({length: Math.floor(props.rate)}).map((value :any, i:any) => {
                return (<RatingIcon type ={props.type} size ="full" key={"icon" + i}  ></RatingIcon>)
            })}
            {props.rate > Math.floor(props.rate) && 
            <RatingIcon  type ={props.type} size ="half" key={"icon" + props.rate}></RatingIcon>}
        </div>}
    </span>
    );
}

export const RatingIcon: React.FC<{
    type:string;
    size:string;
  }> = props => {
    let icon = null;
    if (props.type === "self" && props.size === "full") icon = <CircleIcon style={{ color: "yellow"}}></CircleIcon>;
    else if(props.type === "star" && props.size === "full") icon = <StarIcon style={{ color: "yellow"} } ></StarIcon>;
    else if(props.type === "self" && props.size === "half") icon = <ContrastIcon style={{ color: "yellow"}} key={"circle100"}></ContrastIcon>
    else icon = <StarHalfIcon style={{ color: "yellow"}} key={"star100"}></StarHalfIcon>

    return( icon)
}
