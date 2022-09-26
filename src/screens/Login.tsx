import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { ApplicationState } from "../redux";
import { useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../redux/Hooks/hooks";
import { ON_LOGIN, ON_LOGOUT } from "../redux/reducers/userSlice";

type Props = {};

const Login = () => {
  const email = "a@a.com";
  const password = "complexPassword";
  const dispatch = useAppDispatch();
  const onTapLogin = () => {
    dispatch(ON_LOGIN({ email, password }));
  };
  const onTapLogOut = () => {
    dispatch(ON_LOGOUT());
  };
  const user = useAppSelector((state) => state.userSlice.user);
  return (
    <View style={styles.container}>
      <Button title="LogIn" onPress={() => onTapLogin()} />
      <Text> user name {user?.firstName}</Text>
      <Text> last name {user?.lastName}</Text>
      <Button title="Logout" onPress={() => onTapLogOut()} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
