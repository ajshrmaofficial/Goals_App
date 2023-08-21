import { View, Text, StatusBar } from 'react-native';
import GoalInput from './Components/GoalInput';
import GoalList from './Components/GoalList';
import {styleSheet, colors} from './Styles/styleSheet';
import { useState } from 'react';

function App(){
    const [goals, setGoals] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);

    return(
        <View style={styleSheet.container}>
            <StatusBar backgroundColor={colors.primary}/>
            <GoalInput props={{isModalVisible, setIsModalVisible, goals, setGoals}}/>
            <GoalList props={{isModalVisible, setIsModalVisible, goals, setGoals}}/>
        </View>
    )
}

export default App;