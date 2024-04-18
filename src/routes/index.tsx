import { NavigationContainer } from '@react-navigation/native';
import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';
import { Loading } from '@components/Loading';
import { useAuth } from '@hooks/useAuth';


export function Routes() {
  const { user ,isLoadingUserStorageData } = useAuth();


  if (isLoadingUserStorageData) {
    return <Loading />
   }
   
 
  return (
    <NavigationContainer>
       {user?.id ? <AppRoutes /> : <AuthRoutes />}
       {/* <AuthRoutes /> */}
    </NavigationContainer>
  )
}