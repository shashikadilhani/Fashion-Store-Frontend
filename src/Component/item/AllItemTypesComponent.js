import React from 'react';
import { alignPropType } from 'react-bootstrap/esm/DropdownMenu';
import ItemService from '../../Service/ItemService';

class AllItemTypesComponent extends React.Component{

    constructor(){
        super();
        this.state = {
            users:[]
        }
    }

    //to call rest api
    componentDidMount(){
       
        ItemService.getItemTypes.then((response) => {
            this.setState({itemTypes: response.data})
        });
    }

    render () {
        return (
            //design table for display users
            <div>
                <h1 className = "text-center">user list</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>
                            <td>User Id</td>
                            <td>User First Name</td>
                            <td>User email</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            //use map operator
                            this.state.users.map(
                                user =>
                                <tr key = {user.id}> 
                                    <td>{user.id}</td>
                                    <td>{user.name} </td>
                                    <td>{user.email} </td>
                                </tr>

                            )
                        }
                    </tbody>
                </table>

            </div>
        )
    }

}

export default AllItemTypesComponent;