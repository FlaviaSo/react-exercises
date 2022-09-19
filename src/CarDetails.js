import React, { useEffect, useRef } from 'react'

export function CarDetails({ initialValue }) {
    const formRef = useRef()

    useEffect(() => {
        formRef.current.elements.brand.value = initialValue.brand
        formRef.current.elements.model.value = initialValue.model
        formRef.current.elements.year.value = initialValue.year
        formRef.current.elements.color.value = initialValue.color
        formRef.current.elements.price.value = initialValue.price
    }, [initialValue]);

    return (
        <>
            <h2>Car Details:</h2>
            <form ref={formRef}>
                <label htmlFor="brand">Brand
                    <input type="text" name="brand" />
                </label>
                <label htmlFor="model">Model
                    <input type="text" name="model" /></label>
                <label htmlFor="year">Year
                    <input type="text" name="year" /></label>
                <label htmlFor="color">Color
                    <input type="text" name="color" /></label>
                <label htmlFor="price">Price
                    <input type="text" name="price" /></label>
            </form>
        </>
    )
}