import 'react-native-gesture-handler'
import React from 'react'
import MainNavigation from './navigation/navigation'
// import OnboardScreen from './screens/Onboard/OnboardScreen'
import { Provider } from 'react-redux'
import { store } from './stores/index'
// import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
 

    <Provider store={store}>
      <MainNavigation />
      {/* <OnboardScreen/> */}
     
    </Provider>
  
  )
}

export default App
