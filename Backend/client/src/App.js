import * as React from 'react';
import restProvider from 'ra-data-simple-rest';
//import Products from './Products.json';
// import jsonServerProvider from 'ra-data-json-server';
import ProductIcon from '@material-ui/icons/EmojiObjects';
import UserIcon from '@material-ui/icons/Group';

import Dashboard from './Dashboard';
import { FirebaseAuthProvider, FirebaseDataProvider } from 'react-admin-firebase';
import firebase from "firebase/compat/app";
import { Admin, Resource, EditGuesser } from 'react-admin';
import { ProductList, ProductEdit, ProductCreate } from './Product_List';
import { UserCreate, UserEdit, UserList } from './Users_List';
import CustomLoginPage from './CustomLoginPage';





import { firebaseConfig as config } from './FIREBASE_CONFIG.js';

const options = {
  logging: true,
  rootRef: 'root_collection/some_document'
}

const authProvider = FirebaseAuthProvider(config, options);

function App() {
  return <Admin title="Admin Dashboard" loginPage = {CustomLoginPage} dashboard= {Dashboard} authProvider={authProvider} dataProvider={restProvider('http://localhost:4000')}>
    <Resource name="Products" list={ProductList} create={ProductCreate} edit={ProductEdit} icon={ProductIcon}/>
    <Resource name="Users" list={UserList} create={UserCreate} edit={UserEdit} icon={UserIcon}/>
  </Admin>
}

export default App;
