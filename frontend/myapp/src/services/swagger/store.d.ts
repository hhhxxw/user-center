/** Returns pet inventories by status Returns a map of status codes to quantities GET /store/inventory */
export declare function getInventory(options?: {
    [key: string]: any;
}): Promise<Record<string, any>>;
/** Place an order for a pet POST /store/order */
export declare function placeOrder(body: API.Order, options?: {
    [key: string]: any;
}): Promise<API.Order>;
/** Find purchase order by ID For valid response try integer IDs with value >= 1 and <= 10.         Other values will generated exceptions GET /store/order/${param0} */
export declare function getOrderById(params: API.getOrderByIdParams, options?: {
    [key: string]: any;
}): Promise<API.Order>;
/** Delete purchase order by ID For valid response try integer IDs with positive integer value.         Negative or non-integer values will generate API errors DELETE /store/order/${param0} */
export declare function deleteOrder(params: API.deleteOrderParams, options?: {
    [key: string]: any;
}): Promise<any>;
