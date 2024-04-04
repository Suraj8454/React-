const ProductReducer = (state, action) => {
    // if (action.type === "SET_LOADING") {
    //     return {
    //         ...state,
    //         isLoading: true,
    //     }
    // }

    // if (action.type === "API_ERROR") {
    //     return {
    //         ...state,
    //         isLoading: flase,
    //         isError: true,
    //     }
    // }


    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            };
        case "MY_API_PRODUCT":
            const featuredata = action.payload.filter((current) => {
                return current.featured === true;
            })
            return {
                ...state,
                isLoading: false,
                product: action.payload,
                featureProducts: featuredata,
            }
        case "API_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        case "SINGLE_LOADING":
            return {
                ...state,
                isSingleloading: true,
            };
        case "MY_SINGLE_PRODUCT":
            return {
                ...state,
                isSingleloading: false,
                soloProduct: action.payload,
            }
        case "SINGLE_ERROR":
            return {
                ...state,
                isSingleloading: false,
                isError: true,
            };
        default:
            return state;
    }
    return state;
};

export default ProductReducer;