import { Component, SyntheticEvent } from "react";
import couponData from "../../../../Models/couponData";
import "./CouponListByMaxPrice.css";
import jwtAxios from '../../../../Redux/JWT';
import notify from "../../../../Services/notify";

interface CouponListByMaxPriceState {
	coupons:couponData[];
    price:string;
}

class CouponListByMaxPrice extends Component<{}, CouponListByMaxPriceState> {

    public constructor(props: {}) {
        super(props);
        this.state = {
			coupons:[],
            price:""
        };
    }

    private setValue = (args:SyntheticEvent)=>{
        const value = (args.target as HTMLInputElement).value;
        this.setState({
            price:value
        });
    }

    private getData = async ()=>{
        try{
        const result = await jwtAxios.get("http://localhost:8080/company/couponsByMaxPrice" + this.state.price);
        const myResponse = result.data;
        if (myResponse.length>0) {
            this.setState({
                coupons:myResponse
            });
        }else{notify.error("No coupons found")}
        console.log(myResponse)
        }catch{
            notify.error("ERROR! Cannot get coupons...")
        }
    }

    public render(): JSX.Element {
        return (
            <div className="CouponListByMaxPrice">
				<input type="number" placeholder="Enter a max price" onChange={this.setValue}/>
                <button onClick={this.getData}>Get coupons</button>
            </div>
        );
    }
}

export default CouponListByMaxPrice;
