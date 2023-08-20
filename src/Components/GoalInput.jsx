import {View, TextInput, TouchableOpacity, Text, Modal} from 'react-native';
import {styleSheet, colors} from '../Styles/styleSheet';

function GoalInput(props) {
  const {isModalVisible, setIsModalVisible} = props.props;

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <Modal visible={isModalVisible} animationType="slide">
      <View style={[styleSheet.container, styleSheet.center]}>
        <TextInput placeholder="Course Goal" placeholderTextColor={colors.black} style={styleSheet.input} />
        <TouchableOpacity style={styleSheet.submitButton}>
          <Text style={styleSheet.buttonText}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={closeModal} style={styleSheet.submitButton}>
          <Text style={styleSheet.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

export default GoalInput;
