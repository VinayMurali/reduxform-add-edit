import React,{Component} from 'react';
import './AddEntity.css';
import request from 'superagent';
import { Field, reduxForm } from "redux-form";
import FWForm from './FWForm';
import './Entity.css';

class Entity extends Component{

  constructor(props){
    super(props)
    this.state={
        showForm :false,
        view:'',
        list:[],
        editIdNo:'',
        value:'',
        tickets:[],
        id:'',
        kafnucredit:'',
        bookingcredit:'',
        loading : false,
        addRequest:false
    };

    this.fetchTickets= this.fetchTickets.bind(this);
    this.handleEdit=this.handleEdit.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);


  }
  componentWillMount(){
    this.fetchTickets();

  }
  fetchTickets(){
    request
      .get('http://localhost:3000/formData/')
      .then(res=>res.body)
      .then(
        (result)=>{
          console.log('inside fetchTickets-results',result);
            this.setState({tickets:result});
            {console.log('tickets',this.state.tickets)}
            }
        )
      .catch(function(err){
        console.log('error in request',err)
      })
  }

  handleEdit=(item)=>{
    this.setState({loading:true},()=>{
      this.setState({showForm:true,
                      editIdNo:item && item.id,
                      //editIdNo:item.id,
                      addRequest : !item && true,
                      loading:false
                    });
    })
}

handleSubmit=(data)=>{
  console.log('form-values',data);
  if(data.id){
    alert('edit')
    let formJsonData = {
          id:data.id,
          kafnucredit:data.kafnucredit,
          bookingcredit:data.bookingcredit
      }
      console.log('formJsonData',formJsonData);
      request
      .put('http://localhost:3000/formData/'+data.id)
      .send(formJsonData)
      .then(function(res){
        console.log('Response:' + JSON.stringify(res.body));
         //location.reload();
         window.location.reload();
      })
      .catch(function(err){
        console.log('error in request',err)
      });
  }else{
    alert('add')
    let formJsonData = {
          kafnucredit:data.kafnucredit,
          bookingcredit:data.bookingcredit
      }
      console.log('formJsonData',formJsonData);
      request
      .post('http://localhost:3000/formData/')
      .send(formJsonData)
      .then(function(res){
        console.log('Response:' + JSON.stringify(res.body));
         //location.reload();
         window.location.reload();
      })
      .catch(function(err){
        console.log('error in request',err)
      });
  }
};

  render(){
    const {loading}=this.state;
    const list = this.state.tickets.map((item)=>{

      const init={
          id:item.id,
          kafnucredit:item.kafnucredit,
          bookingcredit:item.bookingcredit
        }
          return(
            <div className="start" key={item.id}>
              <div className="col-md-12">
                <label>Kafnu Credit:{item.kafnucredit}</label>
              </div>
              <div className="col-md-12">
                <label>Booking Credit:{item.bookingcredit}</label>
              </div>
              <div className="edit-btn">
                <button className="edit-b btn btn-primary" onClick={()=>this.handleEdit(item)}>Edit</button>
              </div>
              <div className="col-md-12">
                  {
                      this.state.editIdNo===item.id &&
                     <FWForm onSubmit = {this.handleSubmit} initialValues={init} value={item}/>
                  }
              </div>
          </div>
          )
        }
      );
    return(
      <div>
        <button className="add-b btn btn-primary" onClick={()=>this.handleEdit(null)}>Add</button>
        {this.state.addRequest && <FWForm onSubmit = {this.handleSubmit} />}
        {!loading && list}
      </div>
    )
  }
}
export default Entity;
