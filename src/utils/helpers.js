export const formatPrice = (number) => {
const newNumber=Intl.NumberFormat('en-IN',{
    style:'currency',
    currency:'INR'
     
}).format(number/10)

    return newNumber
}

export const getUniqueValues = () => {}
