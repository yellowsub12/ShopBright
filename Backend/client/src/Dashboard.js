import * as React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';
export default () => (
    <Card>
        <Title title="Welcome to the Admin Dashboard" />
        <CardContent>Ecommerce Dashboard <br/>
            Products -- Product database <br/>
            Users -- User databasse
        </CardContent>
    </Card>
);