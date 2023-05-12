import {TypedUseSelectorHook,useSelector} from 'react-redux';
import {RootStateType} from '../redux/state';

// export const useAppDispatch = () => useDispatch<AppDispatch>() // для санок
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector
