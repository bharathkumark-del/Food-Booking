import { configureStore} from '@reduxjs/toolkit'
import Cartslices from './slices/Cartslices'
import CategorySlice from './slices/CategorySlice'
import SearchSlice from './slices/SearchSlice'
const Store = configureStore({
    reducer:{
        cart : Cartslices,
        category : CategorySlice,
        search : SearchSlice,
    }
}
)

export default Store