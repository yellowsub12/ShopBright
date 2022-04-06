import * as React from 'react';
import { ProductList, ProductShow, ProductCreate, ProductEdit } from './products';
import { Admin, Resource } from 'react-admin';
import {
  FirebaseDataProvider,
  FirebaseAuthProvider,
} from 'react-admin-firebase';

import { firebaseConfig } from './FIREBASE_CONFIG'

import firebase from "firebase/compat/app";

import UserIcon from '@material-ui/icons/People';
import CommentIcon from '@material-ui/icons/Comment';

import * as Product from "./products";
import * as Comments from "./comments";

import CustomLoginPage from './CustomLoginPage';
import EventMonitor from './EventMonitor';



const firebaseApp = firebase.initializeApp(firebaseConfig);

console.log({firebaseConfig, firebaseApp});

const authProvider = FirebaseAuthProvider(firebaseConfig);
const dataProvider = FirebaseDataProvider(firebaseConfig, {
  logging: true,
  // rootRef: 'rootrefcollection/QQG2McwjR2Bohi9OwQzP',
  app: firebaseApp,
  // watch: ['posts'];
  // dontwatch: ['comments'];
  persistence: 'local',
  // disableMeta: true
  dontAddIdFieldToDoc: true,
  lazyLoading: {
    enabled: true,
  },
  firestoreCostsLogger: {
    enabled: true,
  },
});

class App extends React.Component {
  render() {
    return (
      <>
        <Admin
          loginPage={CustomLoginPage}
          dataProvider={dataProvider}
          authProvider={authProvider}
        >
          <Resource
            name="Products"
            list={ProductList}
            show={ProductShow}
            create={ProductCreate}
            edit={ProductEdit}
          />
          
        </Admin>
        <EventMonitor />
      </>
    );
  }
}

export default App;
