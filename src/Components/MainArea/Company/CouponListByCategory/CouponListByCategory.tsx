import { Component, SyntheticEvent } from "react";
import couponData from "../../../../Models/couponData";
import "./CouponListByCategory.css";
import jwtAxios from '../../../../Redux/JWT';
import notify from "../../../../Services/notify";

interface CouponListByCategoryState {
    coupons: couponData[];
    category: string;
  }
  
  class CouponListByCategory extends Component<{}, CouponListByCategoryState> {
    public constructor(props: {}) {
      super(props);
      this.state = {
        coupons: [],
        category: "",
      };
    }
  
    private setValue = (args: SyntheticEvent) => {
      const value = (args.target as HTMLInputElement).value;
      this.setState({
        category: value,
      });
    };
  
    private getData = async () => {
      try {
        const result = await jwtAxios.get(
          "http://localhost:8080/company/couponsByCategory/" + this.state.category
        );
        const myResponse = result.data;
          this.setState({
            coupons: myResponse,
          });
        console.log(myResponse);
      } catch {
        notify.error("ERROR! No coupons found...");
      }
    };
  
    public render(): JSX.Element {
      
      return (
        <div className="CouponListByCategory">
          <input
            type="text"
            placeholder="Enter category name"
            onChange={this.setValue}
          />
          
          <button onClick={this.getData}>Find coupons</button>
        </div>
      );
    }
  }
  
  export default CouponListByCategory;
  