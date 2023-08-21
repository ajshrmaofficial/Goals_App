import {View, TextInput, TouchableOpacity, Text, Modal} from 'react-native';
import {styleSheet, colors} from '../Styles/styleSheet';
import { useEffect, useState } from 'react';

function GoalInput(props) {
  const {isModalVisible, setIsModalVisible} = props.props;
  const [opacity, setOpacity] = useState(0.5);

  useEffect(() => {
    if(isModalVisible){
      setOpacity(1);
    }else{
      setOpacity(0.5);
    }
  }, [opacity])

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View style={[styleSheet.center, styleSheet.modal]}>
          <TextInput placeholder="Course Goal" placeholderTextColor={colors.black} style={styleSheet.input}  />
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={styleSheet.submitButton}>
              <Text style={styleSheet.buttonText}>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={closeModal} style={styleSheet.submitButton}>
              <Text style={styleSheet.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
  );
}

export default GoalInput;
