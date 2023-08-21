import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import {styleSheet, colors} from '../Styles/styleSheet';

function GoalItem(props) {
  const {goal, index, deleteGoal} = props.props;
  return (
    <View style={styleSheet.goalItem}>
      <Text style={styleSheet.goalText}>{goal}</Text>
      <TouchableOpacity onPress={deleteGoal.bind(this, index)}>
        <Image
          source={require('../Assets/delete.png')}
          style={styleSheet.deleteIcon}
        />
      </TouchableOpacity>
    </View>
  );
}

function GoalList(props) {
  const {isModalVisible, setIsModalVisible, goals, setGoals} = props.props;
  const openModal = () => {
    setIsModalVisible(true);
  };

  const deleteGoal = index => {
    setGoals(prevGoals => {
      return prevGoals.filter(goal => goal.id !== index);
    });
  };

  return (
    <View style={{flex: 1}}>
      <Text style={styleSheet.heading}>Goals</Text>
      <View style={styleSheet.goalList}>
        <FlatList
          data={goals}
          renderItem={({item}) => (
            <GoalItem props={{goal: item.goal, index: item.id, deleteGoal}} />
          )}
          ListEmptyComponent={() => (
            <View style={styleSheet.center}>
              <Text style={styleSheet.emptyText}>No Goals</Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
      <TouchableOpacity onPress={openModal} style={styleSheet.addButton}>
        <Image
          source={require('../Assets/plus.png')}
          style={{width: 30, height: 30, tintColor: colors.primary}}
        />
      </TouchableOpacity>
    </View>
  );
}

export default GoalList;
