export const initialState = {
    isLoggedIn:JSON.parse(localStorage.getItem("isLoggedIn")) || false,
    forms:[],
    fav:[],
    card:[],
    productDetails:[],
}

export const stateReducer = (state,action)=>{
    console.log(state);
    switch(action.type){
        case "LOGIN":return{
            ...state,
            isLoggedIn:action.payload,
        }
        case "FAV":return{
            ...state,
            fav:state.forms.filter((value)=>
            value.id === action.payload.id ? (value.isFav =!action.payload.isFav):false,
            )
        }
        case "CARD":return{
            ...state,
            card:state.forms.filter((value)=>
            value.id === action.payload.id ? (value.isCard =!action.payload.isCard):false,
            )
        }
        case "REMOVE":return{
            ...state,
            card:state.card.filter((value)=>
            value.id !== action.payload.id
            )
        }
        case "PRODUCT":return{
            ...state,
            productDetails:action.payload,
        }
        default:return state;
    }
}