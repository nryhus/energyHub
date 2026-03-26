import {CategoryEnum} from "@/enums/carCategory.enum";
import {BuyTypeEnum} from "@/enums/buyType.enum";

export interface ICar {
    id: string;
    label: string;
    model: string;
    year: number;
    country: string;
    price: number;
    type_of_car: string;
    carCategory: CategoryEnum;
    type_of_buy: BuyTypeEnum;
    image_url: string;
}