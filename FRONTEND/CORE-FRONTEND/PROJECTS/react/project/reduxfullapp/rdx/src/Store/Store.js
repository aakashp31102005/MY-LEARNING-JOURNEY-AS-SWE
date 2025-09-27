import 'react-redux'
import{configureStore} from '@reduxjs/toolkit'
import transactionreducer from '../Slices/transactionslice'
const store =configureStore(
    {
        reducer:{
                transaction:transactionreducer
        }
    }
)