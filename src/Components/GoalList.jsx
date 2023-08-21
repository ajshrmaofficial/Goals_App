import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import {styleSheet, colors} from '../Styles/styleSheet';

function GoalList(props) {
  const {isModalVisible, setIsModalVisible, goals} = props.props;
  const openModal = () => {
    setIsModalVisible(true);
  };

  return (
    <View style={{flex: 1}}>
      <Text style={styleSheet.heading}>Goals</Text>
      <View style={styleSheet.goalList}>
        <FlatList
          data={goals}
          renderItem={({item}) => (
            <View style={styleSheet.goalItem}>
              <Text style={styleSheet.goalText}>{item}</Text>

              <TouchableOpacity style={styleSheet.deleteButton}>
                <Image
                  source={require('../Assets/delete.png')}
                    style={{width: 20, height: 20, tintColor: colors.primary}}
                />
              </TouchableOpacity>
            </View>
          )}
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
