import * as React from "react";

import { NumberInput } from "react-admin";
import { DeleteButton } from "react-admin";
import { EditButton } from "react-admin";
import {
    Create, ImageField, ImageInput, maxValue, List, Datagrid, TextField,
    NumberField, UrlField, SimpleForm, Show, SimpleShowLayout, number,
    choices, minValue, ReferenceInput, SelectInput, TextInput, Edit
} from 'react-admin';

const mychoice = [ 'Men' ,
 'Electronics',
 'Children' , 'Home' , 'Kitchen' , 'Clothing' ,  'Women','Fitness'];
export const ProductList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id"/>
            <TextField source="title"/>
            <NumberField source="price"/>
            
            <NumberField source="rating"/>
            <TextField source="descr"/>
            
            <TextField source="category"/>
            <ImageField  source="image"/>
            <EditButton basePath="/Products"/>
            <DeleteButton basePath="/Products"/>
        </Datagrid>
    </List>
)


export const ProductEdit = props => (
   
    <Edit {...props}>
        <SimpleForm>
        <TextInput source="id" validate={minValue(0, 'Id cannot be zero')}/>
            <TextInput source="title" />
            <TextInput source="descr" />
            <NumberInput source="price" validate={minValue(0, 'Price cannot be zero')} />
            
            <TextInput source="category" choices={mychoice}/>

    
            <NumberInput source="rating" validate={maxValue(5, 'Rating cannot greater than 5')}/>
             {/* <ImageInput source="image" label="Related pictures" accept="image/*">
    <ImageField source="src"/>
</ImageInput> */}
        <TextInput source="image"/>
        </SimpleForm>
    </Edit>
);

export const ProductCreate = props => (
    <Create {...props}>
        <SimpleForm>
        <TextInput source="id"/>
            <TextInput source="title" />
            <TextInput source="descr" />
            <NumberInput source="price" validate={minValue(0, 'Price cannot be zero')} />
            <TextInput source="category" validate={choices(['Men', 'Electronics', 'Children','Home','Kitchen','Clothing','Women'],"Category doesn't exist in our database")}/>
            <NumberInput source="rating" validate={maxValue(5, 'Rating cannot greater than 5')}/>
        </SimpleForm>
    </Create>
);
