// import React,{ Component,Fragment} from 'react';
// import './AddEntity.css';
// import { Field, reduxForm} from "redux-form";
// import request from 'superagent';
//
//
// class WForm extends Component {
//
//     constructor(props){
//       super(props);
//       this.state={
//         id:this.props.value.id,
//         kafnucredit:this.props.value.kafnucredit,
//         bookingcredit:this.props.value.bookingcredit
//       }
//       this.kafnucredit=this.kafnucredit.bind(this);
//       this.bookingcredit=this.bookingcredit.bind(this);
//       this.handleSubmit=this.handleSubmit.bind(this);
//     }
//
//     handleSubmit=(event)=>{
//         console.log('inside handleSubmit of Wform');
//         event.preventDefault();
//         const params = {
//               kafnucredit:this.state.kafnucredit,
//               bookingcredit:this.state.bookingcredit
//         }
//         this.props.onSubmitFunc(params);
//         let formJsonData = {
//             id:this.state.id,
//             kafnucredit:this.state.kafnucredit,
//             bookingcredit:this.state.bookingcredit
//         }
//         console.log('formJsonData',formJsonData);
//         alert(formJsonData);
//         request
//         .put('http://localhost:3000/formData/'+this.state.id)
//         .send(formJsonData)
//         .then(function(res){
//           console.log('Response:' + JSON.stringify(res.body));
//            //location.reload();
//            window.location.reload();
//         })
//         .catch(function(err){
//           console.log('error in request',err)
//         });
//       }
//
//     kafnucredit(event){
//         this.setState({kafnucredit:event.target.value})
//     }
//
//     bookingcredit(event){
//         this.setState({bookingcredit:event.target.value})
//     }
//
//     render(){
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <div className="container">
//             <div className="col-md-12">
//                 <label>KC:</label>
//             </div>
//             <div className="col-md-12">
//               <Field
//                 name="kafnucredit"
//                 component="input"
//                 onChange={this.kafnucredit}
//                 maxLength="5"
//               />
//             </div>
//             <div className="col-md-12">
//                 <label>BC:</label>
//             </div>
//             <div className="col-md-12">
//               <Field
//                 name="bookingcredit"
//                 component="input"
//                 onChange={this.bookingcredit}
//                 maxLength="5"
//                 />
//             </div>
//             <div className="col-md-12">
//                 <button className="btn btn-primary">Submit</button>
//             </div>
//         </div>
//       </form>
//       )
//     }
// }
// WForm = reduxForm({
//   form: "WFrm"
// })(WForm);
//
// export default WForm;
