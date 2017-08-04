import { TabNavigator } from 'react-navigation';
import HomeScreen from './Tabs/HomeScreen';
import NewsScreen from './Tabs/NewsScreen';
import DiscoverScreen from './Tabs/DiscoverScreen';

const MainScreen = TabNavigator({
    News: {
        screen: NewsScreen,
    },
    Home: {
        screen: HomeScreen,
    },
    Discover: {
        screen: DiscoverScreen,
    },
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});

export default MainScreen;
