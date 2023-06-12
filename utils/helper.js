

export const getDiscountedPrice =(originalPrice,discountPrice)=>{
    const discount = originalPrice-discountPrice;
    const discount_percentage= (discount/originalPrice) * 100
    return discount_percentage.toFixed(2)
}