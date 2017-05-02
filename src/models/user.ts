export interface User {

order_reference: string;
                payment_type: string;
                consolidate_orders: boolean;
                is_express_delivery: boolean;
                    name: string;
                    phone: string;
                    alternate_phone: number;
                    email: string;
                    country: string;
                    state:string ;
                    city: string;
                    street_one: string;
                    street_two: string;
                    street_three: string;
                    postal_code: string;
                    instructions: string;
                                                 
                        pickup_address_id: string;
                        package_reference: number;
                        type: string;
                        price: number;
                        order_value: number;
                        description: string;
                        bag_count: number;
                        weight: number;
                        dimension_weight: number;
                        width: number;
                        height: number;
                        depth: number;
                dimension_unit: number
                    
                    }
                       