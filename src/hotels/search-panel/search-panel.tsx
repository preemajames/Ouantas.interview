export const SearchPanel:React.FC<{hotelCount:number;  onSort(sortBy: string): void}> = props => {
    return (
        <div className="flex">
            <h5 className="flex-1 text-left italic" data-testid="hotel-search-result">{props.hotelCount} hotels in <span className="font-bold">Sydney</span> </h5>
            <div className="searchpanel">
                <span className="font-bold">Sort by </span> 
                <select className="border"   onChange={e => props.onSort(e.target.value)} data-testid="drp-hotel-sort">
                <option value="price-high-low">Price high-low</option>
                <option value="price-low-high">price low-high</option>
                </select>
            </div>
        </div>
    );
}