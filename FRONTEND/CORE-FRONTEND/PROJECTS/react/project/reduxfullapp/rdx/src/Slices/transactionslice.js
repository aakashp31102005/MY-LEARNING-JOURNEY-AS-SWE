import{createSlice} from'@reduxjs/toolkit'

const initialstate={
    transaction:[],
    categories: ["salary", "grocery", "Utilities", "Environment"]
}

const transactionslice=createSlice(
    {
        name:"transaction",
        initialState,
        reducers:{
            addtransaction:(state,action)=>{
                        state.transaction.push(action.payload);
            },
            addcatgry:(state,action)=>{
                        state.categories.push(action.payload.category);
            }
        }
    }
)

export {transactionslice}
export default transactionslice.reducer;