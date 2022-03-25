import * as React from "react";
import { Create } from "react-admin";
import { EmailField } from "react-admin";
import { NumberInput } from "react-admin";
import { DeleteButton } from "react-admin";
import { EditButton } from "react-admin";
import { List, Datagrid, TextField, NumberField, UrlField, SimpleForm, ReferenceInput, SelectInput, email, number, TextInput, Edit} from 'react-admin';

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id"/>
            <TextField source="name"/>
            <EmailField source="email"/>
            
            <TextField source="phoneno"/>
            <TextField source="address"/>
            <EditButton basePath="/Users"/>
            <DeleteButton basePath="/Users"/>
        </Datagrid>
    </List>
)

export const UserEdit = props => (
    <Edit {...props}>
        <SimpleForm>
        <TextInput source="id" />
            <TextInput source="name" />
            <TextInput source="email" validate={email('Must be a valid email')}/>
            <TextInput source="phoneno"/>
            <TextInput source="address"/>
        </SimpleForm>
    </Edit>
);

export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm>
        <TextInput source="id" />
            <TextInput source="name" />
            <TextInput source="email" validate={email('Must be a valid email')}/>
            <TextInput source="phoneno"/>
            <TextInput source="address"/>
        </SimpleForm>
    </Create>
    );