import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import { OptionsCount } from '../screens/optionsCount';
import { DataForCounting } from '../screens/dataForCounting';
import { Home } from '../screens/home';
import { History } from '../screens/history';
import { Config } from '../screens/config';
import { Score } from '../screens/score';
import { Camera } from '../screens/camera';
import { useTheme } from 'styled-components';


type AppRoutes = {
  options: undefined;
  dataForCounting: { type: string };
  home: {
    productor_id?: string;
    productorName?: string;
    number_nf?: string;
    type?: string;
    lote?: string;
    name?: string;
    farmName?: string;
    farmId?: string;
  };
  history: undefined;
  config: undefined;
  camera: undefined;
  score: { scoreId: string };
  bluetoothManager: undefined;
};

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;
const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();


export function AppRoutes() {
  const { FONT_SIZE, COLORS } = useTheme();
  const iconSize = FONT_SIZE.XL

  return (
    <Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: COLORS.GREEN_500,
      tabBarInactiveTintColor: COLORS.GREEN_700,
      tabBarStyle: {
        backgroundColor: COLORS.GRAY_600,
        borderTopWidth: 0,
        // display: 'none',
      },


    }}  >
      <Screen
        name="options"
        component={OptionsCount}
        options={() => ({
          tabBarStyle: {
            display: "none",
          },
          tabBarButton: () => null,
        })}
      />
      <Screen
        name="dataForCounting"
        component={DataForCounting}
        options={() => ({
          tabBarStyle: {
            display: "none",
          },
          tabBarButton: () => null,
        })}
      />
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" fill={color} size={iconSize} color="white" />
          )
        }}
      />
      <Screen
        name="history"
        component={History}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="time-outline" fill={color} size={iconSize} color="white" />
          )
        }}
      />
      <Screen
        name="config"
        component={Config}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings-outline" fill={color} size={iconSize} color="white" />
          )
        }}
      />
      <Screen
        name="score"
        component={Score}
        options={{
          tabBarStyle: {
            display: "none",
          }, tabBarButton: () => null
        }}
      />
      <Screen
        name="camera"
        component={Camera}
        options={() => ({
          tabBarStyle: {
            display: "none",
          },
          tabBarButton: () => null,
        })}
      />
    </Navigator>
  )
}