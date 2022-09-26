import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { ApplicationState, onLogin } from "../redux";
import { useDispatch } from "react-redux";


type Props = {};

const Login = () => {
  const dispatch = useDispatch<any>();
  const email = "a@a.com";
  const password = "complexPassword";
  const onTapLogin = () => {
    dispatch(onLogin(email, password));
  };
  const state = useSelector((state: ApplicationState) => state.userReducer);
  console.log(state.user);
  return (
    <View style={styles.container}>
      <Button title="LogIn" onPress={() => onTapLogin()} />
      <Text>{state.user?.firstName}</Text>
      <Text>{state.user?.lastName}</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
