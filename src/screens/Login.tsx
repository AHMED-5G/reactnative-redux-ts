import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/Hooks/hooks";
import {
  ADD_TRANSACTION,
  ON_LOGIN,
  ON_LOGOUT,
} from "../redux/reducers/userSlice";

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
  function addTransaction() {
    dispatch(
      ADD_TRANSACTION({
        user,
        cost: 10,
      })
    );
  }
  const user = useAppSelector((state) => state.userSlice.user);
  const transactions = useAppSelector((state) => state.userSlice.transactions);
  console.log(transactions)
  return (
    <View style={styles.container}>
      <Button title="LogIn" onPress={() => onTapLogin()} />
      <Text> user name {user?.firstName}</Text>
      <Text> last name {user?.lastName}</Text>
      {/* {transactions.map((tr) => {
        return <Text>aa{tr[0]}</Text>;
      })} */}

      <Button title="Logout" onPress={() => onTapLogOut()} />
      <Button title="Add Transaction" onPress={() => addTransaction()} />
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
