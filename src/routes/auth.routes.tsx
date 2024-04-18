import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SignIn } from '@screens/signIn';

type AuthRoutes = {
  signIn: undefined,
  signUp: undefined,
}

export type AuthNavigatorRouterProps = NativeStackNavigationProp<AuthRoutes> 
const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>()

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} >
      <Screen
       name='signIn'
       component={SignIn}
      />
    </Navigator>
  )
}