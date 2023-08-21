import { View, Text, StatusBar } from 'react-native';
import GoalInput from './Components/GoalInput';
import GoalList from './Components/GoalList';
import {styleSheet, colors} from './Styles/styleSheet';
import { useState } from 'react';

function App(){
    const [goals, setGoals] = useState(['Complete React Native course', 'Complete Redux course', 'Complete Node course']);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [goal, setGoal] = useState('');
    // const [goalId, setGoalId] = useState(0);

    return(
        <View style={styleSheet.container}>
            <StatusBar backgroundColor={colors.primary}/>
            <GoalInput props={{isModalVisible, setIsModalVisible}}/>
            <GoalList props={{isModalVisible, setIsModalVisible, goals}}/>
        </View>
    )
}

export default App;