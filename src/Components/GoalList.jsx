import {View, Text, TouchableOpacity, Image} from 'react-native';
import {styleSheet, colors} from '../Styles/styleSheet';

function GoalList(props){

    const {isModalVisible, setIsModalVisible} = props.props;
    const openModal = () => {
        setIsModalVisible(true);
    }

    return(
        <View style={{flex: 1}}>
            <View style={styleSheet.goalList}>
                
            </View>
            <TouchableOpacity onPress={openModal} style={styleSheet.addButton}>
                {/* <Text style={styles.buttonText}>Add a goal</Text> */}
                <Image source={require('../Assets/plus.png')} style={{width: 30, height: 30, tintColor: colors.primary}}/>
            </TouchableOpacity>
        </View>
    )
}

export default GoalList;