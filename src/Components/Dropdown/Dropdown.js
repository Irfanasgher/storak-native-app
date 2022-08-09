import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
    {label: 'Banana1', value: 'banana1'},
    {label: 'Banana2', value: 'banana2'},
    {label: 'Banana3', value: 'banana3'},
    {label: 'Banana4', value: 'banana4'},
  ]);

  const setOpenF = open => setOpen(open);

  const setValueF = callback => setValue(callback);

  const setItemsF = callback => setItems(callback);

  return (
    <DropDownPicker
      //   style={{zIndex: 1111}}
      placeholder={'Sort'}
      open={open}
      value={value}
      items={items}
      setOpen={setOpenF}
      setValue={setValueF}
      setItems={setItemsF}
      dropDownContainerStyle={{
        borderWidth: 0,
        width: '94%',
        marginLeft: '3%',
      }}
      style={{
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: 'white',
        width: '94%',
        marginLeft: '3%',
        borderColor: 'white',
        borderWidth: 5,
      }}
    />
  );
};

export default Dropdown;

// import React from 'react';
// import DropDownPicker from 'react-native-dropdown-picker';

// const DropDown = props => {
//   const onChangeItem = item => {
//     const {value, name, setFieldValue} = props;
//     setFieldValue(name, item.value);
//     // console.log(item);
//   };
//   return (
//     <>
//       <DropDownPicker
//         items={props.items}
//         defaultNull
//         placeholder={props.placeholder}
//         labelStyle={{color: '#B1B1B1'}}
//         containerStyle={{height: 48}}
//         itemStyle={{justifyContent: 'flex-start'}}
//         arrowColor={'red'}
//         arrowSize={20}
//         onChangeItem={item => onChangeItem(item)}
//         // onOpen={setFieldTouched(name, true)}
//         style={{
//           borderTopLeftRadius: 8,
//           borderTopRightRadius: 8,
//           borderBottomLeftRadius: 8,
//           borderBottomRightRadius: 8,
//           // borderTopWidth: 0,
//           // borderBottomWidth: 0,
//           // borderRightWidth: 0,
//           // borderLeftWidth: 0
//         }}
//         // dropDownStyle={{ borderBottomWidth: 0, borderRightWidth: 0, borderLeftWidth: 0 }}
//       />
//     </>
//   );
// };

// export default DropDown;
