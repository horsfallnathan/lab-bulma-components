import React from "react";

// class FormField extends React.Component {
//   render() {
//     const { label, type, placeholder } = this.props;
//     return (
//       <div className="field">
//         <label className={label}>{label}</label>
//         <div className="control">
//           <input className="input" type={type} placeholder={placeholder} />
//         </div>
//       </div>
//     );
//   }
// }

const FormField = props => {
  console.log(props);
  const { label, type, placeholder } = props;
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <input className="input" type={type} placeholder={placeholder} />
      </div>
    </div>
  );
};
export default FormField;
