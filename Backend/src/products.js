import * as React from "react";
import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  DateField,
  ImageField,
  ImageInput,
  SimpleShowLayout,
  SimpleForm,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
  RichTextField,
  ReferenceField,
  SelectInput,
  ReferenceInput,
  FileInput,
  FileField,
  ArrayInput,
  SimpleFormIterator,
  DateInput,
  NumberField,
  NumberInput,
  minValue,
  maxValue,
  choices
} from "react-admin";
import RichTextInput from "ra-input-rich-text";
import { FirebaseReferenceField, FirebaseReferenceInput } from './FirebaseReferenceFields';

// const PostFilter = (props) => (
//   <Filter {...props}>
//     <TextInput label="Search" source="title" alwaysOn />
//   </Filter>
// );

// const ReferenceFilter = (props) => (
//   <Filter {...props}>
//     <ReferenceInput
//       label="Organization"
//       source="user.id"
//       reference="users"
//       allowEmpty
//     >
//       <SelectInput optionText="name" />
//     </ReferenceInput>
//   </Filter>
// );
const mychoice = [ 'Men' ,
 'Electronics',
 'Children' , 'Home' , 'Kitchen' , 'Clothing' ,  'Women','Fitness'];
export const ProductList = (props) => (
  <List
    {...props}
    // filters={<ReferenceFilter />}
    // filter={{ updatedby: "test@example.com" }}
  >
    <Datagrid>
    <TextField source="id"/>
            <TextField source="title"/>
            <NumberField source="price"/>
            
            <NumberField source="rating"/>
            <RichTextField source="descr"/>

            <TextField source="category"/>
            <ImageField  source="image"/>

      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton label="" redirect={false} />
    </Datagrid>
  </List>
);

// const ConditionalEmailField = ({}) =>
//   record && record.hasEmail ? (
//     <EmailField source="email" record={record} {...rest} />
//   ) : null;
export const ProductShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="createdate" />
      <TextField source="lastupdate" />
      <TextField source="title" />
      <RichTextField source="descr" />
     
            <NumberField source="price"/>
            
            <NumberField source="rating"/>
           
            <TextField source="category"/>
            <ImageField  source="image"/>

      <FileField
        source="files_multiple.src"
        title="files_multiple.title"
        multiple
      />
    </SimpleShowLayout>
  </Show>
);

export const ProductCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
    <TextInput source="id"/>
            <TextInput source="title" />
            <TextInput source="descr" />
            <NumberInput source="price" validate={minValue(0, 'Price cannot be zero')} />
            <TextInput source="category" validate={choices(['Men', 'Electronics', 'Children','Home','Kitchen','Clothing','Women'],"Category doesn't exist in our database")}/>
            <NumberInput source="rating" validate={maxValue(5, 'Rating cannot greater than 5')}/>
      
      {/* Or use the easier <FirebaseReferenceInput> */}

     <TextInput source="image"/>
      <ArrayInput source="files">
        <SimpleFormIterator>
          <FileInput source="file" label="Array Form Files">
            <FileField source="src" title="title" />
          </FileInput>
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Create>
);

export const ProductEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <DateField source="createdate" />
      <DateField source="lastupdate" />
            <TextInput source="title" />
            <RichTextInput source="descr" />
            <NumberInput source="price" validate={minValue(0, 'Price cannot be zero')} />
            
            <TextInput source="category" choices={mychoice}/>

    
            <NumberInput source="rating" validate={maxValue(5, 'Rating cannot greater than 5')}/>
      
            <ArrayInput source="files">
        <SimpleFormIterator>
          <FileInput source="file" label="Array Form Files">
            <FileField source="src" title="title" />
          </FileInput>
        </SimpleFormIterator>
      </ArrayInput>
      <TextInput source="image"/>
    </SimpleForm>
  </Edit>
);
